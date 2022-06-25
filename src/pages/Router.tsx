import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { MainPage } from './MainPage';
import { WorkoutPage } from './WorkoutPage';
import { SavedPage } from './SavedPage';
import { PlayPage } from './PlayPage';
import { TestPage } from './TestPage';

export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />
      <Route path="/main" component={MainPage} />
      <Route path="/workout/:title/:ratio" component={WorkoutPage} exact />
      <Route path="/saved" component={SavedPage} />
      <Route path="/play" component={PlayPage} />
      <Route path="/test" component={TestPage} />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
