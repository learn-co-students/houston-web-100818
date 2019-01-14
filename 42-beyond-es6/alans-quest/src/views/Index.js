import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { route } from '../state/routing'

export 
@route('/')
class Index extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase">Alan's Quest</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">His Quest. His Story. His Legend.</h2>
                            <Link className="btn btn-primary mb-5" to='/question/1'>Get Started</Link>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}