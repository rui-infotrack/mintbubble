import React from 'react';
import { Provider } from 'react-redux';
import routes from 'routes';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from 'store/configureStore';
import sagas from './sagas';

const store = configureStore();
store.runSaga(sagas);
const history = syncHistoryWithStore(browserHistory, store);

export default () => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);
