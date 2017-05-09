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

export const setMessageDirection = (index, direction) => {
	return {
		type: MessageActionTypes.SET_MESSAGE_DIRECTION,
		index,
		direction,
	};
};

export const setGlobalMessageDirection = direction => {
	return {
		type: MessageActionTypes.SET_GLOBAL_MESSAGE_DIRECTION,
		direction,
	};
};
