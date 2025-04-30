const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: String,
    regionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
});

module.exports = mongoose.model('City', CitySchema);
