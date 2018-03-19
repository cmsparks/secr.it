import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import Message from './components/Message.jsx';
import Input from './components/Input.jsx';
import Login from './components/Login.jsx';
import CreateChat from './components/CreateChat.jsx';
import Sidebar from './components/Sidebar.jsx';

import './index.css';

let socket = io();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleMessage = this.handleMessage.bind(this);
		this.handleLoginUser = this.handleLoginUser.bind(this);
		this.handleNewChat = this.handleNewChat.bind(this);
	}

	handleMessage(message) {
		//todo add ack function
		socket.emit('message', message, function(ack) {
			console.log(ack);
		});
	}
	handleLoginUser(login) {
		//add ack to login to passworded server or to autologin
		socket.emit('login-user', login, function(ack) {
			console.log(ack);
		});
	}
	handleLoginChat(login) {
		//add ack to login to passworded server or to autologin
		socket.emit('login-user', login, function(ack) {
			console.log(ack);
		});
	}

	handleNewUser(user) {
		socket.emit('create-user', user, function(ack) {
			console.log(ack);
		});
	}

	handleNewChat(chat) {
		socket.emit('create-chat', chat, function(ack) {
			console.log(ack);
		});
	}

	handle

	render() {
		return (
		  <div>
		  	<Sidebar />
		  	<Message />
		  	<Input onSend={this.handleMessage}/>
		  </div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('app'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
