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
    const statement = `SELECT id, feeling, understanding, support, comments, flagged, date FROM feedback ORDER BY id ASC`;
    db.query(statement)
        .then((result) => {
            res.send(result.rows);
            console.log('Records fetched on GET /api/survey:',result.rows.length);
            
        })
        .catch((error) => {
            console.log('Error GET /api/survey', error);
            res.sendStatus(500);  
        });
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
            console.log('New insert on POST /api/survey');
            
        })
        .catch((error) => {
            console.log('Error in INSERT', error);
            res.sendStatus(500);
        });
    
});

router.delete('/:id', (req,res) => {
    const statement = `DELETE FROM feedback WHERE id = $1`;
    db.query(statement, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
            console.log('DELETE on /api/survey successful');
            
        })
        .catch((error) => {
            console.log('Error in INSERT', error);
            res.sendStatus(500);
        });
})

module.exports = router;