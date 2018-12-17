import React from 'react'

export class UserDetail extends React.Component {

    state = {
        user: null
    }

    userID(){
        return this.props.match.params.id
    }

    componentDidMount(){
        fetch(`http://localhost:3001/users/${this.userID()}`)
            .then( res=> res.json())
            .then( user => this.setState( { user } ))
    }

    render(){
        let { user } = this.state
        if(user === null) return <h3>Loading...</h3>
        return (
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <button className="btn btn-primary" onClick={this.editUser} >Edit</button>
                <button className="btn btn-danger" onClick={this.destroyUser}>Delete</button>
            </div>
        )
    }

    editUser = () => {
        this.props.history.push(`/users/${this.userID()}/edit`)
    }

    destroyUser = () => {
        fetch(`http://localhost:3001/users/${this.userID()}`, {
            method: 'DELETE'
        })
            .then( () => this.props.history.push(`/users/`))
    }

}