// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title DonationCampaign - Campaign-based donation system
/// @author PavlenkoTM
contract DonationCampaign {
    struct Campaign {
        string title;
        string description;
        address payable beneficiary;
        uint256 goalAmount;
        uint256 currentAmount;
        uint256 deadline;
        bool active;
        bool withdrawn;
    }

    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => mapping(address => uint256)) public donations;
    uint256 public campaignCount;
    address public owner;

    event CampaignCreated(uint256 indexed campaignId, string title, uint256 goalAmount, uint256 deadline);
    event DonationReceived(uint256 indexed campaignId, address indexed donor, uint256 amount);
    event CampaignCompleted(uint256 indexed campaignId, uint256 totalAmount);
    event FundsWithdrawn(uint256 indexed campaignId, address beneficiary, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    /// @notice Create a new donation campaign
    function createCampaign(
        string memory _title,
        string memory _description,
        address payable _beneficiary,
        uint256 _goalAmount,
        uint256 _duration
    ) external onlyOwner returns (uint256) {
        require(_goalAmount > 0, "Goal must be positive");
        require(_duration > 0, "Duration must be positive");

        uint256 campaignId = campaignCount++;
        campaigns[campaignId] = Campaign({
            title: _title,
            description: _description,
            beneficiary: _beneficiary,
            goalAmount: _goalAmount,
            currentAmount: 0,
            deadline: block.timestamp + _duration,
            active: true,
            withdrawn: false
        });

        emit CampaignCreated(campaignId, _title, _goalAmount, block.timestamp + _duration);
        return campaignId;
    }

    /// @notice Donate to a specific campaign
    function donate(uint256 _campaignId) external payable {
        Campaign storage campaign = campaigns[_campaignId];
        require(campaign.active, "Campaign not active");
        require(block.timestamp < campaign.deadline, "Campaign ended");
        require(msg.value > 0, "Must send ETH");

        campaign.currentAmount += msg.value;
        donations[_campaignId][msg.sender] += msg.value;

        emit DonationReceived(_campaignId, msg.sender, msg.value);

        if (campaign.currentAmount >= campaign.goalAmount) {
            campaign.active = false;
            emit CampaignCompleted(_campaignId, campaign.currentAmount);
        }
    }

    /// @notice Withdraw funds from completed campaign
    function withdrawCampaign(uint256 _campaignId) external {
        Campaign storage campaign = campaigns[_campaignId];
        require(msg.sender == campaign.beneficiary, "Not beneficiary");
        require(!campaign.withdrawn, "Already withdrawn");
        require(block.timestamp >= campaign.deadline || !campaign.active, "Campaign still active");
        require(campaign.currentAmount > 0, "No funds");

        campaign.withdrawn = true;
        uint256 amount = campaign.currentAmount;

        (bool success, ) = campaign.beneficiary.call{value: amount}("");
        require(success, "Transfer failed");

        emit FundsWithdrawn(_campaignId, campaign.beneficiary, amount);
    }

    /// @notice Get campaign details
    function getCampaign(uint256 _campaignId) external view returns (
        string memory title,
        string memory description,
        address beneficiary,
        uint256 goalAmount,
        uint256 currentAmount,
        uint256 deadline,
        bool active,
        bool withdrawn
    ) {
        Campaign memory campaign = campaigns[_campaignId];
        return (
            campaign.title,
            campaign.description,
            campaign.beneficiary,
            campaign.goalAmount,
            campaign.currentAmount,
            campaign.deadline,
            campaign.active,
            campaign.withdrawn
        );
    }

    /// @notice Get user donation for specific campaign
    function getUserDonation(uint256 _campaignId, address _donor) external view returns (uint256) {
        return donations[_campaignId][_donor];
    }
}
