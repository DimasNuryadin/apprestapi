const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();

// Parse application/json
// Ketik bodyparser.url dan bodyparser.json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Panggil Routes
var routes = require('./routes');
routes(app);

// Daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

// Lokasi Server
app.listen(3000, () => {
    console.log('Server started on port 3000');
})