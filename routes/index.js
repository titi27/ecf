const express = require('express');
const router = express.Router(); 
const { body, validationResult} = require('express-validator');
//const ecf = mongoose.model('ecf');
const bodyParser = require('body-parser');
const { checkout } = require('../app');
const nodeEcf = require('../models/node-ecf');



//Ma page d'authentification .
router.get('/', (req,res)=>{
    res.render('index')
    
    
});
router.post('/', function(req,res){

    var mail = req.body.email;
    var mdp = req.body.mdp;
    const nodeecf = new nodeEcf(req.body);
    console.log("Email :" + mail)
    console.log("Mot de passe: " + mdp);

     
});

module.exports = router;
