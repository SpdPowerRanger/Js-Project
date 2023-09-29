// deconstructing arrays.

let arr = ['I', ,"am","Wolf", ]

// let [a,b,c,d,e] = arr 

// console.log(a)

// console.log(b)

// console.log(c)

// console.log(d)

// console.log(e)


// deconstructing objects

let objName = {
    name : 'wolf',
    age : '455',
    gender : 'M',
    
    address : {
        state : "DG",

        city : 'NightCity'

    }
}

// let {a,b,c} = objName

// console.log(a)

// console.log(b)
// console.log(c)

// let {name,age,gender} = objName

// console.log(name)
// console.log(age)
// console.log(gender)

let {name, age, gender} = objName

let {name:n, age:a, gender:g,address:{city:c}} = objName

console.log(n)

console.log(objName.age)