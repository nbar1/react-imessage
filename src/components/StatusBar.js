import React, { Component } from 'react';

import './StatusBar.css';

/**
 * StatusBar
 *
 * @class
 */
class StatusBar extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="StatusBar">
				<div className="status-bar-left">
					<div className="antenna">
						<div className="antenna-circle full"></div>
						<div className="antenna-circle full"></div>
						<div className="antenna-circle full"></div>
						<div className="antenna-circle"></div>
						<div className="antenna-circle"></div>
					</div>
					<div className="provider">AT&T</div>
					<div className="wifi"></div>
				</div>
				<div className="status-bar-right">
					<div className="location"></div>
					<div className="bluetooth"></div>
					<div className="battery">
						<div className="battery-text">96%</div>
						<div className="battery-icon"></div>
					</div>
				</div>
				<div className="status-bar-center">
					1:14 PM
				</div>
			</div>
		);
	}
}

export default StatusBar;
