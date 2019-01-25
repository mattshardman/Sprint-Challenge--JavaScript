// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(a, b) {
  const result = a + b;
  console.log(result)
  return result;
}

function multiply(a, b) {
  const result = a * b;
  console.log(result);
  return result;
}

function greeting(first, last) {
  const result = `Hello ${first} ${last}, nice to meet you!`;
  console.log(result);
  return result;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedFunction()` can access the variable `internal`.

// Explanation: 
/*
  The function nestedFunction is able to access the variable 'internal' because nestedFunction is nested within myFunction. Due to lexical scoping, the function has access to all lexical scopes surrounding it and variables contained within those scopes i.e. the scope of myFunction and the global scope.

  When the nestedFunction is executed the JavaScript engine will first look for the variable 'internal' within its own (nestedFunction's) lexical scope and then move up the scope chain until it finds the variable (or reaches the global scope and still can't find the variable; in which 'ReferenceError: internal is not defined' will be returned').
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
