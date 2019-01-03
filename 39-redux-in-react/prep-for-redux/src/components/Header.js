import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';


class _Header extends Component {

    renderDescription = () => {
      const remainder = this.props.count % 5;
      const upToNext = 5 - remainder;
      return `The current count is less than ${this.props.count + upToNext}`;
    };
  
    render() {
      console.warn("Header was rerendered", this.props)
      return (
        <header className="App-header" onClick={() => this.props.dispatch({ type: 'INCREMENT_COUNTER'})}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.renderDescription()}</h1>
        </header>
      );
    }
  }
  
var mapStateToProps = state => {
    return { count: state.count }
}
  
export const Header = connect(mapStateToProps)(_Header)