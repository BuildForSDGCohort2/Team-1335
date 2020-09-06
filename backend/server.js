const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user-routes');

const app = express();


//middleWare
app.use(userRoutes);

app.listen(5000, () => console.log('server is up and running...'));
