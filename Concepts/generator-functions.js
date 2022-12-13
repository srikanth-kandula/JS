/** Generator functions */

console.clear();

function* someGeneratorFunction() {
  let name = 'today';
  yield name;
  yield 'tomorrow';

  name = 'someday';
  yield console.log(name);

  console.log('reached end of the function');
}

let generatorObject = someGeneratorFunction();
console.log(generatorObject.next()); //{value: 'today', done: false}
console.log(generatorObject.next());
console.log(generatorObject.next()); // {value: undefined, done: false}
console.log(generatorObject.next()); // {value: undefined, done: true}

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20

function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var loggen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
loggen.next('somestring'); // 0
loggen.next('pretzel');    // 1 pretzel
loggen.next('california'); // 2 california
loggen.next('mayonnaise'); // 3 mayonnaise

function* naturalNumbers() {
  let num = 1;
  while (true) {
    yield num;
    num = num + 1
  }
}
const numbers = naturalNumbers();
console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2