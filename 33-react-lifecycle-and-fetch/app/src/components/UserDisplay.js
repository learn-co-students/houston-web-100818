import React from 'react'

export class UserDisplay extends React.Component {

    render(){
        return (
            <div>
                <h1>{this.props.firstName} {this.props.lastInitial}</h1>
                <p>Phone: {this.props.phone}</p>
                <p>Email: {this.props.email}</p>
            </div>
        )
    }

}