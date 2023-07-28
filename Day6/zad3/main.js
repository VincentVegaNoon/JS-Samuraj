const names = [];

const addName = (e) => {
e.preventDefault()
const input = document.querySelector('input');
const newName = input.value
if (newName.length > 0) {
    for (const name of names) {
        if (name === newName) {
            return
        }
    }
    names.push(newName)
document.querySelector('div').textContent = names.join(',')
} else {
    console.log('za krotkie')
}

console.log(names)
}

document.querySelector('button').addEventListener('click', addName)