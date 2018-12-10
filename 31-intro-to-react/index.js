const { div, ul, li, input, label } =  elements

const state = {
    currentUser: null,
    users: [
        { firstName: 'Joseph', lastName: 'Frasier'},
        { firstName: 'Alan', lastName: 'Hong'},
        { firstName: 'Joshua', lastName: 'Miles'}
    ]
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
        ul({}, ...state.users.map( user => (
            li( { click: () => setState( () => state.currentUser = user)}, 
                `${user.firstName} ${user.lastName}`
            )
        )))
    )
}

const renderUserForm = function(){
    if(!state.currentUser) return null
    let { currentUser } = state
    return (
        div({}, 
            label({}, 'First Name'),
            input({ 
                type: 'text', value: currentUser.firstName, 
                input: (e) => {
                    setState( () => currentUser.firstName = e.target.value )
                }
            }),
            label({}, 'Last Name'),
            input({ type: 'text', value: currentUser.lastName, 
                input: (e) => {
                    setState( () => currentUser.lastName = e.target.value )
                }
            })
        )
    )
}