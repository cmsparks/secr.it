import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleSend = this.handleSend.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	render() {
		return (
			<form className="input" onSubmit={this.handleSend}>
				<textarea value={this.state.value} onChange={this.handleChange} />
				<input type="submit" value="Send" />
			</form>
		)
	}
	handleSend(event) {
		event.preventDefault();
		//build message
		let message = {
			user: "testusr",
			type: "text",
			content: this.state.value
		}
		this.props.onSend(message)
	}
	handleChange(event) {
		this.setState({value: event.target.value})
	}
}

export default Input;