const {v4: uuidv4} = require('uuid');

const HttpError = require('../models/http-error');

const DUMMY_OFFENSES = [
    {
        id: 'o1',
        title: 'Over Speeding',
        description: 'Was going over the speed limit along lugogo-by-pass',
        location: {
            lat:0.3343056,
            lng:32.5995037
        },
        createdby: 'Officer Zziwula',
        driver: '8710-012-184-691'
    }
];

const getOffensesById =  (req, res, next) => {   //oid: offenseId
    const offenseId = req.params.oid;   // oid: o1
    const offense = DUMMY_OFFENSES.find(o =>{
        return o.id === offenseId;
    });

    if(!offense) {
        throw new HttpError('Could not find anythings.', 404); 
    }

    res.json({offense: offense});
};

const getOffensesByUserID = (req, res, next) => {     // did: driverId
    const driverId = req.params.did;    // did: u1
    const offense = DUMMY_OFFENSES.find(d => {
        return d.driver === driverId;
    });

    if(!offense) {
       return next (
           new HttpError('Could not find anythings.', 404)
           );           
    }

    res.json({offense: offense});
};

const createOffense = (req, res, next) => {
   const { title, description, coordinates, createdby, driver } = req.body;
   const createdOffense = {
       id: uuidv4(),
       title,
       description,
       location: coordinates,
       createdby,
       driver
   };

   DUMMY_OFFENSES.push(createdOffense);

   res.status(201).json({offense: createdOffense});
};

exports.getOffensesById = getOffensesById;
exports.getOffensesByUserID = getOffensesByUserID;
exports.createOffense = createOffense;