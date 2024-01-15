/*const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const dbConnection = require('./db');
const carsRoute= require("./routes/carsRoute");
const Car = require(".//models/carModel");



app.use(express.json());

app.use('/ap/cars' ,carsRoute);

app.get('/api/cars/getallcars', async (req, res) => {
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


const path = require('path');

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req,res) =>res.send("Hello World")
            
)

app.listen(port , () =>console.log(`Node JS Server Started in Port ${port}`))

*/

