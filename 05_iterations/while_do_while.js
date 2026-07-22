
let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ["flash", "batman", "superman"]

let arr = 0 
while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);

// ${variable} ko string ke andar use karna ho, to backticks ` ` use karte hain

let name = "Sunidhi";

console.log('Hello ${name}');  // Hello ${name}
console.log("Hello ${name}");  // Hello ${name}
console.log(`Hello ${name}`);  // Hello Sunidhi