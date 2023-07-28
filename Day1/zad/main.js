const btn = document.querySelector('button')

let number = 1
btn.addEventListener('click', function() {
    const li = document.createElement('li')
    if(number%3 === 0) {
        li.style.fontSize = '36px'
    }
    li.textContent = number
    const list = document.querySelector('ul')
    list.appendChild(li)
    number += 2
})