import React, { Component } from 'react';
import PropTypes from 'prop-types';
import key from 'weak-key';

import Message from './Message';

import './MessagesContainer.css';

/**
 * MessageContainer
 *
 * @class
 */
class MessagesContainer extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		const actions = this.props.actions;

		const messageComponents = this.props.messages.map((message, index) => (
			<Message
				key={key(message)}
				index={index}
				text={message.text}
				direction={message.direction}
				actions={actions}
			/>
		));

		return (
			<div className="MessagesContainer">
				{messageComponents}
			</div>
		);
	}
}

MessagesContainer.propTypes = {
	messages: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

export default MessagesContainer;
