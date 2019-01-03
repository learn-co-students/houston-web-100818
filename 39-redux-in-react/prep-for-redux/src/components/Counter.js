import React, { Component } from 'react';
import { connect } from 'react-redux'

class _Counter extends Component {
    render() {
      console.warn("Counter was rerendered", this.props)
      return (
        <div className="Counter">
          <h1>{this.props.count}</h1>
          Change counter by: <input value={this.props.inputValue} type="number" onInput={this.props.changeInputValue}/>
          <button onClick={this.props.decrement}> - </button>
          <button onClick={() => this.props.increment()}> + </button>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return { 
        count: state.count ,
        inputValue: state.inputValue
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
        changeInputValue(e){
            dispatch({ type:'CHANGE_INPUT_VALUE', payload: parseInt(e.target.value) })
        },
        increment: (value) => {
            dispatch({ type: 'INCREASE_COUNTER',  payload: 1 });
        },
        decrement: () => {
            dispatch({ type: 'INCREASE_COUNTER', payload: -1 })
        }
      }
  }
  
export const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter)