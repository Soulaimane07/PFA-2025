const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../../Uploads/CSV/data1.csv');
    res.status(200).sendFile(filePath);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;