const express = require('express');
const app = express();
const morgan  = require('morgan');
const cors = require('cors');
const { mongoose} = require('./api/database/database');


const processRoutes = require('./api/routes/process');


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/process', processRoutes);

app.get('/', (req, res) => {
    res.send('Welcome API');
});


app.listen(3000, () => {
    console.log('Server on port 3000');
});