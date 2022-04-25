const mongoose = require('mongoose');
const { modelName } = require('./invoice');
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
        type: Number, 
        required: true
    }
})

module.exports = model('Adress', adressSchema);