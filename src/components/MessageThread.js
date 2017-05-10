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

		let threadId = (this.props.threadId) ? this.props.threadId : 0;

		const messageComponents = this.props.messages[threadId].thread.map((message, index) => (
			<Message
				key={key(message)}
				index={index}
				threadId={threadId}
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
	messages: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	threadId: PropTypes.number,
};

export default MessageThread;
