// this inside console.log()
//console.log(this) // output : empty object.


// thid in a functon.

// function obj(){
//     console.log(this)
// }

//obj() // output : Global Object.


// this inside a func which is inside an object.
// let myObj = {

//     name: "Wolf",

//     age: 445,

//     func: function(){
//         console.log(this)
//     },

//     arrowFunc: ()=>{
//         console.log(this)
//     }
// }


// myObj.func() // output : myObj returned.

// myObj.arrowFunc() // output : empty object on arrow function.


// this inside a function inside another function which is inside an object.

 let myObj = {

     name: "Wolf",

     age: 445,

     func: function(){
         function func2(){
            console.log(this)
         }

         func2()
     },

     arrowFunc: ()=>{
         console.log(this)
     }
 }

 myObj.func() // output : Global Object.
