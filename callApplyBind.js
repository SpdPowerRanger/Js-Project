person1 = {

    name : 'Steve Rogers',
    age : 102,

    aboutFunc : function(){
        console.log(`I am ${this.name}. And, I am ${this.age} years old.`)
    }
}


let aboutFunc = function(city,power){
    console.log(`I am ${this.name}. And, I am ${this.age} years old. I live in ${city} and I have ${power}.`)
}

person2 = {
    
    name : 'Tony Stark',
    age : 41,

}

//aboutFunc.call(person1)

//aboutFunc.call(person2)


aboutFunc.call(person1,'New York', "Superpower")

aboutFunc.call(person2,'Arizona',"an Iron Man Suit")

aboutFunc.apply(person1,['New York', "Superpower"]) // apply requires input within an array.

aboutFunc.apply(person2,['Arizona',"an Iron Man Suit"])
//person1.aboutFunc.call(person2)

//person1.aboutFunc()


