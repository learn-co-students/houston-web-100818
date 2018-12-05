const framesPerSecond = 60;


class Component {

    constructor(){
        this.dom = this.render()
    }

    setState(callback){
        callback()
        let newDom = this.render()
        let oldDom = this.dom
        this.dom = newDom
        this.dom.parent.replaceChild(newDom, oldDom)
    }
}

class App extends Component {

    render(){
        return (
            h()('Hello World'),
            div()
        )
    }



}




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