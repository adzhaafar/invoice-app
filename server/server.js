// initialize express
const express = require('express');
const app = express();


// import routes
const homeRoute = require('./routes/home');
const invoiceRoute = require('./routes/invoices');

// tell app to use routes
app.use('/', homeRoute);
app.use('/invoice', invoiceRoute);

// port listen
const port = process.env.PORT || 9000;
app.listen(port, console.log(`server running on port ${port}`));