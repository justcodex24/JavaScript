//? Javascript Function

function Printname(){
	console.log(`You are wathching Code X`)
}

Printname()
Printname()
Printname()

//? Function to add two numbers

function addTwoNum(num01,num02){
	return num01 + num02;
}

console.log(addTwoNum(7,8))

//? adding all the value of the paramete of the function


function calculateTotalPrice(...num1){
	return num1
}

console.log(calculateTotalPrice(100,200,300,400,500)) // retrun an array of all the value given in the parameter

//? Ascessing object into the function

const myObj = {
	name : "xyz",
	id_no : 25
}

function handleObject(randomObj){
	console.log(`Username is ${randomObj.name} and pricce is ${randomObj.id_no}`)
}

handleObject(myObj)



//? What is expression ? Difference between function and expression?


//? Declatation of a function


console.log(addNum(10)) //* You can execute the function before the declaration 

function addNum(num){
	return num + 10;
}


//? Declaration of an expression



const addThree = function(num01,num02,num03){
	return num01 + num02 + num03
}

console.log(addThree(5,5,5))  //? cannot ascess before the expression declaration like function .