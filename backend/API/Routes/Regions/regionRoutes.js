const express = require("express");
const router = express.Router();
const Region = require("../../Models/Regions/Region");
const City = require("../../Models/Regions/City");
const Factory = require("../../Models/Regions/Factory");
const Device = require("../../Models/Device");

// Get all regions
router.get('/', async (req, res) => {
  try {
    // Fetch all regions
    const regions = await Region.find();

    // Fetch all cities and group them by regionId
    const cities = await City.find();
    const cityCountsByRegion = cities.reduce((acc, city) => {
      acc[city.regionId] = (acc[city.regionId] || 0) + 1;
      return acc;
    }, {});
    
    // Fetch all cities and group them by regionId
    const factories = await Factory.find();
    const factoryCountsByRegion = factories.reduce((acc, factory) => {
      acc[factory.regionId] = (acc[factory.regionId] || 0) + 1;
      return acc;
    }, {});

    // Fetch all cities and group them by regionId
    const devices = await Device.find();
    const deviceCountsByRegion = devices.reduce((acc, device) => {
      acc[device.regionId] = (acc[device.regionId] || 0) + 1;
      return acc;
    }, {});

    // Attach city counts to their respective regions
    const regionsWithCityCounts = regions.map(region => ({
      ...region.toObject(),
      cities: cityCountsByRegion[region._id] || 0,
      factories: factoryCountsByRegion[region._id] || 0,
      devices: deviceCountsByRegion[region._id] || 0
    }));

    res.status(200).json(regionsWithCityCounts);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const newRegion = new Region({ name });
    await newRegion.save();

    res.status(201).send("region created")
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const region = await Region.findById(id);
    if (!region) return res.status(404).send('Region not found');
    const cities = await City.find({regionId: id})

    const factoriesdata = await Factory.find();
    const factoryCountsByRegion = factoriesdata.reduce((acc, factory) => {
      acc[factory.regionId] = (acc[factory.regionId] || 0) + 1;
      return acc;
    }, {});

    const factories = factoryCountsByRegion[region._id] || 0

    res.status(200).json({region, cities, factories});
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const region = await Region.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!region) return res.status(404).send('Region not found');
    res.status(200).json(region);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const region = await Region.findByIdAndDelete(id);
    if (!region) return res.status(404).send('Region not found');
    res.status(200).send('Region deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/', async (req, res) => {
  try {
    await Region.deleteMany({});
    res.status(200).send('All regions deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
