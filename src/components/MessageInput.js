import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MessageInput.css';

class MessageInput extends Component {
	constructor() {
		super();

		this.state = {
			messageText: '',
		};
	}

	onMessageChange(e) {
		this.setState({
			messageText: e.target.value,
		});
	}

	addMessage() {
		if (this.state.messageText === '') return;

		this.props.addMessage(this.state.messageText, this.props.direction);

		this.setState({
			messageText: '',
		});
	}

	render() {
		return (
			<div className="MessageInput">
				<input
					type="text"
					id="message-text"
					placeholder="iMessage"
					value={this.state.messageText}
					onChange={function(e) {
						this.onMessageChange(e);
					}.bind(this)}
				/>
				<div
					className="send-button"
					onClick={function() {
						this.addMessage();
					}.bind(this)}
				></div>
			</div>
		);
	}
}

MessageInput.propTypes = {
	addMessage: PropTypes.func.isRequired,
	direction: PropTypes.string.isRequired,
};

export default MessageInput;
