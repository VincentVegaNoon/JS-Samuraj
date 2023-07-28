const spnText = document.querySelector('.text');
const mimic = document.querySelector('.mimic')
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda in nisi ab laborum alias temporibus culpa velit sunt pariatur, repellendus atque unde facilis ex eligendi voluptatem soluta est error.'

let number = 0
const time = 50

const addLetter = () => {
    spnText.textContent += txt[number]
    number++
    if(number == txt.length) clearInterval(indexTyping);
}
const mimicToggle = () => {
    mimic.classList.toggle('hide')
}

setInterval(mimicToggle,400)
const indexTyping = setInterval(addLetter, time);