const { ethers } = require('ethers');

// Format ETH amount
function formatEther(wei) {
  return ethers.formatEther(wei);
}

// Parse ETH amount
function parseEther(ether) {
  return ethers.parseEther(ether.toString());
}

// Format address (short version)
function formatAddress(address) {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// Format timestamp to date
function formatTimestamp(timestamp) {
  return new Date(timestamp * 1000).toISOString();
}

// Calculate campaign progress percentage
function calculateProgress(current, goal) {
  if (goal === 0) return 0;
  return Math.min((current / goal) * 100, 100);
}

// Get NFT tier by amount
function getNFTTier(amount) {
  const amountInEth = parseFloat(formatEther(amount));

  if (amountInEth >= 10) return 'Diamond';
  if (amountInEth >= 5) return 'Platinum';
  if (amountInEth >= 1) return 'Gold';
  if (amountInEth >= 0.1) return 'Silver';
  return 'Bronze';
}

module.exports = {
  formatEther,
  parseEther,
  formatAddress,
  formatTimestamp,
  calculateProgress,
  getNFTTier
};
