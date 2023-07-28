const btn = document.querySelector('button')
const body = document.querySelector('body')
const div = document.createElement("div");
let number = 1
const addElement = function() {
    const div = document.createElement('div')
    if (number%5 === 0) {
        div.classList.add('circle')
    }
    div.textContent = number
    document.getElementsByTagName('ul').appendChild(div)
    number++
}

btn.addEventListener('click', addElement)