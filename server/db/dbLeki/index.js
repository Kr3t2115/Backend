const res = require('express/lib/response')
const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password:'',
    user:'root',
    database:'klinika',
    host:'localhost',
    port:'3306'
})

let baza = {}

baza.all = () => {
    
    return new Promise((resolve,reject) => {

        pool.query('SELECT * FROM leki', (err, results) => {
            if(err) {
                return reject(err)
            }
            return resolve(results)
        })

    })
}

module.exports = baza   