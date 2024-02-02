

document.querySelector('#sports').addEventListener('click',(e)=>{
    console.log(e.target.getAttribute('id') + ' is clicked')

    if(e.target.matches('li')){
        e.target.style.backgroundColor = 'lightgrey'
    }
})

const sports = document.querySelector('#sports')

const newSport = document.createElement('li')


newSport.innerText = 'Boxing'

newSport.setAttribute('id','boxing')

sports.appendChild(newSport)

