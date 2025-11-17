const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
require('dotenv').config();

const notificationRoutes = require('./routes/notifications');
const subscriptionRoutes = require('./routes/subscriptions');
const { initializeQueue } = require('./services/queue');
const { listenToBlockchainEvents } = require('./services/blockchain');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/notifications', notificationRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Notification Service'
  });
});

// WebSocket server for real-time notifications
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  ws.on('message', (message) => {
    console.log('Received:', message.toString());
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🔔 Notification Service running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle WebSocket upgrade
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

// Initialize queue and blockchain listener
initializeQueue();
listenToBlockchainEvents();

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = { app, wss };
