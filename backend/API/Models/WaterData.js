const mongoose = require("mongoose");

const waterDataSchema = new mongoose.Schema({
  device_id: String,
  timestamp: String,
  pH: Number,
  Hardness: Number,
  Solids: Number,
  Chloramines: Number,
  Sulfate: Number,
  Conductivity: Number,
  Organic_carbon: Number,
  Trihalomethanes: Number,
  Turbidity: Number,
  water_level: Number,
  tank_capacity: Number
});

module.exports = mongoose.model("WaterData", waterDataSchema);
