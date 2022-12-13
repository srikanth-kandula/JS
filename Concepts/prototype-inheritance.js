/**Prototypal inheritance in JavaScript */

console.clear();

function Hero(name, power) {
  this.name = name;
  this.power = power;
}

Hero.prototype.greet = function () {
  console.log(`${this.name} says hello fellas`)
};

function Warrior(name, power, weapon) {
  Hero.call(this, name, power); //code re-use
  this.weapon = weapon;
}

function Healer(name, power, spell) {
  Hero.call(this, name, power);
  this.spell = spell;
}

console.log(Hero.prototype); //it points to an object

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
//Object.setPrototypeOf(Healer.prototype, Hero.prototype);
var prototypeObject = Object.create(Hero.prototype);
Healer.prototype = prototypeObject;

let firstWarrior = new Warrior('Agni', 'fire', 'Burner');
let firstHealer = new Healer('Vayu', 'wind', 'Fan');

console.log(firstWarrior.prototype); //returns undefined as firstWarrior is an object
console.log(firstHealer.prototype); //returns undefined as firstHealer is an object

console.log(firstWarrior.__proto__);
console.log(firstHealer.__proto__);

firstWarrior.greet();