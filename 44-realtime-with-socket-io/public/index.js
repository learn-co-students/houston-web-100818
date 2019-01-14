const socket = io('http://10.185.7.245:3000') 
const character = new Character(window.prompt('Please enter your name:'))

let addCharacter = characterData => {
    let character = new Character(characterData.name)
    character.state = characterData.state
    socket.on(character.name, characterData => {
        character.state = characterData.state
    })
}

// Adds characters already online when we connect
socket.on('characters', allCharacters => {
    allCharacters.forEach( characterData => {
        addCharacter(characterData)
    })
})

// Add new characters who join after us
socket.on('joined', characterData => {
    addCharacter(characterData)
})

socket.emit('join', character.state)

document.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowDown':
            character.walkSouth()
        break;
        case 'ArrowUp':
            character.walkNorth()
        break;
        case 'ArrowLeft':
            character.walkWest()
        break;
        case 'ArrowRight':
            character.walkEast()
        break;
    }

    socket.emit('update', character.state)
})

document.addEventListener('keyup', function(){
    character.stop()
    socket.emit('update', character.state)
})