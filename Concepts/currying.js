/**This file demonstrates Currying */

(function () {

  console.clear();

  function AddNumbers(a, b, c) {
    return a + b + c;
  }

  function Addwith2(b, c) {
    return 2 + b + c;
  }

  function Addwith3(b, c) {
    return 3 + b + c;
  }

  function currying(func) {
    return function (a) {
      return function(b) {
        return function(c) {
          return func(a,b,c); // params a,b are still available because of closure
        }
      }
    }
  }



  var curryAddNumbers = currying(AddNumbers);
  var curryAddwith2 = curryAddNumbers(2);
  var curryAddwith3 = curryAddNumbers(3);

  console.log(`AddNumbers(2, 7, 8): ${AddNumbers(2, 7, 8)} Addwith2(7, 8): ${Addwith2(7, 8)} curryAddwith2(7)(8): ${curryAddwith2(7)(8)} curryAddNumbers(2)(7)(8): ${curryAddNumbers(2)(7)(8)} `)
  /** a function of 3 arguments is converted to 3 functions each with one argument */

})();

function sum(a, b, c) {
  return a + b + c;
}

function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

sum(1, 2, 3);
currySum(1)(2)(3)

console.log(sum(1, 2, 3));

console.log(currySum(1)(2)(3));