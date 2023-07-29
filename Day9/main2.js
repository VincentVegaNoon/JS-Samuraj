const slideList = [{
    img: 'images/img1.jpg',
    text: 'Pierwszy tekst'
},
{
    img: 'images/img2.jpg',
    text: 'Drugi tekst'
},{
    img: 'images/img3.jpg',
    text: 'Trzeci tekst'
}];

const image = document.querySelector('img.slider')
const h1 = document.querySelector('h1.slider')
const dots = [...document.querySelectorAll('.dots span')]

// Interfejs
const time = 3000
let active = 0
//Implementacja
const changeDot = () => {
    dots.forEach(elem => elem.classList.remove('active'))
    dots[active].classList.add('active')
}

const changeSlide = () => {
    active++
    if (active === slideList.length) {
        active = 0
    }
    console.log(active)
    image.src = slideList[active].img
    h1.textContent = slideList[active].text
    changeDot()
}
const keyChangeSlide = (e) => {
if (e.keyCode ===39){
    clearInterval(myInterval)
    changeSlide()
    myInterval = setInterval(changeSlide, time)
} else if((e.keyCode ===37)) {
    if (active === 0) {
        active = 1
    } else {
        active -= 2
    }
    clearInterval(myInterval)
    changeSlide()
    myInterval = setInterval(changeSlide, time)
}
}
window.addEventListener('keydown',keyChangeSlide)
let myInterval = setInterval(changeSlide, time)