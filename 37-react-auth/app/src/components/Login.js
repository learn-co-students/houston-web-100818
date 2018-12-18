import React from 'react'

export class Login extends React.Component {

    render(){
        return (
            <form onSubmit={this.login}>
                <h1>Login</h1>
                <div className="form-group">
                    <label>Email</label>
                    <input name="emailInput" className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="passwordInput" className="form-control" type="password" />
                </div>
                <button  className="btn btn-primary">Login</button>
            </form>
        )
    }

    login = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/auth/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email: e.target.emailInput.value,
                password: e.target.passwordInput.value
            })
        })
            .then(res => res.json())
            .then( result => {
                localStorage.setItem('token', result.token)
            })
    } 

}