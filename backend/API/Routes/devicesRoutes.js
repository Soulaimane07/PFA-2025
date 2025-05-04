const express = require("express");
const router = express.Router();
const Factory = require("../Models/Regions/Factory");
const City = require("../Models/Regions/City");
const Region = require("../Models/Regions/Region");
const Device = require("../Models/Device");

// Get all factorys
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.post('/', async (req, res) => {
  const { title, image, description, factoryId, cityId, regionId } = req.body;

  try {
    const newDevice = new Device({ title, image, description, factoryId, cityId, regionId });
    await newDevice.save();

    res.status(201).send("device created")
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const device = await Device.findById(id);
    if (!device) return res.status(404).send('Device not found');
    res.status(200).json(device);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, image, description, factoryId, cityId, regionId } = req.body;

  try {
    const device = await Device.findByIdAndUpdate(
      id,
      { title, image, description, factoryId, cityId, regionId },
      { new: true }
    );
    if (!device) return res.status(404).send('Device not found');
    res.status(200).json(device);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const device = await Device.findByIdAndDelete(id);
    if (!device) return res.status(404).send('Device not found');
    res.status(200).send('Device deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/', async (req, res) => {
  try {
    await Device.deleteMany({});
    res.status(200).send('All devices deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
