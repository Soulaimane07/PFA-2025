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


router.post('/', async (req,res) => {
    const {title, description, date, userId} = req.body;

    try{
        const newNotification = new Notification({title,description,date,userId});
        await newNotification.save();

        res.status(201).send({title,description,date,userId});
    }catch(err){
        res.status(500).send('server error')
    } 
});




module.exports = router;

