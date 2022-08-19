require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/connect');
const port = 3001;


// use middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// import routes, create the main route 
const invoiceRoutes = require('./routes/invoices');
app.use('/api/v1/invoices', invoiceRoutes);


// start function for database
const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();




