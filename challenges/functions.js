// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (param1, param2, cb) {
  return cb(param1, param2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
//Function 1
function add(num1, num2) {
  //function add, will add two numbers (num1, num2) and passes the result to the callback
  return num1 + num2;
}

let product = consume(9, 3, add);
console.log(product);

//Function 2
function multiply(num1, num2) {
  //function multiply will multiply two numbers(num1, num2) and passes the result to the callback
  return num1 * num2;
}

let product2 = consume(9, 3, multiply);
console.log(product2);

//Function 3

function greeting(firstName, lastName) {
  //greeting will pass a string to the callback
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}

let introduction = consume("Ray", "Aguilar", greeting);
console.log(introduction);

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedFunction can reach out of it's function scope and grab the
// variable 'internal'.   If you reversed the roles, myFunction would not be able to reach into the nested function and grab the variables of nestedFunction. 


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