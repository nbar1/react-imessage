import React, { Component } from 'react';

import StatusBar from './StatusBar';
import MessageHeader from './MessageHeader';

import './Header.css';

class Header extends Component {
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
