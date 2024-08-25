//? Declaration of string

const str_01 = "My name is "
const str_02 = "Hasan"
const age = 21;

// console.log(`${str_01}${str_02} and My age is ${age}`)

//? Another way to declare String

const description = new  String('This Codex Channel is Cool')

//? Some method of the string

// console.log(description.length);
// console.log(description.toUpperCase())
// console.log(description.charAt(0))
// console.log(description.indexOf('T'))

// const channelName = description.substring(5,10)
// console.log(channelName)

// const spaceString = "     Username         "
// console.log(spaceString)
// console.log(spaceString.trim())

const repalceString = "My name is Hasan"
console.log(repalceString.replace("Hasan","Korim"))

console.log(repalceString.includes("Hasan"))