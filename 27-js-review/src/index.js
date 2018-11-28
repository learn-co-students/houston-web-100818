const dogBar = document.querySelector('#dog-bar')
const dogInfo = document.querySelector('#dog-info')
const filterButton = document.querySelector('#good-dog-filter')

// Data
let dogs;
let selectedDog;
let filterIsOn = false;

fetch('http://localhost:3000/pups')
	.then(function(response){
		return response.json()
	})
	.then(function(result){
        dogs = result
        render()
    })
    
filterButton.addEventListener('click', function(){
    filterIsOn = !filterIsOn
    render()
})


const render = function(){
    renderDogBar()
    renderSelectedDog()
    filterButton.innerText = filterIsOn ? "Filter good dogs: ON" : "Filter good dogs: OFF"
}

const renderDogBar = function(){
    dogBar.innerHTML = ''
    dogs.forEach(function(dog){
        if(!filterIsOn || dog.isGoodDog){
            const dogSpan = document.createElement('span')
            dogSpan.innerText = dog.name 
            dogBar.append(dogSpan)
            dogSpan.addEventListener('click', function(){
                selectedDog = dog
                render()
            })
        }
    })
}

const renderSelectedDog = function(){
    if(selectedDog){
        dogInfo.innerHTML = `
            <img src="${selectedDog.image}">
            <h2>${selectedDog.name}</h2>
        `
        let toggleButton = document.createElement('button')
        toggleButton.innerText = selectedDog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
        dogInfo.append(toggleButton)
        toggleButton.addEventListener('click', function(){
            selectedDog.isGoodDog = !selectedDog.isGoodDog
            // render() // Optimistic rendering
            saveSelectedDog()
        })
    } else {
        dogInfo.innerHTML = `
            <h3>Please select a dog</h3>
        `
    }
}

const saveSelectedDog = function(){
    fetch(`http://localhost:3000/pups/${selectedDog.id}`, {
        method:'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(selectedDog)
    })
        // Conditionally rendering
        .then( render )
}