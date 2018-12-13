import React from 'react'

export class CrossedOffListItem extends React.Component {
    
    render(){
        return (
            <li>
                <s>
                    <span 
                        className="fa fa-check-square mr-1"
                        onClick={() => this.props.uncompleteTask(this.props.task.id)}
                    >
                    </span>{this.props.task.name}
                </s>
            </li>
        )
    }
}