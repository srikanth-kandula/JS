/**rest parameter and spread operator */
console.clear();

/** Rest parameter */
function addNumbers(a, ...numbers) { // this function accepts any number of arguments which are more than 1
  let sum = a;
  for (let num of numbers) {
    sum += num;
  }

  return sum;
}

console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4));

/**Spread operator */

function multiplyNumbers(a,b,c) {
  return a*b*c;
}

var numbersArray = [1,2,3,4,5,6];
console.log(multiplyNumbers(numbersArray));//will throw an error saying NaN
console.log(multiplyNumbers(...numbersArray));//spreads the array as 1,2,3,4,5,6 and only first three numbers are considered by multiplyNumbers function

let person1 = {name: 'Ratna', weight: 60};
let newPerson = {...person1}; //spreads and CLONES person i.e. a reference of person ISN'T given to newPerson, rather a new copy is created.
newPerson.weight = 70;
console.log(person1);// weight is 60
console.log(newPerson);//weight is 70

let name1 = 'sri';
let newName = { ...name1 };

console.log(name1);
console.log(newName[0]); //logs {0: 's', 1: 'r', 2: 'i'} 