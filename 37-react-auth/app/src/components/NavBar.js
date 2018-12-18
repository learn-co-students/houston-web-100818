import React from 'react'
import { withRouter } from 'react-router-dom'

class _NavBar extends React.Component {

    render(){
        return (
            <nav className="navbar navbar-light bg-light">
                <a onClick={() => this.goTo(`/`)} className="navbar-brand" href="javascript:void(0)">The Book of Alan</a>
                <a onClick={() => this.goTo(`/login`)} className="nav-link" href="javascript:void(0)">Login</a>
                <a onClick={() => this.goTo(`/sign-up`)} className="nav-link" href="javascript:void(0)">Sign Up</a>
            </nav>
        )
    }

    goTo = (url) => {
        this.props.history.push(url)
    }

}

export const NavBar = withRouter(_NavBar)