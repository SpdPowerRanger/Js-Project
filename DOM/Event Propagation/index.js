

window.addEventListener('click',()=>{
    console.log('Window')
},true)
document.addEventListener('click',()=>{
    console.log('Document')
},true)
document.querySelector('.div1').addEventListener('click',()=>{
    console.log('Div1')
},true)
document.querySelector('.div2').addEventListener('click',()=>{
    console.log('Div2')
},true)
document.querySelector('.btn').addEventListener('click',(e)=>{
    console.log(e.target.innerText = 'clicked!')
},true)