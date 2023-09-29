// using the function keyword to create a function

function add(a,b){
    return a + b
} 


let added = add(1,2)

console.log(added)


// declaring a var and then adding a function on it.

let addFunc = function(a,b){
    result = a+b
    return console.log(result)
}

addFunc(9,2)


// arrow function =>

let arrowAddFunc = (a,b) => {
    result = a+b
    return console.log(result)
} 


arrowAddFunc(5,4)


// Arrow function in a single line.

let arrAddFunc2 = (a,b) =>  console.log(a+b)

arrAddFunc2(4,2)
