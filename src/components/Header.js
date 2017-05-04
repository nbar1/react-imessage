import React, { Component } from 'react';

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
				<MessageHeader contactName="John Doe" />
			</div>
		);
	}
}

export default Header;
