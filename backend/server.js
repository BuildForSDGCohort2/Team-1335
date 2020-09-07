const express = require('express');
const bodyParser = require('body-parser');

const offenseRoutes = require('./routes/offense-routes');
const HttpError = require('./models/http-error');

const app = express();


app.use(bodyParser.json());

//middleWare routes
app.use('/api/offenses', offenseRoutes); //api/offenses

app.use((req, res, next) => {
    const error = new HttpError('Could not find this service path.', 404);
    throw error;
});

//error handling middleware
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    } 
    res.status(error.code || 500);
    res.json({message: error.message || 'Unkown error occured!'});
});

app.listen(5000, () => console.log('server is up and running...'));
