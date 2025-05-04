const mongoose = require('mongoose');

const FactorySchema = new mongoose.Schema({
    name: String,
    regionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
    cityId: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
});

module.exports = mongoose.model('Factory', FactorySchema);
