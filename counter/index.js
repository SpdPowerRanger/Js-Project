// let addBtn = document.querySelector('.add')
let count = document.querySelector('.count')

let total = 0

let btns = document.querySelectorAll('.btn')

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList
        if(styles.contains('add')){
            total++
        }else if(styles.contains('minus')){
            total--
        }else{
            total = 0
        }
        total===0 ? count.style.color='black': total>0 ? count.style.color = 'green' : count.style.color = 'red' 
        count.textContent = total
    })
})



// addBtn.addEventListener('click',()=>{
    
//     total += 1
//     count.innerText = total
// })

// let minusBtn = document.querySelector(".minus")

// minusBtn.addEventListener('click',()=>{
//     total -= 1
//     count.innerText = total
// })

// let resetBtn = document.querySelector('.reset')

// resetBtn.addEventListener('click', ()=>{
//     total = 0
//     count.innerText = total
// })