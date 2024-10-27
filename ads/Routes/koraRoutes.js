// koraRoutes.js
const express = require('express');
const router = express.Router();

// Kora App Routes
router.get('/data', (req, res) => {
  res.status(201).json({"AD_NETWORK":"admob","OPEN_ADS":"ca-app-pub-7676093752347604/1463193930","ADMOB_BANNER_HOME":"ca-app-pub-7676093752347604/7124979493","ADMOB_BANNER_DETAIL":"ca-app-pub-7676093752347604/5214736682","ADMOB_INTER_SPLASH":"ca-app-pub-7676093752347604/2588573343","ADMOB_INTER_DETAIL":"ca-app-pub-7676093752347604/6248616753"}
  );
});

router.get('/key', (req, res) => {
  res.status(201).json({ "key": '145f789c5edde568621c2f77fd645e556f36da47cd8273e9833d8df414cd10b4' });
});

module.exports = router;
