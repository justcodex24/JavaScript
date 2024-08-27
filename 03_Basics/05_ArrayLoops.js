//? Discussion on for-of loop

const myArr_01 = [0,1,2,3,4,5,6,7,8,9,10]

for (const index of myArr_01){
	console.log(index)
}

//* Implemetation on String

const helloWorld = "Hello World!"

for(const char of helloWorld){
	console.log(`Each char is ${char}`)
}

//? Discussion on Map

const map = new Map() //* Map is used for generating unique key value pairs

map.set('A' ,"Apple")
map.set('B' ,"Ball")
map.set('C' ,"Cat")
map.set('D' ,"Doctor")

console.log(map)

//* Looping through map
//!For-of loop doesn't work on the object

for(const [key,value] of map){
	console.log(key , ":" , value)
}