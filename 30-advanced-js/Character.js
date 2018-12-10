const { img } = elements;

class Character {

    constructor( { x = 0, y = 0, spriteKey = 'character', speed = 3 } = {}){
        this.x = x
        this.y = y
        this.spriteKey = spriteKey
        this.sprite = `assets/${spriteKey}/static.gif`
        this.speed = speed
        this.movement = null

        document.addEventListener('keydown', e => {
            if(e.repeat) return
            switch(e.key){
                case 'ArrowLeft':
                    this.walk('left')
                break;
                case 'ArrowRight':
                    this.walk('right')
                break;
                case 'ArrowUp':
                    this.walk('up')
                break;
                case 'ArrowDown':
                    this.walk('down')
                break;
            }
        })
        
        document.addEventListener('keyup', e => {
           this.stop()
        })

        this.dom = this.render()
    }

    setState(callback){
        callback()
        let oldDom = this.dom
        let newDom = this.render()
        oldDom.parentElement.replaceChild(newDom, oldDom)
        this.dom = newDom
    }

    render(){
        return (
            img({ 
                src: this.sprite, 
                style: `
                    width:70;
                    position: absolute;
                    left: ${this.x}px; 
                    bottom:${this.y}px;
                `
            })   
        )
    }
    
    walk(direction){
        clearInterval(this.movement)
        this.setState( () => this.sprite = `assets/${this.spriteKey}/walk${direction}.gif`)
        this.movement = everyFrame(  () => this[direction]() )
    }

    left(){
        this.setState( () =>  this.x -= this.speed )
    }

    right(){
        this.setState( () =>  this.x += this.speed )
    }

    up(){
        this.setState( () =>  this.y += this.speed )
    }

    down(){
        this.setState( () =>  this.y -= this.speed )
    }

    stop(){
        this.setState( () => this.sprite = `assets/${this.spriteKey}/static.gif`)
        clearInterval(this.movement)
    }
}