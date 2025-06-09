const express = require('express');
const router = express.Router();
const { getWeatherByCity, getWeatherByLocation } = require('../models/weather');

router.get('/location', async function(req, res, next) {
  const { lat, lon } = req.query;
  res.send(await getWeatherByLocation(lat, lon));

});

router.get('/city', async function(req, res, next) {
  const { city } = req.query;
  res.send(await getWeatherByCity(city));
});

module.exports = router;