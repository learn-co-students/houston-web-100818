import React from 'react'
import { UserDisplay } from './UserDisplay.js'
import { UserForm } from './UserForm.js'


export class UserProfile extends React.Component {

    constructor(props){
        super()
        this.state = {
            user: {
                firstName: props.firstName,
                lastInitial: props.lastInitial,
                email: '',
                phone: '',
            },
            showEdit: false
        }
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

    handleUserFormSubmit(values){
        this.setState( state => {
            state.user = values
            state.showEdit = false
            return state
        })  
    }

    toggleEdit(){
        this.setState( state => {
            state.showEdit = !state.showEdit
            return state
        })
    }
}
