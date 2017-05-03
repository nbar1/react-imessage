import * as MessageActionTypes from '../action-types/message';

const initialState = {
	messages: [
		{
			text: 'Test message received',
			direction: 'received',
		},
		{
			text: 'Test message sent',
			direction: 'sent',
		},
		{
			text: 'Second test message sent',
			direction: 'sent',
		},
	],
	messageDirection: 'sent',
};

export default function Message(state = initialState, action) {
	switch (action.type) {
		case MessageActionTypes.ADD_MESSAGE:
			return {
				messages: [
					...state.messages,
					{
						text: action.text,
						direction: action.direction,
					},
				],
				messageDirection: state.messageDirection,
			};

		case MessageActionTypes.REMOVE_MESSAGE:
			return {
				messages: [
					...state.messages.slice(0, action.index),
					...state.messages.slice(action.index + 1),
				],
				messageDirection: state.messageDirection,
			};

		default:
			return state;
	}
}
