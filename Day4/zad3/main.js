const square = document.querySelector('div');
let divX = 150;
let divY = 50;
square.style.left = `${divX}px`;
square.style.top = `${divX}px`;

let drawActive = false

let insertDivX;
let insertDivY;

square.addEventListener('mousedown', (e) => {
    drawActive = !drawActive
    square.style.backgroundColor = 'gray';
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY)
})

square.addEventListener('mousemove', (e) => {
    if(drawActive) {

    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    square.style.left = `${divX}px`;
    square.style.top = `${divY}px`;
    }
})

square.addEventListener('mouseup', () => {
    drawActive = !drawActive
    square.style.backgroundColor = 'black';
})