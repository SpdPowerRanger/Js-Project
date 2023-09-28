var obj = {key1 : "Red", key2 : "White", key3 : "Blue"}


console.log("Values of keys:")
for(var key in obj){
    console.log(obj[key])
}


console.log("keys only:")
for(var key in obj){
    console.log(key)
}
