const express = require('express');

const router = express.Router();

const DUMMY_OFFENSES = [
    {
        id: 'o1',
        title: 'Over Speeding',
        description: 'Was going over the speed limit along lugogo-by-pass',
        location: {
            lat:0.3343056,
            lng:32.5995037
        },
        driver: 'u1'
    }
];

router.get('/:oid', (req, res, next) => {   //oid: offenseId
    const offenseId = req.params.oid;   // oid: o1
    const offense = DUMMY_OFFENSES.find(o =>{
        return o.id === offenseId;
    });

    if(!offense) {
        const error = new Error('Could not find anythings.');
        error.code = 404;
        throw error;
    }

    res.json({offense: offense});
});

router.get('/driver/:did', (req, res, next) => {     // did: driverId
    const driverId = req.params.did;    // did: u1
    const offense = DUMMY_OFFENSES.find(d => {
        return d.driver === driverId;
    });

    if(!offense) {
        const error = new Error('Could not find anythings.');
        error.code = 404;
       return next (error);
    }

    res.json({offense: offense});
});

module.exports = router;