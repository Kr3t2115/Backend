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
        pesel:req.body.pesel,
    };  
    console.log(response);  
    res.end(JSON.stringify(response));  
 
     sql = 'INSERT INTO pacjenci(id_pacjenta, imie_pacjenta, nazw_pacjenta, pesel) VALUES(NULL, ?, ?, ? )'
     pool.query(sql , [response.imie, response.nazwisko, response.pesel], (err, rows, fields) => {
     })
     console.log(sql)
 })  

module.exports = routerRecepta;