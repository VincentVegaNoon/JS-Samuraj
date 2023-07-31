// function Car() {
//   this.name = "maluch";
// }
// const maluch = new Car("maluch");
// const polonez = new Car("polonez");
// //1 nowy pusty obiekt
// //2 nastepuje wizanie this z utworzonym obiektem
// //3 powstaje wslasciwosc __proto__
// //4. Wywolanie funkcji i przypisanie do zmiennej

// maluch.name = "zabytek";

// console.log(maluch);

//Prototyp
const Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.children = [];
  //   this.addChildren = function (name) {
  //     this.children.push(name);
  //   };
};
Person.prototype.addChildren = function (name) {
  this.children.push(name);
};

Person.prototype.gender = "female";

const arek = new Person("arek", 20);
const monika = new Person("monika", 30);

monika.addChildren("basia");

function Player() {}

class User {}

Player.prototype.age = 25;
const janek = new Player();
const marta = new User();

function Citizen(country, citizenship) {
  this.country = country;
  this.citizenship = citizenship;
  //   this.chageCitizenship = function (citizenship) {
  //     this.citizenship = citizenship;
  //     console.log(
  //       `Zmiana za pomocą metod w instancji na obywatelstwo ${this.citizenship}`
  //     );
  //   };
}
Citizen.prototype.chageCitizenship = chageCitizenship = function (citizenship) {
  this.citizenship = citizenship;
  console.log(
    `Zmiana za pomocą metod w instancji na obywatelstwo ${this.citizenship}`
  );
};
const zenek = new Citizen("Polska", "polskie");
const marysia = new Citizen("Francja", "francuskie");
