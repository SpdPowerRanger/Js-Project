// impure Function.


let outerVarNum = 3 // outer resource or outer var.

const addImpure = (num) => {
    console.log(num + outerVarNum) // here use of outer var and also console.log() an outer resource, makes this func impure.
}

// impure func uses outer resources which can change thus resulting in different outputs each time, using the same input.
addImpure(2)



// Pure Function.


const addPure = (num1, num2) =>{
    return num1 + num2 // no use of outer variables or outer resourcers.
} 

// pure func returns same output every time if provided with same input.
console.log(addPure(4,4))
console.log(addPure(4,4))
console.log(addPure(4,4))

