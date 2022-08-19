const express = require('express');
const router = express.Router();
;

const {
    getAllInvoices,
    createInvoice,
    getInvoice,
    updateInvoice,
    deleteInvoice,
} = require('../controllers/invoices');




router.route('/').get(getAllInvoices).post(createInvoice);
router.route('/:id').get(getInvoice).patch(updateInvoice).delete(deleteInvoice);

module.exports = router;