let size = 10
let orderElement = 1

const init = () => {
const btn = document.createElement('button')
const btnClear = document.createElement('button')
document.body.appendChild(btn)
document.body.appendChild(btnClear)
btnClear.textContent = 'Wyczysc liste'
const ulList = document.createElement('ul')
document.body.appendChild(ulList)
btn.textContent = 'Dodaj 10 elementow listy'
btn.addEventListener('click', createLiElements)
btnClear.addEventListener('click', cleanList)

}


const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    document.querySelector('ul').appendChild(li)
    li.textContent = `Element nr ${orderElement}`
    li.style.fontSize = `${size}px`
    orderElement++
    size++
    }
}
const cleanList = () => {
    document.querySelector('ul').textContent = ""
    size = 10
    orderElement = 1
}
init()