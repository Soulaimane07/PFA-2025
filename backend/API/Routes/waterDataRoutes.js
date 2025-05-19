const express = require("express");
const router = express.Router();
const WaterData = require("../Models/WaterData");

// GET latest water data
router.get("/latest", async (req, res) => {
  try {
    const data = await WaterData.find().sort({ timestamp: -1 }).limit(1);
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// GET all water data
router.get("/", async (req, res) => {
  try {
    const allData = await WaterData.find().sort({ timestamp: -1 });
    res.json(allData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch all water data" });
  }
});

router.get('/monthly', async (req, res) => {
  try {
    // const now = new Date();
    // const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    // const firstDayOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    // Fetch data with timestamps within this month
    const data = await WaterData.find();

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/range', async (req, res) => {
  try {
    const { start, end } = req.query;
    if (!start || !end) return res.status(400).json({ error: 'start and end query parameters required' });

    const data = await WaterData.find({
      timestamp: {
        $gte: start,
        $lte: end,
      },
    }).sort({ timestamp: 1 });

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});




module.exports = router;
