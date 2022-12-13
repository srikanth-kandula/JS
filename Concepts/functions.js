/**explains factory functions, constructor functions and importance of new keyword */
function factoryFunction(name, age) {
  var person = {};

  person.name = name;
  person.age = age;

  return person; // notice that a custom object is created and is being returned
}

function ConstructorFunction(name, age) {
  this.name = name;
  this.age = age; // notice that there is no return statement and no custom object is created
}

var rama = factoryFunction('rama', 26);
var rama1 = new factoryFunction('rama', 26);
//both the statements above give the same output

var krishna = new ConstructorFunction('krishna', 30); // creates a new object
var krishna1 = ConstructorFunction('krishna1', 31)// this will create name and age properties on window object and assign values to them!!!