import React, { Component } from 'react';
import { connectSelectedQuestion, connectBarAndFoo } from '../state/connections'
import { route } from '../state/routing'

export 
@route('/question/:id')
@connectBarAndFoo
@connectSelectedQuestion 
class QuestionDisplay extends Component {

    componentDidMount(){
        this.props.selectQuestion(this.props.match.params.id)
    }

    componentDidUpdate(){
        this.props.selectQuestion(this.props.match.params.id)
    }

    render() {
        console.log(this.props)
        const { question } = this.props
        return (
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        { question &&
                            <div>
                                <h1 className="mx-auto my-0 text-uppercase">{question.content}</h1>
                                {question.options.map( (option, index) => (
                                    <div className="mt-3" key={index}>
                                        <button className="btn btn-primary" key={index} onClick={() => this.props.answerQuestion(option)}>
                                            {option.content}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        }
                        { !question &&
                            <h1 className="mx-auto my-0 text-uppercase">Loading...</h1>
                        }
                    </div>
                </div>
            </header>
        );
    }
}



// export const QuestionDisplay = connect(mapStateToProps, actions)(_QuestionDisplay)