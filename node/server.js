require('./model/db');
const express = require('express');

const path = require('path');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const empCtrl = require('./controller/employeeController');

const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayouts',
    layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');

app.listen('3000', () => {
    console.log("Server Started on port : 3000");
});

app.use('/employee', empCtrl);
