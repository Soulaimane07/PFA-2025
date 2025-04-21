const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Notification', NotificationSchema);