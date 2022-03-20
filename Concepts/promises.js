/** Promises */

console.clear();

let myPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject();
  }, 3000);
});

resolveA = function () {
  console.log("resolveA is invoked");
}

resolveB = function () {
  console.log("resolveB is invoked");
}

resolveC = function () {
  console.log("resolveC is invoked");
}

rejectA = function () {
  console.log("rejectA is invoked");
}

rejectB = function () {
  console.log("rejectB is invoked");
}

rejectC = function () {
  console.log("rejectC is invoked");
}


myPromise
  .then(resolveA, rejectA)
  .then(resolveB, rejectB)
  .then(resolveC, rejectC)
  .catch(() => { console.log("catched the error") });
/**All three resolve callback methods will be called in the same order if myPromise is resolved.
 * All three rejected callback methods will be called in the same order, but not callback defined in catch if myPromise is rejected.
 * If there are no rejected callback methods defined, upon rejection of myPromise, callback method in catch will be invoked.
 */