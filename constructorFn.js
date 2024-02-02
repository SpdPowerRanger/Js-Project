
// this is a constructor function.
function createCar (name,company,color){
    this.name = name,
    this.company = company,
    this.color = color

    this.drive = ()=>{  // method inside a constructor function.
        console.log(`I drive a ${this.color} ${this.name}. I love my ${this.name}.`) 
    }
}

let car1 = new createCar('Cresta',"Toyota","White")

console.log(car1)

car1.drive() // method call.