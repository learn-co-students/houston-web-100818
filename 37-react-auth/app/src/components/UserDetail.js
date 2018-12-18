import React from 'react'

export class UserDetail extends React.Component {

    state = {
        user: null
    }

    userID(){
        return this.props.match.params.id
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/users/${this.userID()}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then( res=> res.json())
            .then( user => {
                if(!user.error) this.setState( { user } )
                else this.setState( { errorMessage: user.error } )
            })
    }

    render(){
        let { user, errorMessage } = this.state
        if(errorMessage) return ( 
            <div class="alert alert-danger" role="alert">
                {errorMessage}
            </div>
        )
        if(user === null) return <h3>Loading...</h3>
        return (
            <div>
                <h3>{user.name}</h3>
                <img className='img-thumbnail' src={user.image_url} />
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <button className="btn btn-primary" onClick={this.editUser} >Edit</button>
                <button className="btn btn-danger" onClick={this.destroyUser}>Delete</button>
            </div>
        )
    }

    editUser = () => {
        this.props.history.push(`/users/${this.userID()}/edit`)
    }

    destroyUser = () => {
        fetch(`http://localhost:3000/api/v1/users/${this.userID()}`, {
            method: 'DELETE'
        })
            .then( () => this.props.history.push(`/users/`))
    }

}