const btn = document.querySelector('button')
const list = document.querySelectorAll('li')
const li = document.querySelector('li')

let size = 16

btn.addEventListener('click', function() {
   if (list[0].style.display == '') {
    for (let i = 0; i <list.length; i++) {
        list[i].style.display = 'block'
    } 
   } else {
    size += 5
    for (let i = 0; i <list.length; i++) {
        list[i].style.fontSize = size + 'px'
    } 
    console.log(size)
   }
})