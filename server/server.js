// initialize express
const express = require('express');
const app = express();


// import routes


// tell app to use routes


// port listen
const port = process.env.PORT || 9000;
app.listen(port, console.log(`server running on port ${port}`));