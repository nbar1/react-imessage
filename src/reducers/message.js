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
		{
			contactName: 'Jim Smith',
			thread: [
				{
					text: 'This is a test message that was sent',
					direction: 'sent',
				},
				{
					text: 'This is a message that was received and is longer than your standard message that is shown in this application.',
					direction: 'received',
				},
				{
					text: 'Second test message received',
					direction: 'received',
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
					...state.messages.slice(0, action.messageId),
					Object.assign({}, state.messages[action.messageId], {
						thread: [
							...state.messages[action.messageId].thread,
							{
								text: action.text,
								direction: action.direction,
							},
						],
					}),
					...state.messages.slice(action.messageId + 1),
				],
			};

		case MessageActionTypes.REMOVE_MESSAGE:
			return {
				...state,
				messages: [
					...state.messages.slice(0, action.messageId),
					Object.assign({}, state.messages[action.messageId], {
						thread: [
							...state.messages[action.messageId].thread.slice(0, action.index),
							...state.messages[action.messageId].thread.slice(action.index + 1),
						],
					}),
					...state.messages.slice(action.messageId + 1),
				],
			};

		case MessageActionTypes.UPDATE_MESSAGE_CONTACT_NAME:
			return {
				...state,
				messages: [
					...state.messages.slice(0, action.messageId),
					Object.assign({}, state.messages[action.messageId], {
						contactName: action.contactName,
					}),
					...state.messages.slice(action.messageId + 1),
				],
			};

		case MessageActionTypes.SET_MESSAGE_DIRECTION:
			return {
				...state,
				messages: [
					...state.messages.slice(0, action.messageId),
					Object.assign({}, state.messages[action.messageId], {
						thread: [
							...state.messages[action.messageId].thread.slice(0, action.index),
							Object.assign({}, state.messages[action.messageId].thread[action.index], {
								direction: action.direction,
							}),
							...state.messages[action.messageId].thread.slice(action.index + 1),
						],
					}),
					...state.messages.slice(action.messageId + 1),
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
