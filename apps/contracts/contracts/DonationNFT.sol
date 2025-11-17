// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title DonationNFT - NFT rewards for donors
/// @author PavlenkoTM
contract DonationNFT {
    struct NFTMetadata {
        uint256 donationAmount;
        uint256 timestamp;
        string tier;
    }

    mapping(uint256 => address) public tokenOwner;
    mapping(uint256 => NFTMetadata) public tokenMetadata;
    mapping(address => uint256[]) public ownerTokens;

    uint256 public tokenIdCounter;
    address public donationContract;
    address public owner;

    event NFTMinted(uint256 indexed tokenId, address indexed recipient, string tier, uint256 amount);
    event NFTTransferred(uint256 indexed tokenId, address indexed from, address indexed to);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyDonationContract() {
        require(msg.sender == donationContract, "Not donation contract");
        _;
    }

    constructor(address _donationContract) {
        owner = msg.sender;
        donationContract = _donationContract;
    }

    /// @notice Mint NFT for donor based on amount
    function mintDonorNFT(address _recipient, uint256 _amount) external onlyDonationContract returns (uint256) {
        uint256 tokenId = tokenIdCounter++;
        string memory tier = _getTier(_amount);

        tokenOwner[tokenId] = _recipient;
        tokenMetadata[tokenId] = NFTMetadata({
            donationAmount: _amount,
            timestamp: block.timestamp,
            tier: tier
        });
        ownerTokens[_recipient].push(tokenId);

        emit NFTMinted(tokenId, _recipient, tier, _amount);
        return tokenId;
    }

    /// @notice Transfer NFT to another address
    function transfer(uint256 _tokenId, address _to) external {
        require(tokenOwner[_tokenId] == msg.sender, "Not token owner");
        require(_to != address(0), "Invalid recipient");

        _removeTokenFromOwner(msg.sender, _tokenId);
        tokenOwner[_tokenId] = _to;
        ownerTokens[_to].push(_tokenId);

        emit NFTTransferred(_tokenId, msg.sender, _to);
    }

    /// @notice Get all tokens owned by address
    function getOwnerTokens(address _owner) external view returns (uint256[] memory) {
        return ownerTokens[_owner];
    }

    /// @notice Get token metadata
    function getTokenMetadata(uint256 _tokenId) external view returns (
        uint256 donationAmount,
        uint256 timestamp,
        string memory tier
    ) {
        NFTMetadata memory metadata = tokenMetadata[_tokenId];
        return (metadata.donationAmount, metadata.timestamp, metadata.tier);
    }

    /// @notice Determine tier based on donation amount
    function _getTier(uint256 _amount) internal pure returns (string memory) {
        if (_amount >= 10 ether) return "Diamond";
        if (_amount >= 5 ether) return "Platinum";
        if (_amount >= 1 ether) return "Gold";
        if (_amount >= 0.1 ether) return "Silver";
        return "Bronze";
    }

    /// @notice Remove token from owner's list
    function _removeTokenFromOwner(address _owner, uint256 _tokenId) internal {
        uint256[] storage tokens = ownerTokens[_owner];
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i] == _tokenId) {
                tokens[i] = tokens[tokens.length - 1];
                tokens.pop();
                break;
            }
        }
    }

    /// @notice Update donation contract address
    function setDonationContract(address _newContract) external onlyOwner {
        donationContract = _newContract;
    }
}
