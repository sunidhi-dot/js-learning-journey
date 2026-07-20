
function saymyName(){ 
console.log("S");
console.log("U");
console.log("N");
console.log("I");
console.log("D");
console.log("H");
console.log("I");
}

// saymyName()

// function addTwoNumbers(number1, number2){

     // console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    //  let result = number1 + number2
     // console.log("Sunidhi");
    // return result
    return number1 + number2
} 

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginMessage(username = "sam"){
    if(!username ){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginMessage("sunidhi"));
// console.log(loginMessage("sunidhi"));


function calculateCaetPrice(val1, val2, ...num1){
    return num1 
}


console.log(calculateCaetPrice(200, 400, 500, 2000));

const user = {
    username: "sunidhi",
    prices: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));