//Napsiz funkcje ktora zwaca sume wszystkich liczb zawartych w tablicy z wykorzystaniem metody map
const arr = [23, 3213, 5454, 232];
let sum = 0;
arr.map((elem) => (sum += elem));
console.log(sum);

// for (const elem of arr) {
//   (sum += elem);
//   console.log(sum)
// }
//2 Napisz funkcje ktora zwraca sume wartosci z przedzialu dwoch liczb wprowadzonych do funckji

const addScope = (a, b) => {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

console.log(addScope(4, 8));
//Napisz funkcje zwar
