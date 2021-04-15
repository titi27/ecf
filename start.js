//Déclarations de mais variables 
const express = require('express');
const app = require('./app');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/node-ecf');

//Connexion a la base de données 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection
    .on('open', () => {
      console.log('-: Mongoose connection open :-');
    })
    .on('error', (err) => {
      console.log(`-: Connection error: ${err.message} :-`);
    });

//Mise en place de mon serveur 
app.listen(9810);
console.log("http://localhost:9810"); 
