//? for-in loop in Object

const myObj = {
	js : 'JavaScript',
	py : 'Python',
	cpp : 'C++',
	r : 'Rust',
	rb : 'Ruby'
}

for(const key in myObj){
	console.log(`${key} is stand for ${myObj[key]}`)
}

//? For-in Loop in Array

const programming = ['js','C++','Py','r','ru','swift']

for(const key in programming ){
	console.log(programming[key])
}


//? Working with forEach Loop 😊

const coding = ['A','B','C','D','E','F']

coding.forEach( (index) => {
	// console.log(index) //*Print the value of the array
})


//* Printing the value using function

function printIndex(item){
	console.log(item)
}

// coding.forEach(printIndex)

//* You can also access the value and the index as well as the whole array usiing forEach 

coding.forEach((item,index,arr) =>{
	console.log(item,index,arr)
})


//? Dealing with the object inside an array

const UserInfo = [
	{
		name : "xyz",
		email:"xyz@gmail.com"
	},
	{
		name : 'abc',
		email:'abc@gmail.com'
	},
	{
		name : 'qrs',
		email:'qrs@gmail.com'
	}
]


UserInfo.forEach((item) => {  //* print the name of each object
	console.log(item.name)
})

UserInfo.forEach((item) => { //*print the email of each object
     console.log(item.email)
})

