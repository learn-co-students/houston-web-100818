import React from 'react'

export class Title extends React.Component {
    
    constructor(){
        super()
        this.state = {
            title: 'My to-do list'
        }
    }

    render(){
        return (
            <h1>{this.state.title}</h1>
        )
    }
}