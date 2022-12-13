console.clear();

function resovleAfter2Seconds() {
  return new Promise((myResolveCallback)=> {
    setTimeout( ()=> {
      myResolveCallback('Slow promise');
      console.log('Slow 2 seconds promise resolved');
    }, 2000 )
  });
}

function resolveAfter1second() {
  return new Promise((myResolve) => {
    setTimeout( ()=>{
      myResolve('Fast promise');
      console.log('fast 1 second promise is resolved');
    }, 1000 );
  });
}

async function myAsyncFunction1() {
  console.log('Inside async function - awaiting for completion of promise');
  let result = await resovleAfter2Seconds();
  console.log(result);
}

myAsyncFunction1();

/**Expected output for myAsyncFunction1()
 * 
 * Inside async function - awaiting for completion of promise
 * Now promise is resolved //after 3 seconds
 */

async function sequentialPromiseResolve () {
  console.log('**** Sequential promise resolve ****');

  // 1. Execution gets here almost instantly
  const slow = await resovleAfter2Seconds();
  console.log(`slow: ${slow}`); // 2. this runs 2 seconds after step 1.

  const fast = await resolveAfter1second();
  console.log(`fast: ${fast}`); // 3. this runs 3 seconds after step 1.
}

async function concurrentStart() {
  console.log("**** Concurrent Start ****");
  const slow = resovleAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1second(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}