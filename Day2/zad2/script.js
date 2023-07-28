let size = 1
let grow = true

const square = document.createElement('div');
document.body.appendChild(square);
document.body.style.height = '10000px';
square.style.width = '100%';
square.style.position = 'fixed';
square.style.top = '0';
square.style.left = '0';
square.style.backgroundColor = 'green';
square.style.height = size + 'px';


const changeHeight = function() {
    if (size >= innerHeight/2) {
        grow = !grow
        square.style.backgroundColor = 'red';
    } else if (size <= 0) {
        grow = !grow
        square.style.backgroundColor = 'green';
    }
    if (grow) {
        size += 5
    } else {
        size -= 5
    }
    square.style.height = size + 'px';
}

window.addEventListener('scroll', changeHeight)