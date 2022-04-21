const express = require('express');
const router = express.Router();


router.get('/invoice', (req, res) => {
    // send data from database
    res.send('Hello world')
})

module.exports = router;