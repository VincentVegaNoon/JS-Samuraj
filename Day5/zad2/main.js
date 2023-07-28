const input = document.querySelector('input');
const passwords = ['jedEN', 'DwA']
const messages = ['super', 'dziala']

const showMessage = (e) => {
    document.querySelector('div').textContent = ''
    const text = e.target.value
    passwords.forEach((password, index)=> {
        if(password.toLowerCase() === text.toLowerCase()) {
            document.querySelector('div').textContent = messages[index]
            e.target.value = ''
        }
    })
}
input.addEventListener('input', showMessage)

