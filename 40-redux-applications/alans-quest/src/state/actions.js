export const actions = {

    answerQuestion(option){
        return ({ type: 'SELECT_QUESTION', payload: option.nextQuestionID  })
    },

    selectQuestion(id){
        return function(dispatch, getState){
            let state = getState()
            if(!state.selectedQuestion || state.selectedQuestion.id != id){
                fetch(`http://localhost:3000/questions/${id}`)
                    .then( res => res.json())
                    .then( question => {
                        dispatch({ 
                            type: 'RECEIVED_SELECTED_QUESTION',
                            payload: question 
                        })
                    })
            }
        }
    }
}