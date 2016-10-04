import createReducer from 'utils/createReducer';
import * as ActionTypes from 'constants/ActionTypes';

const initialState = {
  isLoading: true,
  messages: []
};

export default createReducer(initialState, {
  [ActionTypes.GET_MESSAGES]: state => ({ ...state, isLoading: true }),

  [ActionTypes.GET_MESSAGES_SUCCESS]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      messages: action.messages
    };
  },

  [ActionTypes.GET_MESSAGES_FAILURE]: state => ({ ...state, isLoading: false })
});
