import * as MessageActionTypes from '../action-types/message';

export const addMessage = (threadId, text, direction) => {
	return {
		type: MessageActionTypes.ADD_MESSAGE,
		threadId,
		text,
		direction,
	};
};

export const removeMessage = (threadId, index) => {
	return {
		type: MessageActionTypes.REMOVE_MESSAGE,
		threadId,
		index,
	};
};

export const setMessageDirection = (threadId, index, direction) => {
	return {
		type: MessageActionTypes.SET_MESSAGE_DIRECTION,
		threadId,
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
