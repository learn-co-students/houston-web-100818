const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

let allCharacters = []

io.on('connection', socket => {

    let character = {}

    socket.emit('characters', allCharacters)

    socket.on('join', characterState => {
        character.name= characterState.name,
        character.state=  characterState
        allCharacters.push(character)
        socket.broadcast.emit('joined', character)
    })


    socket.on('update', updatedState => {
        character.state = updatedState
        socket.broadcast.emit(character.name, character)
    })
})

app.use(express.static('public'))

server.listen(3000)