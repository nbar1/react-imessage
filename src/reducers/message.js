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
				...state,
				messages: [
					...state.messages,
					{
						text: action.text,
						direction: action.direction,
					},
				],
			};

		case MessageActionTypes.REMOVE_MESSAGE:
			return {
				...state,
				messages: [
					...state.messages.slice(0, action.index),
					...state.messages.slice(action.index + 1),
				],
			};

		case MessageActionTypes.SET_MESSAGE_DIRECTION:
			return {
				...state,
				messages: [
					...state.messages.slice(0, action.index),
					Object.assign({}, state.messages[action.index], {
						direction: action.direction,
					}),
					...state.messages.slice(action.index + 1),
				],
			};

		case MessageActionTypes.SET_GLOBAL_MESSAGE_DIRECTION:
			return {
				...state,
				messageDirection: action.direction,
			};

		default:
			return state;
	}
}
