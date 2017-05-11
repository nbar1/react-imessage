import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MessageInput.css';

/**
 * MessageInput
 *
 * @class
 */
class MessageInput extends Component {
	/**
	 * constructor
	 *
	 * @constructor
	 */
	constructor() {
		super();

		this.state = {
			messageText: '',
		};
	}

	/**
	 * onMessageChange
	 *
	 * @param {event} e
	 * @returns {void}
	 */
	onMessageChange(e) {
		this.setState({
			messageText: e.target.value,
		});
	}

	/**
	 * addMessage
	 *
	 * @returns {void}
	 */
	addMessage() {
		if (this.state.messageText === '') return;

		this.props.addMessage(this.props.messageId, this.state.messageText, this.props.direction);

		this.setState({
			messageText: '',
		});
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="MessageInput">
				<form
					onSubmit={function(e) {
						e.preventDefault();
						this.addMessage();
					}.bind(this)}
				>
					<input
						type="text"
						placeholder="iMessage"
						value={this.state.messageText}
						className={this.state.messageText ? 'has-input' : 'no-input'}
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
				</form>
			</div>
		);
	}
}

MessageInput.propTypes = {
	addMessage: PropTypes.func.isRequired,
	direction: PropTypes.string.isRequired,
	messageId: PropTypes.number.isRequired,
};

export default MessageInput;
