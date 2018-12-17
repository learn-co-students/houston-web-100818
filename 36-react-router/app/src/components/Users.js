import React from 'react'
import { UserList } from './UserList.js'
import { UserDetail } from './UserDetail.js'
import { UserForm } from './UserForm.js'



export class Users extends React.Component {

    state = {
        users: [],
        selectedUser: null,
        showEditForm: false
    }

    componentDidMount(){
        fetch('http://localhost:3001/users')   
            .then( res => res.json())
            .then( users => {
                this.setState({ users })
            })
    }

    render(){
        let { selectedUser, users, showEditForm } = this.state
        return (
            <UserList users={users} onSelection={this.selectUser}/>
        )
    }

    selectUser = ( selectedUser ) => {
        this.setState( { selectedUser })
    }

    editSelectedUser = () => {
        this.setState({ showEditForm: true })
    }
    
    destroySelectedUser = () => {
        let { selectedUser } = this.state
        fetch(`http://localhost:3001/users/${selectedUser.id}`,{ 
            method: 'DELETE'
        })
        this.setState( state => {
            state.users = state.users.filter( user => user.id != this.state.selectedUser.id)
            return state
        })
    }

    updateSelectedUser = (values) => {
        let { selectedUser } = this.state
        fetch(`http://localhost:3001/users/${selectedUser.id}`,{ 
            method: 'PATCH',
            body: JSON.stringify(values)
        })
        this.setState( state => {
            let user = state.users.find( user => user.id == this.state.selectedUser.id)
            user.name = values.name
            user.email = values.email
            user.phone = values.phone
            return state
        })
    }

    // { selectedUser && !showEditForm &&
    //     <UserDetail user={selectedUser} onEdit={this.editSelectedUser} onDestroy={this.destroySelectedUser}/>
    //  }
    //  { selectedUser && showEditForm &&
    //      <div>
    //          <UserForm values={selectedUser} onUpdate={this.updateUser} />
    //      </div>
    //  }
    //  </div>

}