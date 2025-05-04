const express = require("express");
const router = express.Router();
const Factory = require("../../Models/Regions/Factory");
const Device = require("../../Models/Device");

// Get all factorys
router.get('/', async (req, res) => {
  try {
    const facroties = await Factory.find();
    res.status(200).json(facroties);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.post('/', async (req, res) => {
  const { name, regionId, cityId } = req.body;

  try {
    const newFactory = new Factory({ name, regionId, cityId });
    await newFactory.save();

    res.status(201).send("factory created")
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const factory = await Factory.findById(id);
    if (!factory) return res.status(404).send('Factory not found');

    const devices = await Device.find({ factoryId: id });


    res.status(200).json({factory, devices});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});





router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, regionId, cityId } = req.body;

  try {
    const factory = await Factory.findByIdAndUpdate(
      id,
      { name, regionId, cityId },
      { new: true }
    );
    if (!factory) return res.status(404).send('Factory not found');
    res.status(200).json(factory);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const factory = await Factory.findByIdAndDelete(id);
    if (!factory) return res.status(404).send('Factory not found');
    res.status(200).send('Factory deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/', async (req, res) => {
  try {
    await Factory.deleteMany({});
    res.status(200).send('All facroties deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
