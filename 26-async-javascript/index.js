const dogList = document.body.appendChild(document.createElement('ul'))
const dogDetail = document.body.appendChild(document.createElement('ul'))

// Also works: 
// const dogList = document.createElement('ul')
// const dogDetail = document.createElement('ul')
// document.body.append(dogList)
// document.body.append(dogDetail)

const render = function(){
    fetch('http://10.185.4.225:3001/Dogs')
        .then( function(response){
            return response.json()	
        }) 
        .then( function(dogs){
            dogList.innerHTML = ``
            dogDetail.innerHTML = ``
            dogs.forEach(function(dog, indexOfDog){
                const dogName = document.createElement('li')
                dogName.id = dog.name
                dogName.className = 'dog-list-li'
                dogName.innerHTML = `
                    <b class="dog-name">${dog.name}</b>
                `
                dogName.addEventListener('click', function(event){
                    renderDogDetail(dog, dogs)
                })
                dogList.append(dogName)
            })

            let createButton = document.createElement('button')
            createButton.innerText = 'Create New Dog'
            createButton.addEventListener('click', function(event){
               renderDogForm({
                   name:'',
                   breed:'',
                   image:''
               }, true)
            })
            dogList.append(createButton)
        } )
}

const renderDogDetail = function(dog, dogs){
    dogDetail.innerHTML = `
        <li>Name: ${dog.name}</li>
        <li>Breed: ${dog.breed}</li>
        <li><img src="${dog.image}" /></li>
    ` 
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', function(event){
        fetch(`http://10.185.4.225:3001/Dogs/${dog.id}`, {
            method:'DELETE'
        })
            .then( render )
         //   .then( console.log )
        // let indexOfDog = dogs.indexOf(dog)
        // dogs.splice(indexOfDog, 1)
        
    })
    dogDetail.append(deleteButton)
    let editButton = document.createElement('button')
    editButton.innerText = 'edit'
    editButton.addEventListener('click', function(event){
        renderDogForm(dog)
    })
    dogDetail.append(editButton)
}

const renderDogForm = function(dog, usePost = false){
    dogDetail.innerHTML = `
        <form class="dog">
            <div>
                <label>Name</label>
                <input class="name-field" type="text" value="${dog.name}"/>
            </div>
            <div>
                <label>Breed</label>
                <input class="breed-field" type="text" value="${dog.breed}"/>
            </div>
            <div>
                <label>Image</label>
                <input class="image-field" type="text" value="${dog.image}"/>
            </div>
        </form>
    `
    let submitButton = document.createElement('button')
    submitButton.innerText= 'Submit'
    submitButton.addEventListener('click', function(event){
        // let input = dogDetail.querySelector('.name-field')
        // dog.name = input.value
        // dog.name = dogDetail.querySelector('.name-field').value
        // dog.breed = dogDetail.querySelector('.breed-field').value
        // dog.image = dogDetail.querySelector('.image-field').value
        if(dog.id){
            updateDog(dog)
        } else {
            createDog(dog)
        }
    })
    dogDetail.append(submitButton)
}

const updateDog = function(dog){
    fetch(`http://10.185.4.225:3001/Dogs/${dog.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: dogDetail.querySelector('.name-field').value,
                breed: dogDetail.querySelector('.breed-field').value,
                image: dogDetail.querySelector('.image-field').value
            })
        }) .then ( render )
}

const createDog = function(dog){
    fetch(`http://10.185.4.225:3001/Dogs/`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name: dogDetail.querySelector('.name-field').value,
            breed: dogDetail.querySelector('.breed-field').value,
            image: dogDetail.querySelector('.image-field').value
        })
    }) .then ( render )
}

render()