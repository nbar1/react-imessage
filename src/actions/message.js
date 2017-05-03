import * as MessageActionTypes from '../action-types/message';

export const addMessage = (text, direction) => {
	return {
		type: MessageActionTypes.ADD_MESSAGE,
		text,
		direction,
	};
};

export const removeMessage = index => {
	return {
		type: MessageActionTypes.REMOVE_MESSAGE,
		index,
	};
};

export const setMessageDirection = direction => {
	return {
		type: MessageActionTypes.SET_MESSAGE_DIRECTION,
		direction,
	};
};
