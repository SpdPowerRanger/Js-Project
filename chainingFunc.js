let arr = [
    {name:"A",age:23,gender:"M"},
    {name:"B",age:16,gender:"F"},
    {name:"C",age:19,gender:"F"},
    {name:"D",age:15,gender:"M"},
    {name:"E",age:18,gender:"M"},
    {name:"G",age:17,gender:"F"}
]

//Age of all males (M).

let maleAges = arr.filter((obj)=>{
    return obj.gender == "M"
}).map((male)=>{return male.age})

console.log(maleAges)

// from the transactions array filter out positive elements and calculate the total amount.
//use filter() and reduce().

const transactions = [1000,3000,4000,2000,-898,-4500,3800]

let positiveElements = transactions.filter((amount)=>{
    return amount>0
}).reduce((acc,value)=>{
    totalAmount = acc + value
    return totalAmount
},0)

console.log(positiveElements)
