const mongoose = require('mongoose');

const URI = 'mongodb://yeilop44:Fragante44@ds315359.mlab.com:15359/gestion';    

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));


module.exports = mongoose;