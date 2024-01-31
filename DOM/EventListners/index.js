

const btn1 = document.querySelector('.btn-1')
const btn3 = document.querySelector('.btn-3')

const box1 = document.querySelector('.box1')
const box3 = document.querySelector('.box3')

function alertBtn(){
    alert("Alert from Js File.")
}

btn1.addEventListener("click",()=>{
    alert('First button alert.')
    return(
        box1.style.background = 'red'
    )
})

btn3.addEventListener("mouseover",()=>{
    return(
            box3.style.background = 'yellow',
            box3.style.borderColor = 'black'
    )
}) 


const buttonTwo = document.querySelector('btn-2')

buttonTwo.addEventListener("click", alertBtn)