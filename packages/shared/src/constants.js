// Network constants
const NETWORKS = {
  MAINNET: 1,
  SEPOLIA: 11155111,
  LOCALHOST: 31337
};

// Contract addresses (to be updated after deployment)
const CONTRACT_ADDRESSES = {
  DONATION: '0x0000000000000000000000000000000000000000',
  CAMPAIGN: '0x0000000000000000000000000000000000000000',
  NFT: '0x0000000000000000000000000000000000000000'
};

// NFT Tiers
const NFT_TIERS = {
  BRONZE: 'Bronze',
  SILVER: 'Silver',
  GOLD: 'Gold',
  PLATINUM: 'Platinum',
  DIAMOND: 'Diamond'
};

// NFT Tier Thresholds (in ETH)
const NFT_TIER_THRESHOLDS = {
  BRONZE: 0.01,
  SILVER: 0.1,
  GOLD: 1,
  PLATINUM: 5,
  DIAMOND: 10
};

// Campaign status
const CAMPAIGN_STATUS = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
  FAILED: 'failed',
  WITHDRAWN: 'withdrawn'
};

// Notification types
const NOTIFICATION_TYPES = {
  DONATION_RECEIVED: 'donation_received',
  CAMPAIGN_COMPLETED: 'campaign_completed',
  CAMPAIGN_MILESTONE: 'campaign_milestone',
  NFT_MINTED: 'nft_minted',
  WITHDRAWAL_COMPLETED: 'withdrawal_completed'
};

module.exports = {
  NETWORKS,
  CONTRACT_ADDRESSES,
  NFT_TIERS,
  NFT_TIER_THRESHOLDS,
  CAMPAIGN_STATUS,
  NOTIFICATION_TYPES
};
