const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({ 

    driverRequired: { type: Boolean  , ref:'bookings'},
    bookedOn: { type: String } 
})

const driverDataModel = mongoose.model('driverData', driverSchema);

module.exports = driverDataModel;