// Here, polymorphism is that same named methods in different classes can be defined differently and be called on different objects with 
// different outputs. 

class Animal{


    sound(){
        console.log(`Animals make different sounds.`)
    }
}

class Dog{


    sound(){
        console.log(`Dog Barks.`)
    }
}

class Cat{


    sound(){
        console.log(`Cat Meows.`)
    }
}

let animal1 = new Animal()

let tommy = new Dog()

let percy = new Cat()


animal1.sound()

tommy.sound()

percy.sound()