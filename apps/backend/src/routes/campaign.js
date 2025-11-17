const express = require('express');
const router = express.Router();

// GET all campaigns
router.get('/', async (req, res) => {
  try {
    // TODO: Fetch campaigns from smart contract
    res.json({ campaigns: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET campaign by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Fetch specific campaign
    res.json({ id, campaign: null });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create campaign
router.post('/', async (req, res) => {
  try {
    const { title, description, goalAmount, duration } = req.body;

    // TODO: Create campaign on blockchain
    res.json({
      success: true,
      message: 'Campaign created',
      campaignId: 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
