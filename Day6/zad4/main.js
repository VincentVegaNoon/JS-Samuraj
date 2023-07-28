//e.preventDefault()
const input = document.querySelector('input');

const possibilities = [] 
const addItem = (e) => {
    e.preventDefault()
    const newItem = input.value
    if(newItem.length > 0) {
        for (const possibility of possibilities) {
            if (possibility === newItem) {
                return
            }
        }
        possibilities.push(newItem)
        input.value = ''
    }
}

const showItems = () => {
    document.querySelector('h1').textContent = possibilities.join(', ')
}
const showAdvice = () => {
    document.querySelector('h1').textContent = possibilities[Math.floor(Math.random() * possibilities.length)]
}
const clearTable = (e) => {
    e.preventDefault()
    input.value = ''
    document.querySelector('h1').textContent = ''
    possibilities.splice(0, possibilities.length)
}

document.querySelector('.add').addEventListener('click', addItem)
document.querySelector('.showOptions').addEventListener('click', showItems)
document.querySelector('.showAdvive').addEventListener('click', showAdvice)
document.querySelector('.clean').addEventListener('click', clearTable)