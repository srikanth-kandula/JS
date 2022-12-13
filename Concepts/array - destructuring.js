/** Array destructuring */
console.clear();

let numArray = [1,2,3];
/** Equivalent to const a = numArray[0], b = numArray[1], c = numArray[2] */
const [a,b,c,d] = numArray;
console.log(a);
console.log(b);
console.log(c);
console.log(d); //undefined

const [f,g] = numArray;// f = 1; g = 2; value 3 isn't assigned
const [m, , n] = numArray; // m=1, n=3; value 2 isn't assigned
console.log(f);
console.log(g);
console.log(m);
console.log(n);

let a1, a2;
[a1, a2] = numArray;
console.log(a1);
console.log(a2);

//rest of the values
const [b1, ...rest] = numArray;
console.log(b1);
console.log(rest);// [2,3]

//default values
let c1, c2;
[c1=2, c2 = 4] = [10]; // c1=10, c2 = 4

//swap variables
let first = 1, second = 2;
console.log(`Before swapping first is ${first}, second is ${second}`);
[first, second] = [second, first]; //there is no need to use a third variable with swapping
console.log(`After swapping first is ${first}, second is ${second}`);

function someFunc() {
  return [10, 20, 30];
}
let [d1, , d2] = someFunc(); //d1=10, d2=30; value 20 isn't assigned