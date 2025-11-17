module.exports = {
  apiUrl: process.env.VITE_API_URL || 'http://localhost:3001',
  walletConnectProjectId: process.env.VITE_WALLET_CONNECT_PROJECT_ID || '',
  chainId: parseInt(process.env.VITE_CHAIN_ID || '1'),
  analyticsId: process.env.VITE_ANALYTICS_ID || ''
};
