// singleton 
// Object.create

// boject literals

const mySys = Symbol("key1")


const JsUser = { 
    name: "Sunidhi",
    "full name": "Sunidhi Chauhan",
   [mySys]: "mykey1", 
    age: 19,
    location: "Dehradun",
    email: "taniya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySys);
// console.log(typeof JsUser.mySys);
// console.log(JsUser[mySys]);

JsUser.email = "taniya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "taniya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());