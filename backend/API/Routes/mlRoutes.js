const express = require('express');
const router = express.Router();
const multer = require('multer');
const csv = require('csvtojson');
const xlsx = require('xlsx');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Setup multer for file upload (memory storage)
const upload = multer({ storage: multer.memoryStorage() });

router.post('/predict', upload.single('file'), async (req, res) => {
  try {
    let jsonData;

    if (req.file) {
      // File was uploaded, check file type
      const buffer = req.file.buffer;
      const mimeType = req.file.mimetype;

      if (mimeType === 'text/csv') {
        // Parse CSV buffer to JSON
        jsonData = await csv().fromString(buffer.toString('utf-8'));
      } else if (
        mimeType ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        mimeType === 'application/vnd.ms-excel'
      ) {
        // Parse Excel buffer to JSON
        const workbook = xlsx.read(buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        jsonData = xlsx.utils.sheet_to_json(worksheet);
      } else {
        return res.status(400).send('Unsupported file format');
      }
    } else if (req.body && Object.keys(req.body).length > 0) {
      // No file uploaded, expect JSON body
      jsonData = req.body;
    } else {
      return res.status(400).send('No data provided');
    }

    // Send the parsed JSON data to your ML API
    const response = await fetch('http://localhost:8000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    });

    if (!response.ok) {
      return res.status(500).send('ML service error');
    }

    const prediction = await response.json();

    res.status(200).json(prediction);
  } catch (error) {
    console.error(error);
    res.status(500).send('Prediction error');
  }
});

module.exports = router;
