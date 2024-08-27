// //? For Loop

//  //? Printing the vlaue from 1 to 10 using for loop

//  for(let i = 0 ; i <= 10 ; i++){
// 	// console.log(i)
//  }

// //? Give a msg when the loop reach at 5

// for(let i = 0; i <= 10 ; i++){
// 	const num = i
// 	if(num == 5){
// 		console.log("You Reached at 5")
// 		continue;
// 	}
// 	console.log(num)
// }

// //? Loop inside a loop

// for (let i = 0; i <= 10; i++){
// 	console.log(`Outer Loop vlaue : ${i}`)
// 	for(let j = 0 ; j <= 10 ; j++){
// 		console.log(`Inner Loop : ${j} and Outer Loop : ${i}`)
// 		//? Table printing
// 		console.log(`${i} * ${j}  = ${i*j}`)
// 	}
// }

//? Printing the value of an array using loop

let arr = ["X", "Y", "Z", "A", "B", "C", "D"];

for (let i = 0; i < arr.length; i++) {
  const arrIndex = arr[i];
  console.log(arrIndex);
}

//? Giving Condition into the loop

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Loops reached at 5 .................... Now what!`);
    break;
  }
  console.log(`Value of i at this iteration ${i}`);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Loops reached at 5 . Now what!`);
    continue;
  }
  console.log(`Value of i at this iteration ${i}`);
}

//? Discussion on while loops

//* Declaration of an while loop

let index = 0;
while (index <= 10) {
  console.log(`Value of the index is ${index}`);
  index = index + 1;
}

//* printing the values of an array using while loop

let myArr = ["A", "B", "C", "D", "E", "F", "G", "H"];

let arrindex = 0;

while (arrindex < myArr.length) {
  console.log(myArr[arrindex]);
  arrindex++;
}

//? Discussion on do_while loop

//* Declaration of do-while loop

let score = 1;
do {
  console.log(`Score is : ${score}`);
  score++;
} while (score <= 10);
