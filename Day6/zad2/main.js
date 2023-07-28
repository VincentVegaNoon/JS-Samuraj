const btn = document.querySelector('button')
const section = document.querySelector('section')

const generateCode = () => {
    let string = 'ABCDEFGHIJKLMNOPRTUWYXZ0123456789'
    let code = []
    for (let j = 0; j < 1000; j++) {
        for (let i = 0; i < 10; i++) {
            let a = string[Math.floor(Math.random() * (string.length - 1))]
            code.push(a)
        }
        const div = document.createElement('div')
        div.textContent = code.join('')
        section.appendChild(div)
        code = []
    }
}

btn.addEventListener('click', generateCode)