const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const dbConnection = require('./db');
const carsRoute= require("./routes/carsRoute");  // route for cars
const usersRoute = require("./routes/userRoute");  
const bookingsRoute = require("./routes/bookingRoute");  //route for users


app.use(express.json());

app.use('/api/cars' ,carsRoute);

app.use('/api/users' ,usersRoute);

app.use('/api/booking' , bookingsRoute);

app.get('/', (req,res) =>res.send("Hello World"));

app.listen(port , () =>console.log(`Node JS Server Started in Port ${port}`));



