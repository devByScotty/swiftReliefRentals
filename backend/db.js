const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect('mongodb+srv://admin:admin@cluster0.ayonlxx.mongodb.net/shey-cars',
    { useNewUrlParser: true, useUnifiedTopology: true});

    const connection = mongoose.connection;

    connection.on('connected', (req,res) => {
        console.log("Mongo DB Connection Successful")
         
    })

    connection.on('error', () => {
        console.log("Mongo DB Connection unSuccessful")
    })

}

connectDB();

module.exports = mongoose;






















