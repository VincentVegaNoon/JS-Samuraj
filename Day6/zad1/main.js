const btn = document.querySelector('button');
// const div = document.querySelector('div');
const names = ['Jagienka', 'Dobrawa', 'Daria', 'Asia', 'Kira', 'Marysia', 'Anastazja']
const prefixs = ['Wydaje im sie', 'Mam wrazenie', 'Sczerze uwazam', 'Na 100% twierdze', 'Jestem pewien']
const nameGenerator = () => {
    let a = names[Math.floor(Math.random() * (names.length -1))]
    let b = prefixs[Math.floor(Math.random() * (prefixs.length -1))]
    document.querySelector('div').textContent = `${b} że najlepsze bedzie imie ${a}`
}

btn.addEventListener('click', nameGenerator)