
let red = 100
let green = 100
let blue = 100


document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
    if (e.keyCode === 38 && red <= 255) {
        red+=3
        green+=3
        blue+=3
    } else if (e.keyCode === 40 && red >= 0) {
        red-=3
        green-=3
        blue-=3
    }
    console.log(red)
    return document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
window.addEventListener('keydown', changeColor)