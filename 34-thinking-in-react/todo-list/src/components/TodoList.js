import React from 'react'
import { ListItem } from './ListItem.js'

export class TodoList extends React.Component {
    
    render(){
        return (
            <ul className="mt-2">
                {this.props.tasks.map( task => ( 
                    <ListItem task={task} completeTask={this.props.completeTask}/>
                ))}
            </ul>
        )
    }
}