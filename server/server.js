// initialize express
const express = require('express');
const app = express();


app.use(express.json())
// import routes
const invoiceRoutes = require('./routes/invoices')

// tell app to use routes

// app.use('/api/v1/invoices', invoiceRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
// queries database for all invoices, prints them out
app.get('/api/v1/invoices', (req, res) => {
  res.send('All invoices here')
})

// takes information from form, saves it to the database
app.post('/api/v1/invoices', (req, res) => {
  // res.send(req.body)
})

// get detailed information about invoice based on its id
app.get('/api/v1/invoices/:id', (req, res) => {

})


// - create a new invoice => app.post('/api/v1/invoices')
// - get single invoice => app.get('/api/v1/invoices/:id')
// - delete an invoice => app.delete('/api/v1/invoices/:id')
// - update invoice => app.patch('api/v1/invoices/:id)
// - get all invoices('/api/v1/invoices')

// port listen
const port = process.env.PORT || 9000;
app.listen(port, console.log(`server running on port ${port}`));


