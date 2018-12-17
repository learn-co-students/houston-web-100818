import React from 'react'

export class ListItem extends React.Component {
    
    render(){
        return (
            <li>
                <span 
                    className="fa fa-square pr-1"
                    onClick={e => this.props.completeTask(this.props.task.id)}
                ></span>
                {this.props.task.name}
                </li>
        )
    }
}