import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			room: '',
			name: ''
		};
		this.handleName = this.handleName.bind(this);
		this.handleRoom = this.handleRoom.bind(this);
		this.handlePwd = this.handlePwd.bind(this);
		this.login = this.login.bind(this);
	}
	render() {
		return (
			<form className="login" onSubmit={this.login}>
				<input type="text"value={this.state.name} onChange={this.handleName} placeholder="Username"/>
				<input type="text" value={this.state.room} onChange={this.handleRoom} placeholder="Room ID"/>
				<input type="submit" value="Login" />
			</form>
		)
	}
	login(event) {
		event.preventDefault();
		//build message
		let login = {
			room: this.state.room,
			name: this.state.name
		}
		this.props.onLogin(login)
	}
	handleName(event) {
		this.setState({name: event.target.value})
	}

	handleRoom(event) {
		this.setState({room: event.target.value})
	}

	handlePwd(event) {
		this.setState({pwd: event.target.value})	
	}
}

export default Login;