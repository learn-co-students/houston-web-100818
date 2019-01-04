import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import history from './state/history'
import { QuestionDisplay } from './views/QuestionDisplay';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/question/:id" component={QuestionDisplay} />
          <Route path="/" render={ () => <Redirect to="/question/1" /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
