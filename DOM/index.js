// const title = document.querySelector("#main-heading")

// const container = document.querySelector('.container')



// const ul = document.querySelector('ul')

// const li = document.createElement('li') // createElement used to create a new list element



// ul.append(li) // appended a custom list element in the ul element that already exists

// li.innerText = 'Appended - No country for old men.'  // innerText used to select/modify string content within an element.

// li.innerText = 'changed content' // changed content with innerText again.

// li.innerHTML = 'changed content with innerHTML' 



// // Modifying Attributes and Classes.

// //li.setAttribute('id','last-listItem') // set attribute id 

// //const liTextStyle = document.querySelector('#last-listItem') // selected li id  

// //liTextStyle.style.background = 'Cyan'

// //li.style.background = 'Yellow'

// li.removeAttribute('id'); // removed attribute id

// //liTextStyle.style.background = 'Red'

// li.classList.add('list-items')

// console.log(li.classList.contains('list-items'))

// li.classList.remove('list-items')


// //remove
// li.remove()


const ul = document.querySelector('ul')

console.log(ul.parentNode.parentNode)
console.log(ul.parentElement)

const html = document.documentElement

console.log(html.parentNode)
console.log(html.parentElement)

console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)
