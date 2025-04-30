const express = require("express");
const router = express.Router();
const Industry = require("../../Models/Regions/Industry");

// Get all industrys
router.get('/', async (req, res) => {
  try {
    const industries = await Industry.find();
    res.status(200).json(industries);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.post('/', async (req, res) => {
  const { name, regionId, cityId } = req.body;

  try {
    const newIndustry = new Industry({ name, regionId, cityId });
    await newIndustry.save();

    res.status(201).send("industry created")
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const industry = await Industry.findById(id);
    if (!industry) return res.status(404).send('Industry not found');
    res.status(200).json(industry);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, regionId, cityId } = req.body;

  try {
    const industry = await Industry.findByIdAndUpdate(
      id,
      { name, regionId, cityId },
      { new: true }
    );
    if (!industry) return res.status(404).send('Industry not found');
    res.status(200).json(industry);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const industry = await Industry.findByIdAndDelete(id);
    if (!industry) return res.status(404).send('Industry not found');
    res.status(200).send('Industry deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/', async (req, res) => {
  try {
    await Industry.deleteMany({});
    res.status(200).send('All industries deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
