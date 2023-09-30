//we will be given a num1 and have to check that the square of the num1 is even or not.

// imperative way of writing code.
function squareEvenCheck(num1){
    square = num1 * num1

    if (square%2==0){
        console.log(`Square of ${num1} : ${square}, 
        Square Even : Yes.` )
    }
    else{
        console.log(`Square of ${num1} : ${square},
        Square Even : No`)
    }
}

// squareEvenCheck(2)
// squareEvenCheck(3)

// Declarative way of writing code.

const evenSquareCheck = (num) => (num*num%2==0 ? true : false)


console.log(evenSquareCheck(4))
