// import mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

// create invoice schema
const invoiceSchema = new Schema({
    addressFrom: {
        type: Schema.Types.ObjectId,
        ref: "Adress"
    }, 
    clientName: {
        type: String, 
        required: true
    }, 
    clientEmail: {
        type: String, 
        required: true
    },
    addressTo: {
        type: Schema.Types.ObjectId,
        ref: "Adress"
    }, 
    invoiceDate: {
        type: Date, 
        required: true
    }, 
    deadline: {
        type: Date, 
        required: true
    }, 
    projectDescription: {
        type: String,
        required: true
    },
    itemList: {
        itemName: {
            type: String, 
            required: true
        },
        qty: {
            type: Number, 
            required: true
        },
    price: {
        type: Number, 
        required: true
    },
    status: {
        type: String, 
        enum: [draft, paid, pending]
    }              
    }
    // code (unique id, but trimmed and with a hash)

})
// add data validation

// create and import a model 
module.exports = mongoose.model('Invoice', invoiceSchema)

