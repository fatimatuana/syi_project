const express = require('express');
const router = express.Router();
const { getMessage } = require('../models/testmodel');

// Example route
router.get('/message', async function(req, res, next) {
  res.send(await getMessage());
});

module.exports = router;