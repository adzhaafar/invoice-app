// import mongoose
const mongoose = require('mongoose');

// create an author schema 
const invoiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// export a new model called author (collection name in our database) and pass the schema of author that we created above
module.exports = mongoose.model('Invoice', invoiceSchema)