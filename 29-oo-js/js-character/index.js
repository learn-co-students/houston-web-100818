const framesPerSecond = 60;

class Character {

    constructor(sprites, speed){
        this.element = document.createElement('img')
        this.assets = `assets/${sprites}`
        this.speed = speed
        this.element.src = `${this.assets}/static.gif`
        this.element.style.position = 'absolute'
        this.element.style.left = '0px'
        this.element.style.top = '0px'
        this.element.style.width = "50px"
        document.body.appendChild(this.element)
        Character.allArray.push(this)
    }

    walkEast(){
        this.stop()
        this.movement = setInterval( () => {
            let currentPosition = parseInt(this.element.style.left)
            this.element.style.left = currentPosition + this.speed + 'px'
        }, 1000/framesPerSecond)  
        this.element.src = `${this.assets}/walkright.gif`
    }
    
    walkWest(){
        this.stop()
        this.movement = setInterval( () => {
            let currentPosition = parseInt(this.element.style.left)
            this.element.style.left = currentPosition - this.speed + 'px'
        }, 1000/framesPerSecond)  
        this.element.src = `${this.assets}/walkleft.gif`
    }
    
    walkNorth(){
        this.stop()
        this.movement = setInterval( () => {
            let currentPosition = parseInt(this.element.style.top)
            this.element.style.top = currentPosition - this.speed + 'px'
        }, 1000/framesPerSecond)  
        this.element.src = `${this.assets}/walkup.gif`
    }
    
    walkSouth(){
        this.stop()
        this.movement = setInterval( () => {
            let currentPosition = parseInt(this.element.style.top)
            this.element.style.top = currentPosition + this.speed + 'px'
        }, 1000/framesPerSecond)  
        this.element.src = `${this.assets}/walkdown.gif`
    }
    
    stop(){
        clearInterval(this.movement)
        this.element.src = `${this.assets}/static.gif`
    }

}


// function Character(){
//     this.element = document.createElement('img')
//     this.assets = 'assets/character'
//     this.speed = 2
//     this.element.src = `${this.assets}/static.gif`
//     this.element.style.position = 'absolute'
//     this.element.style.left = '0px'
//     this.element.style.top = '0px'
//     this.element.style.width = "50px"
//     document.body.appendChild(this.element)
// }

// Character.prototype.walkEast = function(){
//     this.stop()
//     this.movement = setInterval( () => {
//         let currentPosition = parseInt(this.element.style.left)
//         this.element.style.left = currentPosition + this.speed + 'px'
//     }, 1000/framesPerSecond)  
//     this.element.src = `${this.assets}/walkright.gif`
// }

// Character.prototype.walkWest = function(){
//     this.stop()
//     this.movement = setInterval( () => {
//         let currentPosition = parseInt(this.element.style.left)
//         this.element.style.left = currentPosition - this.speed + 'px'
//     }, 1000/framesPerSecond)  
//     this.element.src = `${this.assets}/walkleft.gif`
// }

// Character.prototype.walkNorth = function(){
//     this.stop()
//     this.movement = setInterval( () => {
//         let currentPosition = parseInt(this.element.style.top)
//         this.element.style.top = currentPosition - this.speed + 'px'
//     }, 1000/framesPerSecond)  
//     this.element.src = `${this.assets}/walkup.gif`
// }

// Character.prototype.walkSouth = function(){
//     this.stop()
//     this.movement = setInterval( () => {
//         let currentPosition = parseInt(this.element.style.top)
//         this.element.style.top = currentPosition + this.speed + 'px'
//     }, 1000/framesPerSecond)  
//     this.element.src = `${this.assets}/walkdown.gif`
// }

// Character.prototype.stop = function(){
//     clearInterval(this.movement)
//     this.element.src = `${this.assets}/static.gif`
// }




// function createCharacter(){
//     const character = {}

//     character.element = document.createElement('img')
//     // const characterElement = document.createElement('img')
//     character.assets = 'assets/character'
//     // const characterAssets = 'assets/character'
//     character.speed = 2
//     // const speed = 2
//     character.element.src = `${character.assets}/static.gif`
//     character.element.style.position = 'absolute'
//     character.element.style.left = '0px'
//     character.element.style.top = '0px'
//     character.element.style.width = "50px"
//     document.body.appendChild(character.element)

//     // let movement
//     // character.movement = null

//     character.walkEast = function(){
//         this.stop()
//         character.movement = setInterval(function(){
//             let currentPosition = parseInt(character.element.style.left)
//             character.element.style.left = currentPosition + character.speed + 'px'
//         }, 1000/framesPerSecond)  
//         character.element.src = `${character.assets}/walkright.gif`
//     }

//     character.walkWest = function(){
//         this.stop()
//         character.movement = setInterval(function(){
//             let currentPosition = parseInt(character.element.style.left)
//             character.element.style.left = currentPosition - character.speed + 'px'
//         }, 1000/framesPerSecond)  
//         character.element.src = `${character.assets}/walkleft.gif`
//     }

//     character.walkNorth = function(){
//         this.stop()
//         character.movement = setInterval(function(){
//             let currentPosition = parseInt(character.element.style.top)
//             character.element.style.top = currentPosition - character.speed + 'px'
//         }, 1000/framesPerSecond)  
//         character.element.src = `${character.assets}/walkup.gif`
//     }

//     character.walkSouth = function(){
//         this.stop()
//         character.movement = setInterval(function(){
//             let currentPosition = parseInt(character.element.style.top)
//             character.element.style.top = currentPosition + character.speed + 'px'
//         }, 1000/framesPerSecond)  
//         character.element.src = `${character.assets}/walkdown.gif`
//     }

//     character.stop = function(){
//         clearInterval(character.movement)
//         character.element.src = `${character.assets}/static.gif`
//     }

//     return character

// }