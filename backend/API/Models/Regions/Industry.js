const mongoose = require('mongoose');

const IndustrySchema = new mongoose.Schema({
    name: String,
    regionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
    cityId: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
});

module.exports = mongoose.model('Industry', IndustrySchema);
