const express = require("express");
const router = express.Router();
const City = require("../../Models/Regions/City");
const Industry = require("../../Models/Regions/Industry");

// Get all citys
router.get('/', async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.post('/', async (req, res) => {
  const { name, regionId } = req.body;

  try {
    const newCity = new City({ name, regionId });
    await newCity.save();

    res.status(201).send("city added")
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the city by ID
    const city = await City.findById(id);
    if (!city) return res.status(404).send('City not found');

    // Find industries associated with the city
    const industries = await Industry.find({ cityId: id });

    // Return the city along with its industries
    res.status(200).json({ city, industries });
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, regionId } = req.body;

  try {
    const city = await City.findByIdAndUpdate(
      id,
      { name, regionId },
      { new: true }
    );
    if (!city) return res.status(404).send('City not found');
    res.status(200).json(city);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const city = await City.findByIdAndDelete(id);
    if (!city) return res.status(404).send('City not found');
    res.status(200).send('City deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/', async (req, res) => {
  try {
    await City.deleteMany({});
    res.status(200).send('All citys deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
