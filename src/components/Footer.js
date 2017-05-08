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
		const { addMessage, setMessageDirection } = this.props.actions;

		return (
			<div className="Footer">
				<DirectionButton setMessageDirection={setMessageDirection} />
				<MessageInput addMessage={addMessage} direction={this.props.messageDirection} />
			</div>
		);
	}
}

Footer.propTypes = {
	dispatch: PropTypes.func.isRequired,
	messageDirection: PropTypes.string.isRequired,
	actions: PropTypes.array.isRequired,
};

export default Footer;
