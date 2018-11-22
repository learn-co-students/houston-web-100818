// DOM Elements
const decrementButton = document.querySelector('#-')
const incrementButton = document.querySelector('#+')
const likeButton = document.querySelector('#<3')
const pauseButton = document.querySelector('#pause')
const submitButton = document.querySelector('#submit')
const commentForm = document.querySelector('#comment-form')
const likeList = document.querySelector('.likes')
const commentsList = document.querySelector('#comments-list')
const counterDisplay = document.querySelector('#counter')
const contentInput = commentForm.querySelector('[name="content"]')

// Data
let counter = 0;
let likes = [];
let comments = []
let paused = false

// Event Listeners 
setInterval(function(){
    update(function(){
        counter++
    })
}, 1000)

decrementButton.addEventListener('click', function(e){
    update(function(){
        counter--
    })
})

incrementButton.addEventListener('click', function(e){
    update(function(){
        counter++
    })
})

likeButton.addEventListener('click', function(){
    update(function(){
        likes.push(counter)
    })
})

pauseButton.addEventListener('click', function(){
    paused = !paused // Paused can't play by the rules
    render()
})

submitButton.addEventListener('click', function(e){
    e.preventDefault()
    update(function(){
        comments.push(contentInput.value)
        contentInput.value = ''
    })   
})


// Render
const render = function(){
    counterDisplay.innerHTML = counter
    pauseButton.innerText = paused ? 'resume' : 'pause'
    
    // Render Likes
    likeList.innerHTML = ``
    likes.filter( onlyUnique ).forEach(function(currentNumber){
        let plurality = numberOfLikesFor(currentNumber) > 1 ? 's' : ''
        likeList.innerHTML += `
            <li>${currentNumber} has been like ${numberOfLikesFor(currentNumber)} time${plurality} </li>
        `
    })

    // Render Comments
    commentsList.innerHTML = ``
    comments.forEach(function(comment){
        commentsList.innerHTML += `
            <p>${comment}</p>
        `
    })
}


// Helper functions
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function numberOfLikesFor(currentNumber){
    let counter = 0
    likes.forEach(function(element){
        if(currentNumber == element){
            counter++
        }
    })
    return counter;
}

const update = function(callback){
    if(!paused){
        callback()
        render()
    }
}