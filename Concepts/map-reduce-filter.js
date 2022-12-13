let myArray = [
  { name: 'Shiva',age: 1 },
  { name: 'Krishna', age: 2 }
];

let onlyNamesArray = myArray.map((currentElement, index, array) => {return currentElement.name});
console.log(onlyNamesArray); // ['Shiva', 'Krishna']

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => { return accumulator + currentValue },
  initialValue
);

const sumWithoutInitial = array1.reduce( (accumulator, currentValue) => { return accumulator + currentValue } );

console.log(sumWithInitial); // expected output: 10
console.log(sumWithoutInitial); // expected output: 10