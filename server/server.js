const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
