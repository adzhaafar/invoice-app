const invoiceModel = require('../models/invoice');


const getAllInvoices = async (req, res) => {
    try {
        const invoices = await invoiceModel.find({});
        res.status(200).json({ invoices });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const createInvoice = async (req, res) => {
    try {
        const createdInvoice = invoiceModel.create(req.body);
        res.status(201).json(createdInvoice);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getInvoice = async (req, res) => {
    try {
        const findInvoice = await invoiceModel.findById(req.params.invoiceId);
        if (!findInvoice) {
            return res.status(404).json({msg: `No invoice with id: ${req.params.invoiceId}`})
        }
        res.status(200).json({ findInvoice });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateInvoice = async (req, res) => {
    try {
        const updatedInvoice = invoiceModel.updateOne({ id: req.params.invoiceId }, { body: req.body });
        if (!updatedInvoice) {
            res.status(404).json({ msg: `There is no invoice with id ${invoiceId}` });
        }
        res.status(200).json({updatedInvoice})
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteInvoice = async (req, res) => {
    try {
        const deletedInvoice = invoiceModel.deleteOne({ id: req.params.invoiceId });
        if (!deletedInvoice) {
            res.status(400).json({ msg: `No invoice with the id ${req.params.invoiceId}` });
        }

    } catch (error) {
        res.status(500).json({ message: error });
    }
}


module.exports = {
    getAllInvoices, getInvoice, createInvoice, updateInvoice, deleteInvoice
}



