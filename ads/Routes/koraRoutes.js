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
  res.status(201).json({ "key": 'c2fbdbb871a69e4c09680b10e776f37ee276f22f9fb60c4acdfde67787e57349' });
});

module.exports = router;
