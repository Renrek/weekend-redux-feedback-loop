const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const db = require('../modules/pool');



db.on('connect', (error, client) => {
    console.log('Error on idle of pg client', error);
    process.exit(-1);
})

db.on('connect', (client) => {
    console.log('pg connected');
})

router.get('/', ( req, res ) => {

});

router.post('/', ( req, res ) => {
    const newSurvey = req.body;
    
    const statement = `INSERT INTO feedback
                            ( feeling, understanding, support, comments )
                        VALUES
                            ( $1, $2, $3, $4 )`;
    
    
    
    res.sendStatus(200)
    
});

module.exports = router;