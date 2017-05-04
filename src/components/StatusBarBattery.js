import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StatusBarBattery.css';

/**
 * StatusBarBattery
 *
 * @class
 */
class StatusBarBattery extends Component {
	/**
	 * constructor
	 *
	 * @constructor
	 * @param {object} props
	 */
	constructor(props) {
		super();

		this.state = props;
	}

	/**
	 * updatePercent
	 *
	 * @param {number} percent
	 * @returns {void}
	 */
	updatePercent(percent) {
		this.setState({
			percent: percent,
		});
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		let batteryIconClass;

		if (this.state.percent > 80) {
			batteryIconClass = 'full';
		}
		else if (this.state.percent > 60) {
			batteryIconClass = 'high';
		}
		else if (this.state.percent > 40) {
			batteryIconClass = 'medium';
		}
		else if (this.state.percent > 15) {
			batteryIconClass = 'low';
		}
		else {
			batteryIconClass = 'empty';
		}

		return (
			<div className="StatusBarBattery">
				<div className="battery-text">
					<input
						value={this.state.percent}
						size={this.state.percent.toString().length || 1}
						onChange={function(e) {
							this.updatePercent(e.target.value);
						}.bind(this)}
					/>
				</div>
				<div className={'battery-icon ' + batteryIconClass}></div>
			</div>
		);
	}
}

StatusBarBattery.propTypes = {
	percent: PropTypes.number.isRequired,
};

export default StatusBarBattery;
