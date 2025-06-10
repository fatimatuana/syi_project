// routes/entries.js
const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// Add new entry
router.post('/add', async (req, res) => {
  const {
    userId, weather_status, temperature,
    mood, entry_date, location_name,
    latitude, longitude
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO user_entries 
       (user_id, weather_status, temperature, mood, entry_date, location_name, latitude, longitude)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       RETURNING *`,
      [userId, weather_status, temperature, mood, entry_date, location_name, latitude, longitude]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not save entry' });
  }
});

// Get all entries for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM user_entries WHERE user_id = $1 ORDER BY entry_date DESC',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch entries' });
  }
});

module.exports = router;