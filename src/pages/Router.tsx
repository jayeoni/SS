import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { MainPage } from './MainPage';
import { PlayPage } from './PlayPage';
import { SavedPage } from './SavedPage';
import { TestPage } from './TestPage';

export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />
      <Route path="/main" component={MainPage} />
      <Route path="/play/:title/:ratio" component={PlayPage} exact />
      <Route path="/saved" component={SavedPage} />
      <Route path="/test" component={TestPage} />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
