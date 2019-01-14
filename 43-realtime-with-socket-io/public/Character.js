const settings = {
    framesPerSecond: 60
}

class Character {

    constructor(name){
        this.spritePath = '/character'
        this.element = document.createElement('div')
        this.imageElement = document.createElement('img')
        this.imageElement.style.width = '100%'
        this.labelElement = document.createElement('span')
        this.element.append(
            this.labelElement,
            this.imageElement,
        )
        this.element.style.position = 'absolute'
        this.x = 0
        this.y = 0
        this.selectedSprite = 'static'
        document.body.append(this.element)
        this.name = name
        this.width = 50
        this.speed = 3
        this.direction = {
            x: 0,
            y: 0
        }
        this.movement = setInterval( () => {
            this.x += this.speed * this.direction.x
            this.y += this.speed * this.direction.y
            if(this.direction.x == 0 && this.direction.y == 0) this.selectedSprite = 'static'
        }, 1000 / settings.framesPerSecond)
    }

    set state(values){
        Object.assign(this, values)
    }

    get state(){
        return {
            name: this.name,
            direction: this.direction,
            selectedSprite: this.selectedSprite,
            x: this.x,
            y: this.y
        }
    }

    walkEast(){
        this.selectedSprite = 'walkright'
        this.direction.x = 1
    }
    
    walkWest(){
        this.selectedSprite = 'walkleft'
        this.direction.x = -1
    }
    
    walkNorth(){
        this.selectedSprite = 'walkup'
        this.direction.y = 1
    }
    
    walkSouth(){
        this.selectedSprite = 'walkdown'
        this.direction.y = -1 
    }

    stopEast(){
       this.direction.x = 0 
    }

    stopWest(){
        this.direction.x = 0
    }

    stopNorth(){
        this.direction.y = 0
    }

    stopSouth(){
        this.direction.y = 0
    }
    
    stop(){
        this.direction.x = 0
        this.direction.y = 0
    }

    

    get name(){
        return this._name
    }

    set name(value){
        this._name = value
        this.labelElement.innerText = value
    }

    get fullSpritePath(){
        return `assets/${this.spritePath}/${this.selectedSprite}.gif`
    }

    get x(){
        return parseInt(this.element.style.left)
    }

    set x(value){
        this.element.style.left = `${value}px`
    }

    get y(){
        return parseInt(this.element.style.bottom)
    }

    set y(value){
        this.element.style.bottom = `${value}px`
    }

    get width(){
        return parseInt(this.style.width)
    }

    set width(value){
        this.element.style.width = `${value}px`
    }

    get height(){
        return parseInt(this.style.height)
    }

    set height(value){
        this.element.style.height = `${value}px`
    }

    get selectedSprite(){
        return this._selectedSprite
    }

    set selectedSprite(value){
        if(this._selectedSprite == value) return
        this._selectedSprite = value 
        this.imageElement.src = this.fullSpritePath
    }

}