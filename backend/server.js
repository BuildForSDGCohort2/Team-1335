const express = require('express');
const bodyParser = require('body-parser');

const offenseRoutes = require('./routes/offense-routes');

const app = express();


//middleWare routes
app.use('/api/offenses', offenseRoutes);

//error handling middleware
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    } 
    res.status(error.code || 500);
    res.json({message: error.message || 'Unkown error occured!'});
});

app.listen(5000, () => console.log('server is up and running...'));
