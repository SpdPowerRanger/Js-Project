// find() higher order function.

const transactions = [1000,3000,4000,2000,-898,-4500,3800]


let findElement = transactions.find((n)=>{
    return n<0
})
// find() is used to find the first element in an array that satisfies the input function's return statement or expression.
console.log(`First Element ->  ${findElement}`)

//findIndex() higher order function.

let findElementIndex = transactions.findIndex((n)=>{
    return n<0
})

console.log(`First Element Index -> ${findElementIndex}`)