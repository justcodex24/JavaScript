// //? Discussion on filter

// const myCustomArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //* Filtering the vlaue which is greater than 5
// const filteredValue = myCustomArr.filter((num) => {
//   return num > 5;
// });

// // console.log(filteredValue)

// //? implementing the same scenario using forEach loop

// const newArr = [];

// myCustomArr.forEach((num) => {
//   if (num > 5) {
//     newArr.push(num);
//   }
// });
// console.log(newArr);

// //? Working with the map

// const myMapArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const mapOutput = myMapArr.map((num) => {
//   return num * 10;
// });

// console.log(mapOutput);

// //* Lets learn about the concept of chaining usign map and filter

const _myMapArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const chainingArr = _myMapArr
  .map((num) => num * 10)
  .map((num) => num * 10)
  .filter((num) => num >= 500);

console.log(chainingArr);

//? Working with reduce

const arr = [1, 2, 3, 4, 5];
const totalVal = arr.reduce((acc, currVal) => {
  return acc + currVal;
}, 0);

console.log(totalVal);


//? Applying the reduce method on a object


const myAppUser = [
	{
		name:"x",
		amount: 1000,
	},
	{
		name:"y",
		amount: 2000,
	},
	{
		name:"z",
		amount: 3000,
	},
	{
		name:"b",
		amount: 4000,
	},
]

const finalAmount = myAppUser.reduce((totalAmount, personalAmount) => (totalAmount + personalAmount.amount),0)

console.log(finalAmount)