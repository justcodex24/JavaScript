//? Object in javascript

//* Creating a object using objet literals 

const secretKey = Symbol("MyKey...")

const myAppUser = {
    name : "Username",
    age : 21,
    email : 'username@gmail.com',
    isLoggedIn : false,
    location : "Dhaka",
    lastLoginDays : ["Saturday","Sunday"],
    "full name" : "Useranme XYZ...",
    [secretKey] : "MyKey..."
}
//* Accessing the value of  the user

console.log(myAppUser.age)
console.log(myAppUser['location'])
console.log(myAppUser['full name'])
console.log(myAppUser[secretKey])

//? Adding a function to the User 

myAppUser.greeting = function (){
    console.log(`Hello ${this.name}, Welcome to my App`)
}
myAppUser.greeting()















//* What is Singleton object ?

//* Declare a symbol and use it inside a object and print the symbol?