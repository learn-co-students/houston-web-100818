import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import history from './state/history'
import { QuestionDisplay } from './views/QuestionDisplay';
import { Index } from './views/Index';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/question/:id" component={QuestionDisplay} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    );
  }
}

export default App;
