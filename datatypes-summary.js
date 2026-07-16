// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non-Primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "sunidhi",
    age: 20,
}

const myFunction =function (){
    console.log("hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#se-11.4.3

// Number => number
// String => string
// Boolean => boolean
// Null => object
// Undefined => undefined
// Symbol => symbol
// BigInt => bigint


// // Array => Object
// Object => Object
// Function => Function 




//********************************************

// Stack (primitive) and Heap (reference)

let myYoutubename = "@taniyachauhan171"

let anotherName = myYoutubename
anotherName = "@DivyaThakur-123-ht"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}


let userTwo = userOne

userTwo.email = "sunidhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);