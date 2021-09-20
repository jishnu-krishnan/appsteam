const express = require('express')
const router = express.Router();
const mysql = require('mysql')

router.get('/list', (req, res, next) => {
    res.send('hello')
});

module.exports = router;