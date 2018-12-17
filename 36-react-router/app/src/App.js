import React, { Component } from 'react';
import logo from './logo.svg';
import { Users } from './components/Users'
import { UserEdit } from './components/UserEdit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { UserDetail } from './components/UserDetail';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/users/:id/edit" component={UserEdit}/>
            <Route path="/users/:id" component={UserDetail} />
            <Route path="/users" component={Users} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
