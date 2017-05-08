import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

import './MessagesContainer.css';

class MessagesContainer extends Component {
	render() {
		const messageComponents = this.props.messages.map((message, index) => (
			<Message
				key={index}
				index={index}
				text={message.text}
				direction={message.direction}
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
};

export default MessagesContainer;
