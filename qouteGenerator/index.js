
const quote = document.querySelector('.quote')
const quoteBtn = document.querySelector('#newQuote')
const quoter = document.querySelector('.quoter')

 const quotes = [
    {
        quote:`'You must be the change you wish to see in the world.'`,
        person:`-Mahatma Gandhi`
    },
    {
        quote:`'Spread love everywhere you go. Let no one ever come to you without leaving happier.'`,
        person:`-Mother Teresa`
    },
    {
        quote:`'The only thing we have to fear is fear itself.'`,
        person:`-Franklin D. Roosevelt`
    },
    {
        quote:`'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'`,
        person:`-Martin Luther King Jr.`
    },
    {
        quote:`'Do one thing every day that scares you.'`,
        person:`-Eleanor Roosevelt`
    },
    {
        quote:`"If life were predictable it would cease to be life and be without flavor."`,
        person:`-Eleanor Roosevelt`
    },
    {
        quote:` "In the end, it's not the years in your life that count. It's the life in your years."`,
        person:`-Abraham Lincoln`
    },
    {
        quote:` "Life is a succession of lessons which must be lived to be understood."`,
        person:`-Ralph Waldo Emerson`
    },
    {
        quote:` "You will face many defeats in life, but never let yourself be defeated."`,
        person:`-Maya Angelou`
    },
]

quoteBtn.addEventListener('click',()=>{
    
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    quoter.innerText = quotes[random].person
})






