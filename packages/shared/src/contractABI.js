// Simplified ABIs for the contracts
// Full ABIs should be imported from contract artifacts after compilation

const DonationABI = [
  "function donate() external payable",
  "function withdraw() external",
  "function getBalance() external view returns (uint256)",
  "event Donated(address indexed donor, uint256 amount)",
  "event Withdrawn(address indexed owner, uint256 amount)"
];

const CampaignABI = [
  "function createCampaign(string memory title, string memory description, address payable beneficiary, uint256 goalAmount, uint256 duration) external returns (uint256)",
  "function donate(uint256 campaignId) external payable",
  "function withdrawCampaign(uint256 campaignId) external",
  "function getCampaign(uint256 campaignId) external view returns (string memory, string memory, address, uint256, uint256, uint256, bool, bool)",
  "event CampaignCreated(uint256 indexed campaignId, string title, uint256 goalAmount, uint256 deadline)",
  "event DonationReceived(uint256 indexed campaignId, address indexed donor, uint256 amount)",
  "event CampaignCompleted(uint256 indexed campaignId, uint256 totalAmount)"
];

const NFTABI = [
  "function mintDonorNFT(address recipient, uint256 amount) external returns (uint256)",
  "function transfer(uint256 tokenId, address to) external",
  "function getOwnerTokens(address owner) external view returns (uint256[])",
  "function getTokenMetadata(uint256 tokenId) external view returns (uint256, uint256, string memory)",
  "event NFTMinted(uint256 indexed tokenId, address indexed recipient, string tier, uint256 amount)"
];

module.exports = {
  DonationABI,
  CampaignABI,
  NFTABI
};
