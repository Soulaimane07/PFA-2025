const express = require("express");
const router = express.Router();
const User = require("../Models/User");

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Signup
router.post('/signup', async (req, res) => {
  const { fullName, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).send('Email already exists');

    const newUser = new User({ fullName, email, password, role });
    await newUser.save();

    res.status(201).send({ fullName, email, role });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      res.status(200).send({ _id: user._id, email, fullName: user.fullName, role: user.role });
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get user by ID  
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).send('User not found');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update user
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { fullName, email, password, role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { fullName, email, password, role },
      { new: true }
    );
    if (!user) return res.status(404).send('User not found');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete user by ID
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).send('User not found');
    res.status(200).send('User deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete all users
router.delete('/users', async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).send('All users deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
