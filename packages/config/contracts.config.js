module.exports = {
  rpcUrl: process.env.RPC_URL || 'http://localhost:8545',
  chainId: parseInt(process.env.CHAIN_ID || '31337'),
  addresses: {
    donation: process.env.CONTRACT_ADDRESS_DONATION || '',
    campaign: process.env.CONTRACT_ADDRESS_CAMPAIGN || '',
    nft: process.env.CONTRACT_ADDRESS_NFT || ''
  }
};
