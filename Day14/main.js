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

// łancuch prototypow
// arr__proto__;
// arr__proto__.__proto__;
// arr.age = 20;
//proto1.age = 20
// Object.prototype.age = 20;

// arr instanceof Array;
// arr instanceof Object;
// arr instanceof Citizen;

// zenek instanceof Citizen;

("use strict");
// this obiekt globalnego
const fn = function () {
  //this.a = 5;
  console.log(this.name);
};
const obj = {
  name: "Adam",
  fn: fn,
};
fn();
obj.fn();

//
