import React from 'react'

export  class Person extends React.Component {

    constructor(props){
        super()
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName
        }
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <label>First Name</label>
                <input value={this.state.firstName} type="text" onChange={ e => {
                    let firstName = e.target.value
                    this.setState( state => {
                        state.firstName = firstName
                        return state
                    })
                    console.log(this.state)
                }}
                ></input>
                <label>Last Name</label>
                <input value={this.state.lastName} type="text" onChange={ e => {
                    let lastName = e.target.value
                    this.setState( state => {
                        state.lastName = lastName
                        return state
                    })
                }}></input>
            </div>
        )
    }

}
