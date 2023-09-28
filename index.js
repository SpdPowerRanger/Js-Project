var a = 20

console.log(a + 20) 

var arr = [1,'name',2,4]



arr[1] = 'changedName'

console.log(arr[1])

console.log(arr.length)

//pop()

var arr2 = [1,5,4,7]

console.log(arr2)

arr2.pop()

console.log(arr2)

//push()

arr2.push('pushed')

console.log(arr2)


//shift()

arr2.shift()

console.log(arr2)


//unshift()

arr2.unshift('pushed using -- unshifted')

console.log(arr2)


//objects (in js objects are what dictionaries are on python but like objects.)

var personObj = {key1 : 'name -> py', key2 : 'age -> 4'}

// dot notation.

console.log(personObj.key1)

// bracket notation

console.log(personObj['key2'])


var shirt = {
    type : {
        tshirt : {
            type1 : 'RoundNeck',
            type2 : 'Vneck'
        },
        type2 : 'Shirt',
        type3 : 'Flannel' 
    },
    color: 'red',
    size: 'L',
    brand : ["Levi's",'F&F','H&M',"Zara"]
}


console.log(shirt.type.tshirt.type1)

delete shirt.type.tshirt.type2

console.log(shirt)