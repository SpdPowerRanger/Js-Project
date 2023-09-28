var arr = ["blue","White","Red"]


// for of arrays.

for(var color of arr){
    console.log(color)
}

for(var [index,color] of arr.entries()){
    console.log(index+" -> "+ color)
}

for(var index in arr){
    console.log(index+" -> " + arr[index])
}


//  for of loop string

var stri = "Wolf!"

for(var char of stri){
    console.log(char)
}


// Trying for in
for (var char in stri){
    console.log(char+" -> "+stri[char])
}