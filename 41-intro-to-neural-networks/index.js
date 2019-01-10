const ROOT = document.body.appendChild(document.createElement('div'))
const NUMBER_OF_POINTS = 400
const NUMBER_OF_EPOCHS = 10
const X_MAX = window.innerHeight
const Y_MAX = window.innerHeight

const render = function(points, weights){
    ROOT.innerHTML = `
    <svg width="${X_MAX}" height="${Y_MAX}">
    ${points.map(point => 
        `<circle 
            cx="${point.x}"
            cy="${point.y}"
            r="3"
            fill="${guess(point, weights) === -1 ? 'blue' : 'red' }"/>`
        )}
        <line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}" stroke="purple" />
    </svg>`
}

function train(weights, point) {
    const guessResult = guess(point, weights) 
    const error = point.team - guessResult 
    const learningRate = 0.1
    return {
      x: weights.x + point.x * error * learningRate,
      y: weights.y + point.y * error * learningRate,
    }
}

const guess = (point, weights) => {
    const sum = 
            point.x * weights.x + 
            point.y * weights.y
    const team = sum >= 0 ? 1 : -1
    return team
}

const rand = (high, low) => Math.random() * (high - low) + low
const sleep = time => new Promise( resolve => setTimeout(resolve, time))

const randomPoints = []
for(let i = 0; i < NUMBER_OF_POINTS; i++){
    let x = rand(0, X_MAX)
    let y = rand(0, Y_MAX)
    randomPoints.push({ x, y, team: x > y ? 1 : -1 })
}

const randomWeights = {
    x: rand(-1, 1),
    y: rand(-1, 1)
}

;(async function(){
    let trainedWeights = randomWeights;
    for(let i = 0; i < NUMBER_OF_EPOCHS; i++){
        render(randomPoints, trainedWeights)
        randomPoints.forEach( point => trainedWeights = train(trainedWeights, point))
        await sleep(1000)
    }
    console.log(trainedWeights)
})()