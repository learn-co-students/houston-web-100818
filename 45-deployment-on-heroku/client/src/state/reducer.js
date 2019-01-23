import history from './history'

export const reducer = function(currentState, action){
    const newState = { ...currentState }
    
    switch(action.type){
        case 'RECEIVED_SELECTED_QUESTION':
            newState.selectedQuestion = action.payload
        break;
        case 'SELECT_QUESTION':
            history.push(`/question/${action.payload}`)
        break;
    }

    return newState
}