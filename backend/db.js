const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://elmouhtadifeirouz:GOndIMTJg4sqXDja@cluster0.5uce3ne.mongodb.net/mydb?retryWrites=true&w=majority'); 
    console.log('✅ MongoDB Atlas connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
