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
    image.src = slideList[active].img
    h1.textContent = slideList[active].text
    changeDot()
    if (active === slideList.length - 1) {
     active = 0
    } else {
        active++
    }
}

setInterval(changeSlide, time)