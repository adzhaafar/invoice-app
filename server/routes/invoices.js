const express = require('express');
const router = express.Router();

// import controller functions
const { getInvoices, createInvoice, getInvoice, updateInvoice, deleteInvoice } = require('../controllers/invoices')

// routes
router.route('/').get(getInvoices).post(createInvoice)
router.route('/:id').get(getInvoice).patch(updateInvoice).delete(deleteInvoice)



module.exports = router

