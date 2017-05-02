import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MessageHeader.css';

class MessageHeader extends Component {
	render() {
		return (
			<div className="MessageHeader">
				<div className="back-icon"></div>
				<div className="contact-info">
					<div className="contact-image"></div>
					<div className="contact-name">{this.props.contactName}</div>
				</div>
				<div className="info-icon"></div>
			</div>
		);
	}
}

MessageHeader.propTypes = {
	contactName: PropTypes.string.isRequired,
}

export default MessageHeader;
