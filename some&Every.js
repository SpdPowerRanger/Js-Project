// some() higher order function.

// some() returns a boolean value for the inputed function's return statement or expression in an array.

const transactions = [1000,3000,4000,2000,-898,-4500,3800] // some elements are negative

const allPositiveTransactions = [1000,3000,4000,2000,898,4500,3800] // every element is positive

let forSomeElement = transactions.some((num)=>{
    return num<0
})

//some() will return true (in this case) even if transactions array had only one desired element in it.
console.log(forSomeElement) // output is true as there are some negative (two) elements in the transaction array.


// every() higher order function.

// every() checks the condition for each element that is present in an array and gives a boolean output.

let forEveryElement = transactions.every((num)=>{
    return num>0 // positive check for every element in transactions array.
})

console.log(forEveryElement)

let forEveryPositiveElement = allPositiveTransactions.every((num)=>{
    return num>0 // positive check for every element in allPositiveTransactions array.
})

console.log(forEveryPositiveElement)