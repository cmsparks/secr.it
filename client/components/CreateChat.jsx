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
			<form className="new" onSubmit={this.createChat}>
				<input type="text" value={this.state.chatname} />
				<input type="text" />
				<input type="submit" value="Create" />
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