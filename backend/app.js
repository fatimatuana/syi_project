const express = require('express');
const cors = require('cors');
const quotesRoute = require('./routes/quotes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/quotes', quotesRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});