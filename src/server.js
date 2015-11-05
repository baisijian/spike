require('babel/register');
var React = require('react'),
    MainModule = React.createFactory(require('./js/MainModule')),
    express = require('express'),
    path = require('path'),
    app = express(),
    port = 5555


app.use(express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, '../views/'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

var reactHtml = React.renderToString(MainModule({}));
    res.render('index.ejs', {
        reactOutput: reactHtml
    });

});

app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);

console.log('Server is Up and Running at Port : ' + port);