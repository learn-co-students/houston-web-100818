import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import { history } from './state/routing'
import { QuestionDisplay } from './views/QuestionDisplay';
import { Index } from './views/Index'
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <QuestionDisplay />
          <Index />
        </div>
      </Router>
    );
  }
}

export default App;
