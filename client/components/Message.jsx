import React from 'react';

class Message extends React.Component {
  constructor(props) {
  	super(props);
  	this.bubbleClasses = "bubble"
  	this.messageClasses = "Message"
  	this.bubbleClasses += " " + this.props.side + "msg ";
  	if(this.props.connectTop===true) {
  		this.bubbleClasses += this.props.side+"top "
  	}
  	if(this.props.connectBot===true) {
  		this.bubbleClasses += this.props.side+"bot "
  	}
  	console.log(this.bubbleClasses)
  }

  render() {
    return (
    	<div className={this.messageClasses}>
    		<div className={this.bubbleClasses}>
   				{this.props.message}
      		</div>
    	</div>
    )
  }
}

export default Message;