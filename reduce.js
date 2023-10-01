// some of every element in an array.

let arr = [1,55,45,6,4]
let sum = 0 // this is an accumulator here as it,
for (num of arr){
    sum = sum + num //accumulates the value of added elements of the array arr.
}

console.log(sum) // accumulated value will be outputed.


let newArr = [1,2,3,4,10] 

let sumArr = newArr.reduce((acc,value)=>{ // here array elements are reffered as value.
    addedValue = acc + value
    return addedValue
},0) 

console.log(sumArr)

let mulArr = newArr.reduce((acc,value)=>{ // here array elements are reffered as value.
    product = acc * value
    return product
},1)

console.log(mulArr)