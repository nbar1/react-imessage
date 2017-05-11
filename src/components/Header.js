import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StatusBar from './StatusBar';
import MessageHeader from './MessageHeader';

import './Header.css';

/**
 * Header
 *
 * @class
 */
class Header extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="Header">
				<StatusBar />
				<MessageHeader contactName={this.props.contactName} />
			</div>
		);
	}
}

Header.propTypes = {
	contactName: PropTypes.string,
};

export default Header;
