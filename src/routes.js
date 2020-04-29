import React from 'react';
import { Switch, Route } from 'react-router';

import App from './App';

import '../node_modules/normalize.css/normalize.css';
import '../node_modules/reset-css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);