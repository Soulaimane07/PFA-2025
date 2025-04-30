const mongoose = require('mongoose');

const RegionSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Region', RegionSchema);
