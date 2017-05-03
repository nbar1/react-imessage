import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
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
			<div className="App">
				<Header />
				<div className="messages">
					{messageComponents}
				</div>
				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	messages: PropTypes.array.isRequired,
};

const mapStateToProps = state => (
	{
		messages: state.messages,
	}
);

export default connect(mapStateToProps)(App);
