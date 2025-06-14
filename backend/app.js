require('dotenv').config();
const express = require('express');
const cors = require('cors');
const quotesRoute = require('./routes/quotes');
const weatherRoute = require('./routes/weather');
const authRoutes = require('./routes/auth');
const entriesRoutes = require('./routes/entries');
const suggestionsRoute = require('./routes/suggestions');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/quotes', quotesRoute);
app.use('/weather', weatherRoute);
app.use('/auth', authRoutes);
app.use('/entries', entriesRoutes);
app.use('/suggestions', suggestionsRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});