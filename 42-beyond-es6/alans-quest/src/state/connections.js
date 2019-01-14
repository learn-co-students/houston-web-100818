import { connect } from 'react-redux'

export const actions = {

    answerQuestion(option){
        return ({ type: 'SELECT_QUESTION', payload: option.nextQuestionID  })
    },

    selectQuestion(id){
        return async function(dispatch, getState){
            let state = getState()
            if(!state.selectedQuestion || state.selectedQuestion.id != id){
                const resp = await fetch(`http://localhost:3000/questions/${id}`)
                const question = await resp.json()
                dispatch({ 
                    type: 'RECEIVED_SELECTED_QUESTION',
                    payload: question 
                })
            }
        }
    }
}

// Add the prop values you want to pull from state below:
// export function connectSelectedQuestion(descriptor){
//     descriptor.finisher = function(Component){
//         return connect( state => ({
//             question: state.selectedQuestion
//         }), actions)(Component)
//     }
//     return descriptor
// }

function createConnectionDecorator(mapStateToProps, mapDispatchToProps){
    return descriptor => {
        descriptor.finisher = function(Component){
            return connect( mapStateToProps, mapDispatchToProps )(Component)
        }
        return descriptor
    }
}


export const connectSelectedQuestion = createConnectionDecorator(state => ({
    question: state.selectedQuestion
}), actions)

export const connectBarAndFoo = createConnectionDecorator(state => ({
    bar: 'foo'
}), actions)




