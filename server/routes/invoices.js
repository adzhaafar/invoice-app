// router.route('/').get(getInvoices).post(createInvoice)
// router.route('/:id').get(getInvoice).patch(updateInvoice).delete(deleteInvoice)


const express = require('express');
const router = express.Router();
// import invoice model
const Invoice = require('../models/invoice');

// get all invoices
router.get('/', async (req, res) => {
    try {
        const invoices = await Invoice.find({})
        res.status(200).json({invoices})
    } catch (error) {
        res.status(500).json({message: error})

    }
})


// create invoice
router.post('/', async (req, res) => {
    try {
        const createdInvoice = await Invoice.create(req.body)
        res.status(201).json({ createdInvoice })  
    } catch (error) {
        res.status(500).json({message: error})
    }
})

// get single invoice
router.get('/:invoiceId', async(req, res) => {
    try {
        const findInvoice = await Invoice.findById(req.params.invoiceId);
        if (!findInvoice) {
            return res.status(404).json({ msg: `No invoice with id: ${findInvoice}` })
        }
        res.status(200).json({ findInvoice })
    } catch (error) {
        res.status(500).json({message: error})
    }
})

// update single invoice
router.patch('/:invoiceId', async (req, res) => {
    try {   
        const updateInvoice = await Invoice.findByIdAndUpdate(req.params.invoiceId, req.body,  {new: true })
        res.status(200).json({
            updateInvoice
        })
        console.log(updateInvoice)
          
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:invoiceId', async (req, res) => {
    try {
        const deleteInvoice = await Invoice.remove({ _id: req.params.invoiceId });
       res.status(200).json({ deleteInvoice });
    } catch (error) {
        res.status(500).json({ message: error });
    }
    
})


module.exports = router;

// //Update by ID Method
// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await Model.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })