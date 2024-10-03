// koraRoutes.js
const express = require('express');
const router = express.Router();

// Kora App Routes
router.get('/data', (req, res) => {
  res.status(201).json({});
});

router.get('/key', (req, res) => {
  res.status(201).json({ "key": '8e0cab03fc355907aa67fcce99734ba0cd7f53f6ccee63efef45770ab6b07402' });
});

module.exports = router;
