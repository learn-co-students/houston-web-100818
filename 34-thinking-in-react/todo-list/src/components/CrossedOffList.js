import React from 'react'
import { CrossedOffListItem } from './CrossedOffListItem.js'

export class CrossedOffList extends React.Component {
    
    render(){
        return (
            <ul className="mt-2">
                {this.props.tasks.map( task => (
                    <CrossedOffListItem task={task} uncompleteTask={this.props.uncompleteTask} />
                ))}
            </ul>
        )
    }
}