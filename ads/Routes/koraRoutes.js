// koraRoutes.js
const express = require('express');
const router = express.Router();

// Kora App Routes
router.get('/data', (req, res) => {
  res.status(201).json({
    "AD_NETWORK": "admob",
    "OPEN_ADS": "ca-app-pub-9073960365383029/1979732165",
    "ADMOB_BANNER_HOME": "ca-app-pub-9073960365383029/2813267843",
    "ADMOB_BANNER_DETAIL": "ca-app-pub-9073960365383029/1500186173",
    "ADMOB_INTER_SPLASH": "ca-app-pub-9073960365383029/9961716858",
    "ADMOB_INTER_DETAIL": "ca-app-pub-9073960365383029/1169013683"
  });
});

router.get('/key', (req, res) => {
  res.status(201).json({ "key": 'e847d4d9c5297eaf11335d7ddd97a0797f880cd74bc09516ed35baba924e5a27' });
});

module.exports = router;
