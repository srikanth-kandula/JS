/** Protype, prototype chaining are explained here */

/** A person object */

var person = {
  name: 'srikanth',
  age: 25
};

person.eat = function () { console.log(`${this.name} is eating`) };
person.sleep = function () { console.log(`${this.name} is sleeping`) };
person.walk = function () { console.log(`${this.name} is walking`) };

/**if we have to create multiple objects of type person, it can be done as below */

function person(name, age) {
  var newPerson = {};

  newPerson.name = name;
  newPerson.age = age;
  newPerson.eat = function () { console.log(`${this.name} is eating`) };
  newPerson.sleep = function () { console.log(`${this.name} is sleeping`) };
  newPerson.walk = function () { console.log(`${this.name} is walking`) };

  return newPerson;
}

/** The above function creates eat,sleep and walk methods for each object created using this method and hence eats up the memory.
 * A better way to do is with the prototype.
 */

function personUsingPrototype(name, age) {
  this.name = name;
  this.age = age;
}

personUsingPrototype.prototype.eat = function () { console.log(`${this.name} is eating`) };
personUsingPrototype.prototype.walk = function () { console.log(`${this.name} is walking`) };
personUsingPrototype.prototype.sleep = function () { console.log(`${this.name} is sleeping`) };
/**Now, only one set of eat,walk and sleep methods are created for any number of objects created using personUsingPrototype method
 * this has two advantages
 *  1) Saves memory
 *  2) When a new method needs to be added, no need to modify all objects to access it. It is enough to define it on prototype
 */

var shiva = new personUsingPrototype('shiva', 100);
var parvathi = new personUsingPrototype('parvathi', 90);