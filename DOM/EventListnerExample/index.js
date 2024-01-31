

const revealBtn = document.querySelector('.revealBtn')

const hiddenContent = document.querySelector('.hiddenContent')


function revealContent(){
    
    if(hiddenContent.classList.contains('revealBtn')){
        hiddenContent.classList.remove('revealBtn')
    }else{
        hiddenContent.classList.add('revealBtn')
    }
}

revealBtn.addEventListener('click',revealContent)