const express = require('express');
const router = express.Router();
const moment = require('moment');
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const stripe = require('stripe')('sk_test_51OOhA8BUkrXmUNq1in6OvJxgnYqcRKDWHSizG11k1Xl8N7zUIdjxAXh13rRrLxQNVrAupEvz8SnYvE9zVPx3qym500s3tIiV7n');
const { v4: uuidv4 } = require('uuid');
const CardData = require("../models/cardModel");
const driverData = require('../models/driverModel')


router.post("/bookcar", async (req, res) => {

        //req.body.transactionId = "1234";


        const { token } = req.body;

        try {
                const customer = await stripe.customers.create({
                        email: token.email,
                        source: token.id,
                });

                const payment = await stripe.charges.create(
                        {
                                amount: req.body.totalAmount * 100,
                                currency: "inr",
                                customer: customer.id,
                                receipt_email: token.email
                        },
                        {
                                idempotencyKey: uuidv4(),

                        });





                req.body.transactionId = payment.source.id;


                const newbooking = new Booking(req.body)
                await newbooking.save()

                const car = await Car.findOne({ _id: req.body.car })  //putting data into an different model from one model



                // console.log(req.body.car);

                car.bookedTimeSlots.push(req.body.bookedTimeSlots);

                await car.save()

                console.log(newbooking)

                const driverInfo = {
                        driverRequired: newbooking.driverRequired,
                        bookedOn: moment(newbooking.createdAt).format('MMMM Do YYYY, h:mm:ss a')
                }




                const newdriverData = new driverData(driverInfo);
                await newdriverData.save();


                const paymentData = {

                        name: req.body.token.card.name,
                        email: req.body.token.email,
                        city: req.body.token.card.address_city,
                        country: req.body.token.card.address_country,
                        expirationYear: req.body.token.card.exp_year,
                        transactionId: req.body.token.id,
                        // Convert amount to the actual value
                };




                const newCardData = new CardData(paymentData);
                await newCardData.save();







                res.send('Your booking is successfull')


        }

        catch (error) {
                return res.status(400).json(error);
        }

})




router.get("/getallbookings", async (req, res) => {

        try {

                const bookings = await Booking.find().populate('car')
                res.send(bookings)

        } catch (error) {
                return res.status(400).json(error);
        }

});
module.exports = router;

/*router.get('/getallbookings', async (req, res) => {




             try {
                     

                     const book = await bookings.find();
                     //const booking = await bookings.find().populate('cars');
                     const jsonData = JSON.stringify(book, null, 3); 
                     res.setHeader('Content-Type', 'application/json');
                     res.send(jsonData);
                    // res.send(booking);
                    

             }

             catch(error) {
                     return res.status(400).json(error);
             }

             

             })
*/