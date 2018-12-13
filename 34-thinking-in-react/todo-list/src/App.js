import React, { Component } from 'react';
import logo from './logo.svg';
import { Title } from './components/Title.js'
import { TodoList } from './components/TodoList.js' 
import { CrossedOffList } from './components/CrossedOffList' 

class App extends Component {

  constructor(){
    super()
    this.state = {
      tasks: []
    }
  }

  toggleTask = (taskID) => {
    this.setState( state => {
      let task = state.tasks.find( task => task.id == taskID)
      task.done = !task.done
      this.saveTask(task)
      return state
    })    
  }

  saveTask(task){
    fetch(`http://localhost:3001/tasks/${task.id}`,{
      method:'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(task)
    })
  }

  componentDidMount(){
    fetch('http://localhost:3001/tasks')
      .then(resp => resp.json())
      .then( tasks => {
        // this.setState( state => {
        //   state.tasks = tasks
        //   return state
        // })
        // this.setState( { tasks: tasks } )
        // Same as: 
        this.setState( { tasks } )
      })
  }
  
  render() {
    console.log(this.state.tasks)
    return (
      <div className="card">
        <Title />
        <TodoList tasks={this.state.tasks.filter( task => !task.done)} completeTask={this.toggleTask} />
        <CrossedOffList tasks={this.state.tasks.filter( task => task.done)} uncompleteTask={this.toggleTask}/>
      </div>
    );
  }
}

export default App;
