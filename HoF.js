// square of elements on a list or array.

let num = [1,2,3,4,5]

let squareNum = []  

for (element of num){
    square = element*element
    squareNum.push(square)

}

console.log(squareNum)

// map() function.
// higher order function.

const squaredNums = num.map((num)=>{
    return num*num
})

console.log(squaredNums)



// new example



const transactions = [1000,3000,4000,2000,-898,-4500,3800]

const dollarToInr = 80

const conversion = transactions.map((amount)=>{
    return amount/dollarToInr
})

console.log(conversion)

// forEach() same as map() just not able to use return, have to use console.log() instead.
const conversion1 = transactions.forEach((amount)=>{
    console.log(amount/dollarToInr)
})

