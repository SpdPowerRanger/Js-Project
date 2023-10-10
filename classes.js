// in ES6 they added classes.

class People{
    constructor(_name,_age){ // this is a constructor function.
        this.name = _name,
        this.age = _age
    }


    welcome(){
        console.log(`Hello and Welcome ${this.name}.`)
    }
}


let person1 = new People("Wolf",455)

console.log(person1)

person1.welcome()