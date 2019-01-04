import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions } from '../state/actions'

class _QuestionDisplay extends Component {

    componentDidMount(){
        this.props.selectQuestion(this.props.match.params.id)
    }

    componentDidUpdate(){
        this.props.selectQuestion(this.props.match.params.id)
    }

    render() {
        const { question } = this.props
        return (
            <div>
                { question &&
                    <div>
                    <h1>{question.content}</h1>
                   {question.options.map( (option, index) => (
                        <button key={index} onClick={() => this.props.answerQuestion(option)}>
                            {option.content}
                        </button>
                   ))}
                    </div>
                }
                { !question &&
                    <h1>Loading...</h1>
                }
            </div>
        );
    }
}

// Add the prop values you want to pull from state below:
const mapStateToProps = (state) => ({
    question: state.selectedQuestion
})

export const QuestionDisplay = connect(mapStateToProps, actions)(_QuestionDisplay)