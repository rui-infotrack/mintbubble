import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(browserHistory),
        sagaMiddleware
      )
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  store.runSaga = sagaMiddleware.run;

  return store;
};
