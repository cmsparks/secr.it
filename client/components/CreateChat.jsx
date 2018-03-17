import React from 'react';

class CreateChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chatname: '',
			password: '',
			users: '',
			blacklist: '',
			password: '',
		};
		this.createChat = this.createChat.bind(this);
	}
	render() {
		return (
			<form className="newChat" onSubmit={this.createChat}>
				<div className="optsContainer">
					<div className="name">Name: <input type="text" value={this.state.chatname} /></div>
					<div className="isPublic"><input type="checkbox"/> Requires Invite </div>
					<div className="hasPassword"><input type="checkbox"/> Has Password </div>
					<div className="invites">Invite People: <input type="text" value={this.state.users} /></div>
					<div className="blacklist">Blacklist: <input type="text" value={this.state.blacklist} /></div>
					<div className="password">Password: <input type="text" value={this.state.password} /></div>
				</div>
				<div className="btnContainer">
					<input className="primaryBtn" type="submit" value="Create" />
					<input className="tertiaryBtn" type="submit" value="Cancel"/>
				</div>
			</form>
		)
	}
	createChat(event) {
		event.preventDefault();
		//build message
		let message = {
			user: "",
			type: "text",
			content: this.state.value
		}
		this.props.onNewChat(message)
	}

}

export default CreateChat;