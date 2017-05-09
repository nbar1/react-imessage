import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './components/Header';
import MessagesContainer from './components/MessagesContainer';
import Footer from './components/Footer';

import * as MessageActions from './actions/message';

import './App.css';

class App extends Component {
	render() {
		const { messages, messageDirection, actions } = this.props;
		return (
			<div className="App">
				<Header />
				<MessagesContainer messages={messages} actions={actions} />
				<Footer messageDirection={messageDirection} actions={actions} />
			</div>
		);
	}
}

App.propTypes = {
	messages: PropTypes.array.isRequired,
	messageDirection: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
	{
		...state,
	}
);

const mapDispatchToProps = dispatch => (
	{
		actions: bindActionCreators(MessageActions, dispatch),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
