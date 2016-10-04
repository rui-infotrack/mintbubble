import { takeLatest } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import * as ActionTypes from 'constants/ActionTypes';
import * as MessageActions from 'actions/MessageActions';
import MessageApi from 'api/Message';

export function* getMessages() {
  try {
    const messages = yield call(MessageApi.findAll);
    yield put(MessageActions.getMessagesSuccess(messages));
  } catch (error) {
    yield put(MessageActions.getMessagesFailure());
  }
}

export function* watchGetMessages() {
  yield* takeLatest(ActionTypes.GET_MESSAGES, getMessages);
}

export default function* root() {
  yield [
    fork(watchGetMessages)
  ];
}
