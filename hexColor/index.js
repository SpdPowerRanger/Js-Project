let btn = document.getElementById('btn')
let color = document.querySelector('color')

color.style.backgroundColor = 'red'
let colorArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
    
    console.log('clicked!')
    // btn.style.backgroundColor = 'green'
})

// function changeColor(){
//     // let randomVal = Math.floor(Math.random * colorArr.length)
//     // let newColor = '#'
//     // for (let i =0; i< 5; i++){
//     //     newColor += randomVal
//     // }
    
//     // let newBodyColor =  document.body.style.backgroundColor = newColor
//     // return newBodyColor 

//     document.body.style.backgroundColor = 'green'

// }
