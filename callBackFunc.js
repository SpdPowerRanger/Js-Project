
const firstName = (name)=>{
    return name
}

const lastName = (name)=>{
    return name
}

const nameCaller = (fName,lName)=>{
    return fName("White") +" "+lName("Wolf")
}

console.log(nameCaller(firstName,lastName))


const newNameCaller = (a,b) =>{
    return a + " " + b
}

const callName = newNameCaller(firstName("White"),lastName("Wolf!!!"))

console.log(callName)