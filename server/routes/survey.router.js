const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const db = require('../modules/pool');



db.on('error', (error, client) => {
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
    
    params = [ newSurvey.feeling, newSurvey.understanding, newSurvey.support, newSurvey.comments];

    db.query(statement, params)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error in INSERT', error);
            res.sendStatus(500);
        });
    
});

module.exports = router;