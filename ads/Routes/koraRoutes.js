// koraRoutes.js
const express = require('express');
const router = express.Router();

// Kora App Routes
router.get('/data', (req, res) => {
  res.status(201).json({});
});

router.get('/key', (req, res) => {
  res.status(201).json({ "key": 'e847d4d9c5297eaf11335d7ddd97a0797f880cd74bc09516ed35baba924e5a27' });
});

module.exports = router;
