const img = document.querySelectorAll('img')
const btn = document.querySelector('.start')

let gamesCount = 0
let winCount = 0
let losesCount = 0
let drawCount = 0


const playerChoice = (e) => {
    img.forEach(elem => elem.classList.remove('active'))
    e.target.classList.toggle('active')
}
const rollResult =() => {
   let playerActiveChoice = document.querySelector('.active')
   let aiChoice = img[Math.floor(Math.random() * img.length)]
    startGame(playerActiveChoice, aiChoice)
    choicesShow(playerActiveChoice, aiChoice)
}

const startGame = (playerActiveChoice, aiChoice) => { 
    if (playerActiveChoice) {
        gamesNumber()
        if (aiChoice.dataset.option === playerActiveChoice.dataset.option) {
            return drawGame()
        } else if (playerActiveChoice.dataset.option === 'kamień' && aiChoice.dataset.option === 'papier') {
            return lostGame()
        } else if (playerActiveChoice.dataset.option === 'papier' && aiChoice.dataset.option === 'nożyczki') {
            return lostGame()
        }else if (playerActiveChoice.dataset.option === 'nożyczki' && aiChoice.dataset.option === 'kamień') {
            return lostGame()
        } else {
            return winGame()
        }
    } else {
        alert('Muszisz wybrac')
    }
}
const choicesShow = (playerActiveChoice, aiChoice) => {
    document.getElementsByTagName('span')[0].textContent = playerActiveChoice.dataset.option
    document.getElementsByTagName('span')[1].textContent = aiChoice.dataset.option
}
const gamesNumber = () => {
    gamesCount++
    document.querySelector('.numbers span').textContent = gamesCount
}
const winGame = () => {
    winCount++
    document.querySelector('.wins span').textContent = winCount
    document.getElementsByTagName('span')[2].textContent = 'TY'
    endGame()

}
const lostGame = () => {
        losesCount++
        document.querySelector('.losses span').textContent = losesCount
        document.getElementsByTagName('span')[2].textContent = 'Komputer'
        endGame()
}
const drawGame = () => {
    drawCount++
    document.querySelector('.draws span').textContent = drawCount
    document.getElementsByTagName('span')[2].textContent = 'Remis'
    endGame()

}
const endGame = () => {
    img.forEach(elem => elem.classList.remove('active'))
}

btn.addEventListener('click', rollResult)
img.forEach(elem => elem.addEventListener('click', playerChoice))