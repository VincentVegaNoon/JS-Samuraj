
// const add = () => {
//     let number = 0;
//     number++;
//     document.body.textContent = `aktualny stan licznika to ${number}`;
// }

const add = (start = 0) => {
    let number = start
    return () => {
        number++
        document.body.textContent = `aktualny stan licznika to ${number}`
    }
}
const counter = add(0)
document.addEventListener('click', counter)