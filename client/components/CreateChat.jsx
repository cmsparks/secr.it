import React from 'react';

class CreateChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chatname: '',
			password: '',

		};
		this.createChat = this.createChat.bind(this);
	}
	render() {
		return (
			<form className="newChat" onSubmit={this.createChat}>
				<input type="text" value={this.state.chatname} />
				<input className="primaryBtn" type="submit" value="Create" />
				<input className="secondaryBtn" type="submit" value="Other"/>
				<input className="tertiaryBtn" type="submit" value="Cancel"/>
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