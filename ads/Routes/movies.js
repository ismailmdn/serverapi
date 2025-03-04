// koraRoutes.js
const express = require('express');
const router = express.Router();

// Kora App Routes
router.get('/data', (req, res) => {
  res.status(201).json({
    "OPEN_ADS": "ca-app-pub-7676093752347604/8023160988",
    "ADMOB_INTER_SPLASH": "ca-app-pub-7676093752347604/4306271666",
    "ADMOB_INTER_DETAIL": "ca-app-pub-7676093752347604/6775053726"
  });
});

module.exports = router;
