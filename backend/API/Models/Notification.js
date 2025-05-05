const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  title: String,
  message: String,
  date: { type: Date, default: Date.now },
  type: {
    type: String,
    enum: ['success', 'error', 'info', 'warning', 'update', 'system'],
    default: 'info'
  },
  read: {type: Boolean, default: false},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  toUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Notification', NotificationSchema);