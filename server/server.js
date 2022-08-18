require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// connect to database through mongoose
mongoose.connect(process.env.DATABASE_URL, () => {
  console.log('Connected to database!');
})



// use middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// import routes
const invoiceRoutes = require('./routes/invoices');
app.use('/api/v1/invoices', invoiceRoutes);


// port listen
const port = process.env.PORT || 3001;
app.listen(port, console.log(`server running on port ${port}`));


