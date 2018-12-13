import React from 'react'

export class UserForm extends React.Component {

    constructor(props){
        super()
        this.state = {
            firstName: props.firstName,
            lastInitial: props.lastInitial,
            email: '',
            phone: '',
        }
    }




    render(){
        return (
            <div>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        className="form-control" 
                        value={this.state.firstName} 
                        type="text" 
                        onChange={e => this.updateFormProperty('firstName', e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Last Initial</label>
                    <input 
                        className="form-control" 
                        value={this.state.lastInitial} 
                        type="text" 
                        onChange={e => this.updateFormProperty('lastInitial', e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        className="form-control" 
                        value={this.state.email} 
                        type="text" 
                        onChange={e => this.updateFormProperty('email', e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input 
                        className="form-control" 
                        value={this.state.phone} 
                        type="text" 
                        onChange={e => this.updateFormProperty('phone', e.target.value)}
                    ></input>
                </div>
                <button 
                    className="btn btn-primary"
                    onClick={ e => {
                        this.props.onSubmit(this.state)
                    }}
                >Save</button>
            </div>
        )
    }

    updateFormProperty(key, value){ 
        this.setState( state => {
            state[key] = value
            return state
        })
    }
}