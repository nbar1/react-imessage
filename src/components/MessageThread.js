import React, { Component } from 'react';
import PropTypes from 'prop-types';
import key from 'weak-key';

import Message from '../components/Message';

import './MessageThread.css';

/**
 * MessageThread
 *
 * @class
 */
class MessageThread extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		const actions = this.props.actions;

		let messageId = (this.props.messageId) ? this.props.messageId : 0;

		const messageComponents = this.props.message.thread.map((message, index) => (
			<Message
				key={key(message)}
				index={index}
				messageId={messageId}
				text={message.text}
				direction={message.direction}
				actions={actions}
			/>
		));

		return (
			<div className="MessageThread">
				{messageComponents}
			</div>
		);
	}
}

MessageThread.propTypes = {
	message: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
	messageId: PropTypes.number,
};

export default MessageThread;
