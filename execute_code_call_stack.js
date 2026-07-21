// JAVASCRIPT EXECUTION CONTEXT

// Execution means running JavaScript code
 
// Global Execution context (GEC) => full program run under GEC
// browser global object => window
// node.js global object => global

// example:

let name ="sunidhi";
 console.log(name);


// Function Execution Context (FEC) => A new execution context created whenever a function is call a greet()

// example:

function one () {
     console.log("Hello"); 
    }

    one()


// Javascript Creation phase 

// Memory Creation phase => Memory is allocated for variables and functions

// this => this refers to the current execution context
// Browser: this = window (global scope me) 

// Example:

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// creation phase
// execution phase

// *************** CREATION PHASE ************

// JavaScript code ko ek baar scan karta hai aur memory banata hai

// val1 => undefined
// val2 => undefined
// addNum => function
// result1 => undefined
// result2 => undefined

// ******* Execution Phase => JavaScript executes the code line by line

// val1 = 10;
// val2 = 5;

// *********** FIRST FUNCTION CALL ***********

// result1 = addNum(val1, val2)

// val1 = 10
// val2 = 5
 
// addNum(10, 5)
// new variable environment + exection thread

// addNum → function addNum(num1, num2) {
           // let total = num1 + num2;
           // return total;
         // }

// Memory phase

// num1 => undefined
// num2 => undefined
// total => undefined

// Execution phase

// num1 => 10
// num2 => 5
// total => 15

// return total => 15

// result1 => 15


// *************** SECOND FUNCTION CALL ***************

// result2 = addNum(10, 2)

// New Variable Environment + Execution Thread


// Memory phase

// num1 => undefined
// num2 => undefined
// total => undefined


// Execution phase

// num1 => 10
// num2 => 2
// total => 12


// return total => 12

// result2 => 12

// Variable => A variable is a container used to store data

// ************** LAST IN, FIRST OUT [LIFO] ***************
 
function one(){
    console.log("one")
    two()
}

function two(){
    console.log("two")
    three()
}

function three(){
    console.log("three")
}

one()
two()
three() 

// one() → two() → three()   // In

// three() → two() → one()   // Out

// stack call => Call Stack is a mechanism that manages function execution in JavaScript