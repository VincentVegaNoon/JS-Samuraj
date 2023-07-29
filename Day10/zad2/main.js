const user = (name = '', age = 0) => {
    let userName = name;
    let userAge = age

function showName () {
    console.log(`Czesc ${userName}, ${userAge >= 18 ? 'Mozesz kupic piwo ': 'Nie mozesz kupic piwa'}`)
}
return showName
}
const mieszko = user('Wladysław',45)
mieszko()