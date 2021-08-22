const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const db = require('../modules/pool');


/****** Connection Status ******/
db.on('error', (error, client) => {
    console.log('Error on idle of pg client', error);
    process.exit(-1);
})

db.on('connect', (client) => {
    console.log('DB connection established.');
})

/*********** Routes ***************/

// GET on /api/survey
router.get('/', ( req, res ) => {
    const statement =   `SELECT 
                            id, 
                            feeling, 
                            understanding, 
                            support, 
                            comments, 
                            flagged, 
                            date 
                        FROM feedback 
                        ORDER BY flagged DESC,
                         id ASC`;

    db.query(statement)
        .then((result) => {
            res.send(result.rows);
            console.log('GET /api/survey Records:',result.rows.length);  
        })
        .catch((error) => {
            console.log('GET /api/survey Error:', error);
            res.sendStatus(500);  
        });
});
 
// POST on /api/survey
router.post('/', ( req, res ) => {
    const newSurvey = req.body;
    
    const statement = `INSERT INTO feedback
                            ( feeling, understanding, support, comments )
                        VALUES
                            ( $1, $2, $3, $4 )`;
    
    params = [ 
        newSurvey.feeling, 
        newSurvey.understanding, 
        newSurvey.support, 
        newSurvey.comments
    ];

    db.query(statement, params)
        .then((result) => {
            res.sendStatus(201);
            console.log('POST /api/survey');
            
        })
        .catch((error) => {
            console.log('POST /api/survey Error:', error);
            res.sendStatus(500);
        });
});

// Remove survey record
// DELETE on /api/survey
router.delete('/:id', (req,res) => {
    const statement = `DELETE FROM feedback WHERE id = $1`;
    db.query(statement, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
            console.log('DELETE /api/survey successful');
            
        })
        .catch((error) => {
            console.log('DELETE /api/survey Error:', error);
            res.sendStatus(500);
        });
});

// Toggle feedback 
// PUT on /api/survey
router.put('/:id', (req,res) => {
    const statement = `UPDATE feedback SET flagged = NOT flagged WHERE id = $1`;
    db.query(statement, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
            console.log('PUT /api/survey successful');
            
        })
        .catch((error) => {
            console.log('PUT /api/survey Error:', error);
            res.sendStatus(500);
        });
});

module.exports = router;