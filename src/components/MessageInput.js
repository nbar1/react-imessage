import React, { Component } from 'react';

import './MessageInput.css';

class MessageInput extends Component {
	render() {
		return (
			<div className="MessageInput">
				<input type="text" id="message-text" placeholder="iMessage" />
				<div className="send-button"></div>
			</div>
		);
	}
}

export default MessageInput;
