const express = require('express');
const cors = require('cors');
const messagesRoute = require('./routes/messages');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/messages', messagesRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});