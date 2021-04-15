const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash('your_password',10,function(err,hash){
	//Store hash in database 
	
});

const ecfSchema = new mongoose.Schema({

	email: {
    	type: String,
    	trim: true
	},
	mdp: {
    	type: String,
    	trim: true
	} 
});


module.exports = mongoose.model('node-ecf', ecfSchema);
