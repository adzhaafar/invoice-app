// import model
const Invoice = require('../models/invoice')

const getInvoices = (req, res) => {
    // try {
    //     const invoices = await Invoice.find({})
    //     res.status(200).json({tasks})
    // } catch (error) {
    //     res.status(500).json({msg: error})
    // }
    res.send('All invoices here');
}

const createInvoice = async (req, res) => {
    // try {
    //     const task = await Task.create(req.body)
    //     res.status(201).json({ task })  
    // } catch (error) {
    //     res.status(500).json({msg: error})     
    // }
}

const getInvoice = async (req, res) => {
    // try {
    //     // same as const taskId = req.params.id
    //     const { id: taskID } = req.params
    //     const task = await Task.findOne({_id: taskID})
    //     if (!task) {
    //         return res.status(404).json({msg: `No task with id: ${taskID}`})
    //     }
    //     res.status(200).json({ task })

    // } catch (error) {
    //     res.status(500).json({msg: error}) 
    // }

}

const deleteInvoice = async (req, res) => {
    //  // usually don't look for specific item, if successful just delete
    //  try {
    //     // same as const taskId = req.params.id
    //     const { id: taskID } = req.params
    //     const task = await Task.findOneAndDelete({_id: taskID})
    //     if (!task) {
    //         return res.status(404).json({msg: `No task with id: ${taskID}`})
    //     }
    //     res.status(200).json({ task })
        
    // } catch (error) {
    //     res.status(500).json({msg: error}) 
    // }
}

const updateInvoice = async (req, res) => {
    // try {
    //     const taskID = req.params.id

    //     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    //         new: true,
    //         runValidators: true
    //     })

    //     res.status(200).json({id: taskID, data: req.body})
    // } catch (error) {
    //     res.status(500).json({msg: error}) 
    // }
}

// 
module.exports = {
    getInvoices,
    createInvoice,
    getInvoice,
    updateInvoice,
    deleteInvoice
}