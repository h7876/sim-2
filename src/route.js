import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

export default (
    <Switch>
      <Route component={ Dashboard } exact path="/" />
      <Route component={ Wizard } path="/wizard" />
    </Switch>
  )