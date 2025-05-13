const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'operateur' },
});

module.exports = mongoose.model('User', UserSchema);
