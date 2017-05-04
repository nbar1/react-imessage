
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StatusBarTime.css';

/**
 * StatusBarTime
 *
 * @constructor
 */
class StatusBarTime extends Component {
	/**
	 * constructor
	 *
	 * @param {object} props
	 * @constructor
	 */
	constructor(props) {
		super();

		this.state = props;
	}

	/**
	 * setTime
	 *
	 * @param {string} time
	 * @returns {void}
	 */
	setTime(time) {
		this.setState({
			time: time,
		});
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<div className="StatusBarTime">
				<input
					size={5}
					value={this.state.time}
					onChange={function(e) {
						this.setTime(e.target.value);
					}.bind(this)}
				/>
			</div>
		);
	}
}

StatusBarTime.propTypes = {
	time: PropTypes.string.isRequired,
};

export default StatusBarTime;
