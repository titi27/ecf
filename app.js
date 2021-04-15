const path = require('path');
const express = require('express');
const indexRouter = require('./routes/index');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

//Récuperer les donnée saisie par l'utilisateur 
app.use(bodyParser.urlencoded({ extended: true }));
//Lier les dossiers entre eux ici je lie mon css a la ligne '14' 

app.use(express.static(path.join(__dirname,'/public' )));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/',indexRouter)

module.exports = app;