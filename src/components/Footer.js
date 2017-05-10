import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DirectionButton from './DirectionButton';
import MessageInput from './MessageInput';

import './Footer.css';

/**
 * Footer
 *
 * @class
 */
class Footer extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		const { addMessage, setGlobalMessageDirection } = this.props.actions;

		return (
			<div className="Footer">
				<DirectionButton setMessageDirection={setGlobalMessageDirection} />
				<MessageInput addMessage={addMessage} direction={this.props.messageDirection} threadId={this.props.threadId} />
			</div>
		);
	}
}

Footer.propTypes = {
	messageDirection: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired,
	threadId: PropTypes.number.isRequired,
};

export default Footer;
