import * as MessageActionTypes from '../action-types/message';

const initialState = {
	messages: [
		{
			contactName: 'John Doe',
			thread: [
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
					...state.messages.slice(0, action.threadId),
					Object.assign({}, state.messages[action.threadId], {
						thread: [
							...state.messages[action.threadId].thread,
							{
								text: action.text,
								direction: action.direction,
							},
						],
					}),
					...state.messages.slice(action.threadId + 1),
				],
			};

		case MessageActionTypes.REMOVE_MESSAGE:
			return {
				...state,
				messages: [
					...state.messages.slice(0, action.threadId),
					Object.assign({}, state.messages[action.threadId], {
						thread: [
							...state.messages[action.threadId].thread.slice(0, action.index),
							...state.messages[action.threadId].thread.slice(action.index + 1),
						],
					}),
					...state.messages.slice(action.threadId + 1),
				],
			};

		case MessageActionTypes.SET_MESSAGE_DIRECTION:
			return {
				...state,
				messages: [
					...state.messages.slice(0, action.threadId),
					Object.assign({}, state.messages[action.threadId], {
						thread: [
							...state.messages[action.threadId].thread.slice(0, action.index),
							Object.assign({}, state.messages[action.threadId].thread[action.index], {
								direction: action.direction,
							}),
							...state.messages[action.threadId].thread.slice(action.index + 1),
						],
					}),
					...state.messages.slice(action.threadId + 1),
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
