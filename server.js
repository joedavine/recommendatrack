var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/* GET HOMEPAGE */
app.get('/', function (req, res) {
    res.render('home', {layout: 'main'});
});

app.listen(3000);

app.use(express.static('public'));


var userChoice = '';


if(userChoice === ''){
    console.log('True');
} else {
    console.log('False');
}
