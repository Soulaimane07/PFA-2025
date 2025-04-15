const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'industrial' },
});

module.exports = mongoose.model('User', UserSchema);
