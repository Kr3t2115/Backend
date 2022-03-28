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
        lekarz:req.body.lekarz,  
        pacjent:req.body.pacjent,
        lek:req.body.lek,
    };  
    console.log(response);  
    res.end(JSON.stringify(response));  
 
     sql = 'INSERT INTO recepta(id, id_lekarza, id_pacjenta, id_leku, data) VALUES(NULL, ?, ?, ?, CURRENT_TIMESTAMP)'
     pool.query(sql , [response.lekarz, response.pacjent, response.lek], (err, rows, fields) => {
     })
     console.log(sql)
 })  

module.exports = routerRecepta;