import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MessageOptions.css';

class MessageOptions extends Component {
	render() {
		return (
			<div className={(this.props.showOptions === true) ? 'show-options' : 'hide-options'}>

			</div>
		);
	}
}

MessageOptions.propTypes = {
	direction: PropTypes.string.isRequired,
	showOptions: PropTypes.bool,
};

export default MessageOptions;
