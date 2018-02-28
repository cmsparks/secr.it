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
	constructor(data) {
		this.name = data.name;
		this.validation = data.validation;
		this.currentChats = data.currentChats;
		this.opts = data.opts;
	}
	toDatabase() {
		let data = {
			'name': this.name,
			'validation': this.validation,
			'currentChats': this.currentChats,
			'opts': this.opts
		};
		return data; 
	}
	validate(pwd) {
		let isValid = false;
		

		return isValid;
	}
}

module.exports = User;