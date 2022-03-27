const express = require('express');
const routerRecepta = express.Router();
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: true })  
const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password:'',
    user:'root',
    database:'klinika',
    host:'localhost',
    port:'3306'
})


routerRecepta.post('/', urlencodedParser, function (req, res) {  
    response = {  
        imie:req.body.imie,  
        nazwisko:req.body.nazwisko,
        wiek:req.body.wiek  
 
    };  
    console.log(response);  
    res.end(JSON.stringify(response));  
    // res.redirect('/')
 
    //  sql = 'INSERT INTO recepta(id, imie, nazwisko, wiek) VALUES(NULL, ?, ?,? )'
    //  connection.query(sql , [response.imie, response.nazwisko, response.wiek], (err, rows, fields) => {
    //  })
 })  

module.exports = routerRecepta;