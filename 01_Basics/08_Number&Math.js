//? Defining a number 

const number = 300;
console.log(number)


//? Defining a number using new keyword or Number literals

const balance = new Number(200)
console.log(balance);


//? Converting a number to string 

const num_01 = 123;
console.log(num_01.toString())

//? After converting a number to a string . All the method of string comes to the variable

console.log(num_01.toString().length);

//? Some number method

const num_02 = 23.979;
console.log(num_02.toPrecision(3));


const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"))

//? Go to browser and see others methods and property of the number.



///*********************** Math   **************** */

console.log(Math.abs(-7)) // Gives the absoulate value

console.log(Math.round(5.237))  // Give the precise value and cut out all the decimels


console.log(Math.ceil(7.6))
console.log(Math.floor(7.6))

console.log(Math.max(7,8,9,10,0,2))
console.log(Math.min(7,8,9,10,0,2))

console.log(Math.random())
console.log(Math.round((Math.random() * 10) + 1))

//? A speial usecase of the Math.random 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min) 