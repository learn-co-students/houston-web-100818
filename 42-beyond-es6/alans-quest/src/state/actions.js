export const actions = {

    answerQuestion(option){
        return ({ type: 'SELECT_QUESTION', payload: option.nextQuestionID  })
    },

    selectQuestion(id){
        return async function(dispatch, getState){
            let state = getState()
            if(!state.selectedQuestion || state.selectedQuestion.id != id){
                const response = await fetch(`http://localhost:3000/questions/${id}`)
                const question = await response.json()
                dispatch({ 
                    type: 'RECEIVED_SELECTED_QUESTION',
                    payload: question 
                })
            }
        }
    }
}