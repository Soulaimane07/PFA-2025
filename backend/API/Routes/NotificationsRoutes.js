const express = require("express");
const router = express.Router();
const Notification = require("../Models/Notification")


router.get('/',async(req,res) => {
  try{
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  }catch(err){
    res.status(500).send('server error');
  }
});

router.get('/userId/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await Notification.find({
      $or: [
        { userId: userId },
        { toUserId: userId }
      ]
    });

    // If no notifications found
    if (notifications.length === 0) {
      return res.status(404).json([]);
    }

    res.status(200).json(notifications);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});



router.post('/', async (req,res) => {
    const {title, message, date, type, read, userId, toUserId} = req.body;

    try{
        const newNotification = new Notification({title, message, date, type, read, userId, toUserId});
        await newNotification.save();

        res.status(201).send(newNotification);
    }catch(err){
        res.status(500).send('server error')
    } 
});

router.put('/read/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Update the notification's read status
    const notification = await Notification.findByIdAndUpdate(
      id,
      { read: true },
      { new: true } // Return the updated document
    );

    if (!notification) {
      return res.status(404).send('Notification not found');
    }

    res.status(200).json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const notification = await Notification.findByIdAndDelete(id);
    if (!notification) return res.status(404).send('Notification not found');
    res.status(200).send('Notification deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.delete('/', async (req, res) => {
  try {
    await Notification.deleteMany({});
    res.status(200).send('All notifications deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;

