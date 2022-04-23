// import mongoose
const mongoose = require('mongoose');

// create invoice schema
const invoiceSchema = new mongoose.Schema({

})


module.exports = mongoose.model('Invoice', invoiceSchema)

// status, invoiceNumber, invoiceData, dueDate, billTo, billToAdress, email, userAdress (set once and then doesn't change), amountDue, serviceDescription, rate 
