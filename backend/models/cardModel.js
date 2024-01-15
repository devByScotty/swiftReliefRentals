const mongoose = require('mongoose');

const cardDataSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  expirationYear: { type: String, required: true },
  transactionId: { type: String, required: true },
 
});

const cardDataModel = mongoose.model('cardData', cardDataSchema);

module.exports = cardDataModel;
