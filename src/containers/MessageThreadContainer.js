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
		const threadId = (this.props.threadId) ? this.props.threadId : 0;

		return (
			<div className="MessageThreadContainer">
				<Header contactName="John Doe"  threadId={threadId} />
				<MessageThread {...this.props}  threadId={threadId} />
				<Footer {...this.props} threadId={threadId} />
			</div>
		);
	}
}

MessageThreadContainer.propTypes = {
	messages: PropTypes.array.isRequired,
	messageDirection: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired,
	threadId: PropTypes.number,
};

export default MessageThreadContainer;
