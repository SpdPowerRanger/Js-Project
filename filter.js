const nums = [1,2,3,4,5,6,7,8,9]

// filter() higher order functions. 

// filters elements in an array. You have to provide a function as a condition.
let evenNums = nums.filter((evenNum)=>{
    return evenNum%2==0
})

console.log(evenNums)

const transactions = [1000,3000,4000,2000,-898,-4500,3800]

let positiveTransactions = transactions.filter((num)=>{
    return num>0
})

console.log(positiveTransactions)