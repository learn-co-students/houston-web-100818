import React from 'react'
import { UserDisplay } from './UserDisplay.js'
import { UserForm } from './UserForm.js'


export class UserProfile extends React.Component {

    constructor(props){
        super()
        this.state = {
            showEdit: false
        }
    }

   componentDidMount(){
       fetch('http://localhost:3000/users/1')
        .then( response => {
            return response.json()
        })
        .then( user => {
            this.setState( state => {
                state.user = user
                return state
            })
        })
   }


    render(){
        return (
            <div className="container">
                <UserDisplay {...this.state.user} />
                <button 
                    className="btn btn-primary" 
                    onClick={() => this.toggleEdit()}
                >
                    { this.state.showEdit ? 'Close' : 'Edit'}
                </button>
                { this.state.showEdit && 
                    <UserForm {...this.state.user} onSubmit={ values => this.handleUserFormSubmit(values)}/>  
                }
            </div>
        )
    }

    handleUserFormSubmit(user){

        this.setState( state => {
            state.user = user
            state.showEdit = false
            return state
        })

        fetch('http://localhost:3000/users/1',{
            method:'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        })
            
    }

    toggleEdit(){
        this.setState( state => {
            state.showEdit = !state.showEdit
            return state
        })
    }
}
