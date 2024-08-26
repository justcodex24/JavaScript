// //? In Node Enviroment , the current context is an empty object.  

// //? But in browser the context is window object.

// //? To access the current context we follow this syntax

// console.log(this)

// //! This keyword doesnot work inside the function  

// //? Declaring a arrow function

// const arrowFunc = () => {
// 	console.log(`This is a arrow function`)
// }

// //? Give an example of implicit return using arrow function

// const implicit = (num01,num02) => (num01 + num02)
// console.log(implicit())

// //? Special case of object in implicit return 

// const implicitObj = () => ({username : " Codex"})
// console.log(implicitObj())


// //? Discussion on IIFE(Immediately Invoked Function Expression)

// //? Key advantage of IIFE  is : 1 . Restrain our function polluting from global scope  2.Immediate execution 

// //? Declation of IIFE

(function giveDBConnectMsg(){
	console.log(`Database Connect Sucessfully`)
})();

//? Declation of IIFE using Arrow function  

((name)=>{
	console.log(`Another way to declare IIFE and this function is created by ${name}`)
})("Codex")


