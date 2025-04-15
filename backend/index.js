const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');
const User = require("./Models/User")

const app = express();
app.use(express.json());


mongoose.connect("mongodb://root:example@localhost:27017/pfa2025?authSource=admin")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));


app.use(cors({
  origin: 'http://localhost:5173'
}));




// Endpoints

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '1.html'));
});

app.post('/signup', async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).send('Email already exists');

    const newUser = new User({ fullName, email, password });
    await newUser.save();

    res.status(201).send({ fullName, email });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      res.status(200).send({ email, fullName: user.fullName });
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});


app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
});






const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});