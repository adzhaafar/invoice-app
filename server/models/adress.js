const mongoose = require('mongoose');
const { Invoice } = require('./invoice');
const { Schema, model } = mongoose;


const adressSchema = new Schema({
    street: {
        type: String, 
        required: true 
    },
    city: {
        type: String, 
        required: true 
    },
    postalCode: {
        type: String, 
        required: true
    }
})

module.exports = model('Adress', adressSchema);