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

	render() {
		return (
		  <div>
		  	<Sidebar />
		  	<div className="chatArea">
		  		<div className="topBar blue">
		  			<h2>Lorem Ipsum</h2>
		  		</div>
		  		<div className="chat">
		  			<Message side="right" connectBot={false} connectTop={false} message="Lorem ipsum dolor si amet"/>
		  			<Message side="left" connectBot={true} connectTop={false} message="Accusamus aperiam qui quas cupiditate eum necessitatibus. Iusto minus et et. Et voluptatem occaecati fugiat."/>
		  			<Message side="left" connectBot={true} connectTop={true} message="Voluptas consequatur iure ut cupiditate dolores ea doloribus ex."/>
		  			<Message side="left" connectBot={false} connectTop={true} message="uas expedita voluptatem eos suscipit cupiditate inventore quaerat error."/>
					<Message side="right" connectBot={true} connectTop={false} message="Voluptas tempora soluta rerum."/>
		  			<Message side="right" connectBot={false} connectTop={true} message="Non perferendis architecto et saepe ut."/>
		  			<Message side="left" connectBot={false} connectTop={false} message="Nam sit quis et omnis et possimus soluta. Est adipisci quis earum beatae."/>
		  		</div>
		  	</div>
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
