let score = 3232;
console.log(typeof score); // number

let score_02 = "3232"
console.log(typeof score_02) // string


//? coverting any string to number

let toNumber = Number(score_02)
console.log(typeof (toNumber));

//? An interesting case to convert a string to number

let new_num = "123xyz"

let tonumber_02 = Number(new_num)    // convert to number
console.log(typeof tonumber_02);    // number
console.log(tonumber_02);    //NaN


//? Working with null 

let Num_03 = null
console.log(typeof Num_03); // object
console.log(Num_03)   // null
let toNumber_03 = Number(Num_03)
console.log(toNumber_03); // 0

//? working with boolean

let Num_04  = true
console.log(typeof Num_04); // boolean
let toNumber_04 = Number(Num_04)
console.log(Num_04); // true
console.log(toNumber_04); // 1   //*In case of false it will be 0

//? Another way 

let Num_05 = 1;
let toBoolean = Boolean (Num_05)
console.log(toBoolean);  // true ///* In case of 0 it will be false


//? Working with string

let Num_06 = 24;
let toString = String(Num_06)
console.log(typeof toString)  // string



//************************************************************* */
//! Discussion on operation //


