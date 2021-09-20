const express = require('express')
const router = express.Router();
const mysql = require('mysql')

// create database connection
const connection = mysql.createConnection({
    host: process.env.host,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

router.get('/movies', (req, res, next) => {
    connection.query('SELECT Name FROM movies', (error,rows)=>{
        if(!error){
            res.json(rows);
        }
    })
});

router.get('/list', (req, res, next) => {
    connection.query('SELECT * FROM movies', (error,rows)=>{
        if(!error){
            res.json(rows);
        }
    })
});

// Get full details of selected movie
router.post('/search', (req, res, next) => {
    let sql = "SELECT * FROM movies WHERE Name ='" + req.body.name + "'"
    connection.query(sql, (error,rows)=>{
        if(!error){
            res.json(rows);
        }else{
            res.json(error)
        }
    }) 
});

module.exports = router;