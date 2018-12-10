const { div, h1, input, label } =  elements

const state = {
    user: { firstName: 'Joseph', lastName: 'F'}
}

const setState = function(callback){
    callback()
    render()
}

const render = function(){
    document.body.innerHTML = ''
    document.body.append(
        renderUserList(),
        renderUserForm()
    )
}

const renderUserList = function(){
    return (
       h1({}, `${state.user.firstName} ${state.user.lastName}`)
    )
}

const renderUserForm = function(){
    let { user } = state
    return (
        div({}, 
            label({}, 'First Name'),
            input({ 
                type: 'text', value: user.firstName, 
                input: (e) => {
                    setState( () => user.firstName = e.target.value )
                }
            }),
            label({}, 'Last Name'),
            input({ type: 'text', value: user.lastName, 
                input: (e) => {
                    setState( () => user.lastName = e.target.value )
                }
            })
        )
    )
}

render()