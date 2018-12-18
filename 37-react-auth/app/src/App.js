import React, { Component } from 'react';
import logo from './logo.svg';
import { UserList } from './components/UserList'
import { UserEdit } from './components/UserEdit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { UserDetail } from './components/UserDetail';
import { NavBar } from './components/NavBar'
import { Login } from './components/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <NavBar />
          <div className="container">
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/users/:id/edit" component={UserEdit}/>
              <Route path="/users/:id" component={UserDetail} />
              <Route path="/users" component={UserList} />
              <Route path="/" component={UserList} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
