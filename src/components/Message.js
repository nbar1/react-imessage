import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Message.css';

/**
 * Message
 *
 * @class
 */
class Message extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className={'Message ' + this.props.direction}>
				{this.props.text}
			</div>
		);
	}
}

Message.propTypes = {
	direction: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Message;
