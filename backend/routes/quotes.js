const express = require('express');
const router = express.Router();
const { getTodaysQuote } = require('../models/quote');

// GET today's quote
router.get('/today', async function(req, res, next) {
  res.send(await getTodaysQuote());
});

module.exports = router;