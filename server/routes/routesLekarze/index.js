const express = require('express');
const db = require('../../db/dbLekarze')
const routerLekarz = express.Router();

routerLekarz.get('/', async (req, res, next) => {

   try{
        let results = await db.all()
        res.json(results)
   } catch(e){
        console.log(e)
        res.sendStatus(500)
   }
})

module.exports = routerLekarz;