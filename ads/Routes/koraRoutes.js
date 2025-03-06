// koraRoutes.js
const express = require('express');
const router = express.Router();

// Kora App Routes
router.get('/data', (req, res) => {
  res.status(201).json({"AD_NETWORK":"admob","OPEN_ADS":"ca-app-pub-7676093752347604/1463193930","ADMOB_BANNER_HOME":"ca-app-pub-7676093752347604/7124979493","ADMOB_BANNER_DETAIL":"ca-app-pub-7676093752347604/5214736682","ADMOB_INTER_SPLASH":"ca-app-pub-7676093752347604/2588573343","ADMOB_INTER_DETAIL":"ca-app-pub-7676093752347604/6248616753"}
  );
});

router.get('/key', (req, res) => {
  res.status(201).json({ "key": '45d0f9e2461f568afdd12c36c033490bb83495b1a2d397de92a5eb588196675e' });
});

module.exports = router;
