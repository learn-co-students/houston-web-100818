const h = document.createElement.bind(document)
const s = document.querySelector.bind(document)

const renderList = function(...items){
    let list = h('ul')
    list.append(...items)
    return list
}

const renderListItem = function(content, callback){
    let listItem =  h('li')
    listItem.innerText= content
    listItem.addEventListener('click', callback)
    return listItem
}

const renderHeader = function(content){
    let header =  h('h1')
    header.innerText= content
    return header
}

const renderParagraph = function(content){
    let paragraph =  h('p')
    paragraph.innerText= content
    return paragraph
}

const renderButton = function(content, callback){
    let button =  h('button')
    button.innerText= content
    button.addEventListener('click', callback)
    return button
}

const renderImage = function(src){
    let image = h('img')
    image.src = src
    image.style.width = '200px'
    return image
}

const renderLink = function(content, callback){
    let link = h('a')
    link.innerText = content
    link.addEventListener('click',  function(e){
        e.preventDefault()
        callback(e)
    })
    return link
}

const renderLabel= function(content){
    const label = h('label')
    label.innerText = content
    return label
}

const renderInput = function(type, value){
    const input = h('input')
    input.value = value
    return input
}  

const renderDiv = function(...contents){
    const div = h('div')
    div.append(...contents)
    return div
}

const ajax = function(root){
    return {
        get(path){
            return fetch(`${root}${path}`)
                .then( resp => resp.json() )
        },
        patch(path, body){
            return fetch(`${root}${path}`, {
                method: 'PATCH',
                headers:{
                    'Content-Type':'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then( resp => resp.json() )
        },
        post(path, body){
            return fetch(`${root}${path}`, {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then( resp => resp.json() )
        },
        delete(path){
            return fetch(`${root}${path}`, { method:'DELETE' })
                .then( resp => resp.json() )
        }
    }
}