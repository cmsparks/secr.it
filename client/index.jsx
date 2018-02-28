import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import Message from './components/Message.jsx';
import Input from './components/Input.jsx';
import Login from './components/Login.jsx';
import CreateChat from './components/CreateChat.jsx';


import './index.css';

let socket = io();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleMessage = this.handleMessage.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleNewChat = this.handleNewChat.bind(this);
	}

	handleMessage(message) {
		//todo add ack function
		socket.emit('message', message);
	}
	handleLogin(login) {
		//add ack to login to passworded server or to autologin
		socket.emit('login', login);
	}

	handleNewChat(chat) {
		socket.emit('create-chat', chat)
	}

	render() {
		return (
		  <div>
		  	<Login onLogin={this.handleLogin} />
		  	<CreateChat onNewChat={this.handleNewChat} />
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
