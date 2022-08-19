const mongoose = require('mongoose')

// takes mongoDB atlas url and connects
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connectDB;