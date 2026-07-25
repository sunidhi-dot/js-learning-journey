const name = "taniya"
const repoCount = 2

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sunidhi-hc-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
 console.log(gameName.charAt(5));
 console.log(gameName.indexOf('s'));

 const newString = gameName.substring(0,4);
 console.log(newString);

 const anotherString = gameName.slice(-8,4);
 console.log(anotherString);

 const newStringOne = "    sunidhi   "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https:sunidhi.com/sunidhi%07chauhan"

console.log( url.replace('%07','-'))

console.log (url.includes('sunidhi'))
console.log (url.includes('taniya'))

console.log(gameName.split('-'));