const express = require("express");
const router = express.Router();
const Car = require('../models/carModel');

router.get('/getallcars', async (req, res) => {
  try {
    // Query the MongoDB database to retrieve all cars
    const cars = await Car.find();


    // Convert data to JSON
    const jsonData = JSON.stringify(cars, null, 2); // The third parameter (2) is for indentation

    //console.log(jsonData)
    // Send JSON as a response
    res.setHeader('Content-Type', 'application/json');
    res.send(jsonData);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/addcar', async (req, res) => {

  try {
    const newcar = new Car(req.body)
    await newcar.save()
    res.send('Car added successfully')
  }

  catch (error) {
    // If there was an error, send a HTTP response of 409 and a message saying that the car already exists in the system
    return res.status(400).json(error)
  }


})

router.post('/editcar', async (req, res) => {

  try {
    const car = await Car.findOne({ _id: req.body._id })
    car.name = req.body.name;
    car.image = req.body.image;
    car.fuelType = req.body.fuelType;
    car.rentPerHour = req.body.rentPerHour;
    car.capacity = req.body.capacity;

   await car.save()

    res.send('Car added successfully')
  }

  catch (error) {
    // If there was an error, send a HTTP response of 409 and a message saying that the car already exists in the system
    return res.status(400).json(error)
  }


})

router.post('/deletecar' , async(req , res) => {

  try {

     await Car.findOneAndDelete({ carid: req.body._id })

     res.send('Car deleted successfully')

  }

  catch (error) {
    // If there was an error, send a HTTP response of 409 and a message saying that the car already exists in the system
    return res.status(400).json(error)
  }


})



module.exports = router;