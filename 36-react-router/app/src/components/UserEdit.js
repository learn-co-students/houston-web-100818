import React from 'react'

export class UserEdit extends React.Component {

    state = {
        user: null
    }

    saveUser = (e) => {
        e.preventDefault()
        let { nameInput, phoneInput, emailInput } = e.target
        let userID = this.props.match.params.id
        fetch(`http://localhost:3001/users/${userID}`, {
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                name: nameInput.value,
                phone: phoneInput.value,
                email: emailInput.value
            })
        })
            .then( res => res.json())
            .then( () => {
                this.props.history.push(`/users/${userID}`)
            })
    }


    componentDidMount(){
        let userID = this.props.match.params.id

        fetch(`http://localhost:3001/users/${userID}`)
            .then( res=> res.json())
            .then( user => this.setState( { user } ))
    }

    render(){
        if(this.state.user == null) return <h2>Loading...</h2>
        const { name, phone, email } = this.state.user
        return (
            <form onSubmit={this.saveUser}>
                <h1>User Edit</h1>
                <div className="form-group">
                    <label>Name</label>
                    <input defaultValue={name} name="nameInput" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input defaultValue={phone} name="phoneInput" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input defaultValue={email} name="emailInput" className="form-control" type="text" />
                </div>
                <button  className="btn btn-primary">Save</button>
            </form>
        )
    }

}