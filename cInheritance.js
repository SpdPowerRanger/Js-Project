class Person{
    constructor(_name,_age){
        this.name = _name,
        this.age = _age
    }

    hello(){
        console.log(`Hello ${this.name}! You are ${this.age} years old.`)
    }
}

class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age),
        this.classStrength = _classStrength
    }
}

class Student extends Person{
    constructor(_name,_age,_cgpa){
        super(_name,_age),
        this.cgpa = _cgpa
    }
}


let teacher1 = new Teacher("Turtle",89,10)
let student1 = new Student("Fox",15,9.0)

console.log(teacher1)
teacher1.hello()


console.log(student1)
student1.hello()

