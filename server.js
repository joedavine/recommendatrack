var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

// adding mongoose mongo db schema
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});

// end of mongoosing

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/* GET HOMEPAGE */
app.get('/', function (req, res) {
    res.render('home', {layout: 'main'});
});

/* GET ADMIN PAGE */
app.get('/admin', function (req, res) {
    res.render('admin', {layout: 'main'});
});

app.listen(3000);

app.use(express.static('public'));


