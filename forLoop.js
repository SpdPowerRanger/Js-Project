var hello = "hello world"

// for loop

for(var i = 1; i < 11; i++){
    console.log(hello +' => '+ i)
}

//square elements of array.

var arr = [2,4,6,8,10]

var squaredArr = []

for (var i = 0; i < arr.length; i++ ){
    var square = arr[i] * arr[i]
    console.log(square +' is the square of '+ arr[i]+".")
    squaredArr.push(square) 
}

console.log(squaredArr)