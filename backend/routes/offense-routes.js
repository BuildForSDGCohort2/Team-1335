const express = require('express');

const offenseControllers = require('../controllers/offense-controllers');

const router = express.Router();


router.get('/:oid', offenseControllers.getOffensesById);

router.get('/driver/:did', offenseControllers.getOffensesByUserID);

router.post('/', offenseControllers.createOffense);

module.exports = router;