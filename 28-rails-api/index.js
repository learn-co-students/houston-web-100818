const app = document.getElementById('app')
const server = ajax('http://localhost:3000')

let dragons = []
let selectedDragon = {}
let selectedView = 'dragons'

server.get('/dragons')
    .then(function(result){
        update(function(){
            dragons = result
        })
    })

const render = function(){
    app.innerHTML = ''
    switch(selectedView){
        case 'dragons':
            app.append( renderDragonsList() )
        break;
        case 'dragon':
            app.append( renderSelectedDragon() )
        break;
        case 'dragon-form':
            app.append( renderDragonForm() )
        break;
    }
}

const renderDragonsList = function(){
    return renderList(
        ...dragons.map( function(currentDragon){
            return renderListItem(currentDragon.name, function(){
               update(function(){
                   selectedDragon = currentDragon
                   selectedView = 'dragon'
               })
           })
        }),
        renderButton('+', function(){
            update(function(){
                selectedDragon = { 
                    name: '',
                    description: '',
                    image: '',
                    abilities: []
                }
                selectedView = 'dragon-form'
            })
        })
    )
}

const renderSelectedDragon = function(){
    let selectedDragonDiv = h('div')
    selectedDragonDiv.append(
        renderLink('Back to Dragons', function(){
            update(function(){
                selectedView = 'dragons'
            })
        }),
        renderHeader(selectedDragon.name),
        renderParagraph(selectedDragon.description),
        renderImage(selectedDragon.image),
        h('br'),
        renderLabel('Abilities'),
        renderList(
            ...selectedDragon.abilities.map(function(ability){
                return renderListItem(ability.name)
            })
        ),
        renderButton('Edit', function(){
            update(function(){
                selectedView = 'dragon-form'
            })
        }),
        renderButton('Delete', function(){
            update(function(){
                let targetIndex = dragons.indexOf(selectedDragon)
                dragons.splice(targetIndex, 1)
                selectedView = 'dragons'
                // Persisting our edits
                server.delete(`/dragons/${selectedDragon.id}`)
            })
        })
    )
    return selectedDragonDiv
}

const renderDragonForm = function(){
    let selectedDragonDiv = h('div')
    let nameInput, descriptionInput, imageInput, abilityInputs, abilityInputContainer;
    selectedDragonDiv.append(
        renderLabel('Name'),
        nameInput = renderInput('text', selectedDragon.name),
        h('br'),
        renderLabel('Description'),
        descriptionInput = renderInput('text', selectedDragon.description),
        h('br'),
        renderLabel('Image'),
        imageInput = renderInput('text', selectedDragon.image),
        h('br'),
        renderLabel('Abilities'),
        abilityInputContainer = renderDiv(
            ...abilityInputs = selectedDragon.abilities.map(function(ability){
                return renderInput('text', ability.name)
            }),
        ),
        renderButton('+', function(){
            let newInput = renderInput('text', '')
            selectedDragon.abilities.push({ name: '' })
            abilityInputs.push(newInput)
            abilityInputContainer.append(newInput)
        }),
        h('br'),
        renderButton('Save', function(){
            update(function(){
                selectedDragon.name = nameInput.value
                selectedDragon.description = descriptionInput.value
                selectedDragon.image = imageInput.value
                abilityInputs.forEach( function(input, index){
                    selectedDragon.abilities[index].name = input.value 
                })
                if(!dragons.includes(selectedDragon)){
                    dragons.push(selectedDragon)
                    // Persisting our newly created dragon
                    server.post(`/dragons/`, selectedDragon).then(function(result){
                        selectedDragon.id = result.id
                    })
                } else { 
                    // Persisting our edits
                    server.patch(`/dragons/${selectedDragon.id}`, selectedDragon)
                }
                selectedView = 'dragon'
            })
        }),
        renderButton('Cancel', function(){
            update(function(){
                selectedView = 'dragon'
            })
        })
    )
    return selectedDragonDiv
}

const update = function(updater){
    updater()
    render()
}

render()