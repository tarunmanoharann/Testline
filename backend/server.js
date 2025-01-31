const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Proxy endpoint
app.get('/api/quiz', async (req, res) => {
  try {
    const response = await fetch('https://api.jsonserve.com/Uw5CrX');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    res.status(500).json({ error: 'Failed to fetch quiz data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});