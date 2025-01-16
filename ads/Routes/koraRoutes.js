// koraRoutes.js
const express = require('express');
const router = express.Router();

// Kora App Routes
router.get('/data', (req, res) => {
  res.status(201).json({"AD_NETWORK":"admob","OPEN_ADS":"ca-app-pub-7676093752347604/1463193930","ADMOB_BANNER_HOME":"ca-app-pub-7676093752347604/7124979493","ADMOB_BANNER_DETAIL":"ca-app-pub-7676093752347604/5214736682","ADMOB_INTER_SPLASH":"ca-app-pub-7676093752347604/2588573343","ADMOB_INTER_DETAIL":"ca-app-pub-7676093752347604/6248616753"}
  );
});

router.get('/key', (req, res) => {
  res.status(201).json({ "key": '9854e19f97c7ab51c6a9443143f6e9643e7b042a7081b400f4510310d3a5e91e' });
});

module.exports = router;
