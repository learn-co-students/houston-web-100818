# Real Time Apps with Express and Socket.io

## Vocabulary

* Client/Server

* HTTP/WS - HTTPS WSS

* Express

* `app`

  * `.get`

* Socket.io

* `socket / io`

  * `.emit`

  * `.on`

  * `respond`


## Outline

* Introduction
  * The internet is made up of 
    * Clients
    * Servers
    * Requests
    * Responses
    * **Emissions**

* Todays deliverables

  * Our starter code
  * Our goal
  * Overview of the stack
  * Highlevel outline
    * Create a server using Node.js
    * Serve an application from our server using HTTP
    * Listen for user input in the app
    * Send user input via WS back to the server
    * Propogate user input to other clients over WS

* Create Server
  * Express 
    * is a tool which helps us respond to HTTP requests
    * Hello World

* Serve an application

  * Express Serve Static

* Listen for user input to User Input
  * Set up client JS
    * is a tool which helps us respond to user input

* Send user input via WS back to the server

  * Character State

  * Socket.io
    * is a tool which helps us respond to (and make) WS requests

    * Installing Socket.io on the server is tricky: 

      ```
      var express = require('express');
      var app = express()
      var server = require('http').Server(app);
      var io = require('socket.io')(server);
      ```

    * CDN Link for client: https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js

    * Console.log 

      * Hello world
      * Character state

* Propogate user input back to all clients

  * Keep track of all characters
  * Send all characters to a user when they join
  * Send updates, using the characters name to "namespace" each character

* Finale

  * 10.185.7.245



```
var express = require('express');
var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);

let allCharacters = [];
io.on('connection', function(socket){

    socket.on('join', function(state, respond){
        let character = {
            name: state.name,
            state: state
        }
        respond(allCharacters)
        allCharacters.push(character)
        socket.broadcast.emit('joined', state)


        socket.on('update', function(state){
            character.state = state
            io.emit(character.name, state)
        })
    })

})

app.use(express.static('public'))

app.get('/', function(request, response){
    response.send(`
        <html>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    `)
})

server.listen(3000)
```





```
const socket = io('http://10.185.7.245:3000')
let character = new Character(window.prompt('Please enter your name:'))

socket.emit('join', character.state, function(otherCharacters){
    otherCharacters.forEach( other => {
        let character = new Character(other.name)
        character.state = other.state
        socket.on(character.name, function(state){
            character.state = state
        })
    })
})

socket.on('joined', function(joined){
    let character = new Character(joined.name)
    character.state = joined.state
    socket.on(character.name, function(state){
        character.state = state
    })
})


document.addEventListener('keydown', function(event){
	switch(event.key){
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

document.addEventListener('keyup', function(event){
    switch(event.key){
        case 'ArrowDown':
            character.stopSouth()
        break;
        case 'ArrowUp':
            character.stopNorth()
        break;
        case 'ArrowLeft':
            character.stopWest()
        break;
        case 'ArrowRight':
            character.stopEast()
        break;
    }
    socket.emit('update', character.state)
})
```

