// Higher Order Functions

// Currying
function make(){
    return function(ingredient1){
        return function(ingredient2){
            return function(ingredient3){
                return [ ingredient1, ingredient2, ingredient3 ]
            }
        }
    }
}

// Callbacks
function each(iterable, callback){
    for(var element of iterable){
        callback(element)
    }
}

// Currying and Callbacks
function merge(callback1, callback2){
    return function(input){
        let result1 = callback1(input)
        return callback2(result1)
    }
}