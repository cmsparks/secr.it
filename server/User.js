const crypto = require('crypto');

/* user data
[user]: {
  name: '',
  validation: {
    pwdhash:
    salt:
    iter:
  }
  currentChats: [{
	
  },
  {
	
  }]
  opts: {
    
  }
}
*/

class User {
	constructor(isNew, data, socket db) {
		if(isNew === true){
			this.name = data.name;
			
			//get hashing
			let rand = crypto.randomBytes(32);
			let key;
			crypto.pbkdf2(data.pwd, rand, 10000, 512, 'sha512', (err, derivedKey) => {
			  if (err) throw err;
			  key = derivedKey 
			});

			this.validation = {
				'pwdhash': key,
				'salt': rand,
				'iter': 10000
			};
			this.currentChats = [];
			//insert any opts/default opts
			this.opts = {};

			db.collection('users').findOne({'name': this.name}, null, function(err, result) {
				console.log(obj + " " + err);
			})
		}
		else {
			db.collection('users').findOne({'name':data.name})
		}
	}
	toDatabase(db) {
		db.collection('users').updateOne(
			{'name':this.name}, {
        	$set: {
            	'currentChats': this.currentChats,
            	'opts': this.opts
        	}
    	});
		
	}
	setOptions(opts) {
		this.opts = opts;
	}
}

module.exports = User;