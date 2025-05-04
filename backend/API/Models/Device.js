const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    factoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Factory' },
    regionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
    cityId: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
});

module.exports = mongoose.model('Device', DeviceSchema);