import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import { Header } from './components/Header'
import { Counter } from './components/Counter'

// const reducer = (currentState, action) => {

//   switch(action.type){
//     case 'INCREMENT_COUNTER':
//       return { ...currentState, count: currentState.count + 1 }
//     break;
//     case 'DECREMENT_COUNTER':
//       return { ...currentState, count: currentState.count - 1 }
//     break;
//     case 'INCREASE_COUNTER':
//       return { ...currentState, count: currentState.count - action.payload }
//     break;
//     case 'CHANGE_INPUT_VALUE':
//       return { ...currentState, inputValue: action.payload }
//     break;
//   } 

//   return currentState
// }

const reducer = (currentState, action) => {

  const newState = { ...currentState }
  switch(action.type){
    case 'INCREASE_COUNTER':
      newState.count = currentState.count + action.payload*currentState.inputValue
    break;
    case 'CHANGE_INPUT_VALUE':
      newState.inputValue = action.payload 
    break;
  } 

  return newState
}

const initialState = {
  inputValue: 1,
  count: 0
}

const store = createStore(
  reducer, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {

  render() {
    console.warn("App was rerendered")
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));