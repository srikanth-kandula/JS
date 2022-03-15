/** Globl, function, block scopes */

console.clear();

var globalVariable = 100; //global scope

function scope() { //function scope
  var varWithinFunction = 20;
  console.log("globalVariable within function: " + globalVariable);
  console.log("varWithinFunction within function: " + varWithinFunction);
}

scope();

console.log("varWithinFunction in global scope: " + varWithinFunction); // throws error
console.log("constWithinBlock in global scope: " + constWithinBlock); // throws error

console.log("variableWithinBlock in global scope: " + variableWithinBlock);

{
  let blockScopeVariable = 30; //block scope is applicable only for variables defined using let or const
  var variableWithinBlock = 50; // will have global scope
  const constWithinBlock = 69;
  console.log(`blockScopeVarialbe within block scope: ${blockScopeVariable}`);
  console.log(`constWithinBlock within block scope: ${constWithinBlock}`);
}

function someFunction () {
  console.log(`blockScopeVarialbe within another function: ${blockScopeVariable}`)
}

someFunction();

console.log(`blockScopeVarialbe within global scope: ${blockScopeVariable}`)

function demoFunction() {
  {
    let letVariableWithinBlockWithinFunc = 20;
    var varVariableWithinBlockWithinFunc = 58; // will have function scope
    console.log("letVariableWithinBlockWithinFunc block scope - " + letVariableWithinBlockWithinFunc);
    console.log("varVariableWithinBlockWithinFunc block scope - " + varVariableWithinBlockWithinFunc);
  }

  console.log("letVariableWithinBlockWithinFunc function scope - " + letVariableWithinBlockWithinFunc); //throws error
  console.log("varVariableWithinBlockWithinFunc function scope - " + varVariableWithinBlockWithinFunc);
}

demoFunction();


console.log("varVariableWithinBlockWithinFunc global scope - " + varVariableWithinBlockWithinFunc);//throws error