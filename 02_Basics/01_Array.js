//? Array in Javascript

//* Declation of an array

let myArr_01 = [10,20,30,40,50,60]  // this is a number array

let myArr_02 = ["X","Y","Z"] // this is a string array


//* Declaration of an array using new object 

let myArr_03 = new Array (11,22,33,44)
console.log(myArr_03);
console.log(myArr_03[1]); // Accessing the value of the array

//? Some important method of the array 

let myArr_04 = [0,1,2,3,4,5,6,7]
myArr_04.push(8)  // add value to the last of the array
myArr_04.pop()  // remove the last element of the array
myArr_04.unshift(9) // add value at the begining of the array
myArr_04.shift()  // remove the first element of the array
myArr_04.includes(5) // perform inquery is the given value is in array or not
myArr_04.indexOf(5) // give the index number of the given value
const newStrArr = myArr_04.join() // convert the array into string and bind them all 
console.log(myArr_04);
console.log(newStrArr)
 

//? Discussion on slice and splice 


let myArr_05 = [10,20,30,40,50,60,70]

const NewArr = myArr_05.slice(1,3)
console.log(NewArr)

const NewArr_02 = myArr_05.splice(1,3)
console.log(NewArr_02)

//! Splice change to the original array 