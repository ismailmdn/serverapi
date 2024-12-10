// koraRoutes.js
const express = require('express');
const router = express.Router();

// Kora App Routes
router.get('/data', (req, res) => {
  res.status(201).json({
    "AD_NETWORK": "admob",
    "OPEN_ADS": "ca-app-pub-7676093752347604/4885661090",
    "ADMOB_BANNER_HOME": "ca-app-pub-7676093752347604/6637726467",
    "ADMOB_BANNER_DETAIL": "ca-app-pub-7676093752347604/6333468541",
    "ADMOB_INTER_SPLASH": "ca-app-pub-7676093752347604/3707305208",
    "ADMOB_INTER_DETAIL": "ca-app-pub-7676093752347604/6633857032"
  });
});

module.exports = router;
