const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');
const userRoutes = require('./API/Routes/userRoutes');
const chartRoutes = require('./API/Routes/chartsRoutes');
const NotificationsRoutes = require('./API/Routes/NotificationsRoutes')
const regionRoutes = require('./API/Routes/Regions/regionRoutes')
const cityRoutes = require('./API/Routes/Regions/cityRoutes')
const FactoriesRoutes = require('./API/Routes/Regions/factoriesRoutes')
const devicesRoutes = require('./API/Routes/devicesRoutes')
const mlRoutes = require('./API/Routes/mlRoutes');
const waterDataRoutes = require('./API/Routes/waterDataRoutes');



const app = express();
app.use(express.json());

// Connect to MongoDB
// mongoose.connect("mongodb://root:example@localhost:27017/pfa2025?authSource=admin")
mongoose.connect("mongodb+srv://soulaimanestudent7:Soulaimane%403200@cluster0.rthdnfa.mongodb.net")
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

// Use routes
app.use('/', userRoutes);
app.use('/charts', chartRoutes);
app.use('/notifications', NotificationsRoutes)
app.use('/regions', regionRoutes)
app.use('/cities', cityRoutes)
app.use('/factories', FactoriesRoutes)
app.use('/devices', devicesRoutes)
app.use('/ml', mlRoutes);
app.use('/waterdata', waterDataRoutes);



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
