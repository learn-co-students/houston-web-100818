import React from 'react'
import { Link } from 'react-router-dom'

export class UserList extends React.Component {

    state = {
        users: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/users')   
            .then( res => res.json())
            .then( users => {
                this.setState({ users })
            })
    }

    render(){
        const { users } = this.state
        return (
            <table className="table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map( user => (
                            <tr>
                                <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        )
    }

}