const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');
const userRoutes = require('./API/Routes/userRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://root:example@localhost:27017/pfa2025?authSource=admin")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Serve static HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'welcome.html'));
});

// Use user routes
app.use('/', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
