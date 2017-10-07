import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageThread from '../components/MessageThread';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * MessageThreadContainer
 *
 * @class
 */
class MessageThreadContainer extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		const messageId = (this.props.match && this.props.match.params.messageId) ? parseInt(this.props.match.params.messageId) : 0;
		const message = this.props.messages[messageId];

		return (
			<div className="MessageThreadContainer">
				<Header contactName={message.contactName} />
				<MessageThread message={message} messageId={messageId} actions={this.props.actions} />
				<Footer {...this.props} messageId={messageId} />
			</div>
		);
	}
}

MessageThreadContainer.propTypes = {
	messages: PropTypes.array.isRequired,
	messageDirection: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired,
	match: PropTypes.object,
};

export default MessageThreadContainer;
