import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import MessagesView from 'components/MessagesView';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={MessagesView} />
  </Route>
);
