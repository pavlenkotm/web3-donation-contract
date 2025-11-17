const express = require('express');
const router = express.Router();
const { sendEmailNotification, sendPushNotification, sendSMS } = require('../services/notificationService');

// Send notification
router.post('/send', async (req, res) => {
  try {
    const { type, recipient, message, data } = req.body;

    let result;
    switch (type) {
      case 'email':
        result = await sendEmailNotification(recipient, message, data);
        break;
      case 'push':
        result = await sendPushNotification(recipient, message, data);
        break;
      case 'sms':
        result = await sendSMS(recipient, message);
        break;
      default:
        return res.status(400).json({ error: 'Invalid notification type' });
    }

    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get notification history
router.get('/history/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    // TODO: Fetch from database
    res.json({ userId, notifications: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mark notification as read
router.put('/:notificationId/read', async (req, res) => {
  try {
    const { notificationId } = req.params;
    // TODO: Update in database
    res.json({ success: true, notificationId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
