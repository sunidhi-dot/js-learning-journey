// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 23)
// let myCreatedDate = new Date(2026, 0, 23, 5, 3)
// let myCreatedDate = new Date("2026-07-18")
let myCreatedDate  = new Date("07-18-2026")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

// `${newDate.getDate()} and the time `

newDate.toLocaleString('default', {
    weekday: "long"
}) 

 // ***************** Dates **********************

 // Date => object

 // let myDate = new Date();

 // console.log(myDate.toString()); = Sat Jul 18,2026 09:06:2026 GTM+0530 (India Standard Time)
 // console.log(myDate.toLocaleString()); = 18/07/2026, 9:09:50 am
 // console.log(myDate.toLocaleDateString()); = 18/7/2026
 // console.log(myDate.toLocaleTimeString()); 9:14:26 am
 // console.log(myDate.toDateString()); = Sat Jul 18 2026
 // console.log(myDate.toTimeString()) = 09:18:42 GMT+0530 (India Standard Time)
 // console.log(myDate.toISOString()); = 2026-07-18T03:57:21.572Z
 // console.log(myDate.toJSON()); = 2026-07-18T04:00:21.739Z