import * as MessageActionTypes from '../action-types/message';

export const addMessage = (messageId, text, direction) => {
	return {
		type: MessageActionTypes.ADD_MESSAGE,
		messageId,
		text,
		direction,
	};
};

export const removeMessage = (messageId, index) => {
	return {
		type: MessageActionTypes.REMOVE_MESSAGE,
		messageId,
		index,
	};
};

export const updateMessageContactName = (messageId, contactName) => {
	return {
		type: MessageActionTypes.UPDATE_MESSAGE_CONTACT_NAME,
		messageId,
		contactName,
	};
};

export const setMessageDirection = (messageId, index, direction) => {
	return {
		type: MessageActionTypes.SET_MESSAGE_DIRECTION,
		messageId,
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
