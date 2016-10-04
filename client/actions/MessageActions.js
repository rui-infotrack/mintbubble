import * as ActionTypes from 'constants/ActionTypes';

export function getMessages() {
  return {
    type: ActionTypes.GET_MESSAGES
  };
}

export function getMessagesSuccess(messages) {
  return {
    type: ActionTypes.GET_MESSAGES_SUCCESS,
    messages
  };
}

export function getMessagesFailure(error) {
  return {
    type: ActionTypes.GET_MESSAGES_FAILURE,
    error
  };
}
