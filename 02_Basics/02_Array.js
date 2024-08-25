const array_01 = ['banana','apple','pineapple','strwbeery']

const array_02 = ['rose','waterlilly','marigold','orchid']

//? Merge the two above array

const allItems = array_01.concat(array_02)

 console.log(allItems)

//? Merging two array using spread operator

const anotherAllitems = [...array_01,...array_02]

console.log(anotherAllitems);

//? Merging a special array case 

const special_array = [1,2,3,4,5,[6,7,[8,9,10,[11,12],13,14]],15]
const merging_specialArr = special_array.flat(Infinity)
console.log(merging_specialArr)

//? Some array method

console.log(Array.isArray("Username")) //* check the given value of the is array or not

console.log(Array.from("Username")) //* convert any value to array

console.log(Array.from({name: " Username"})) // Give an empty array

// //? converting some element to an array

let num_01 = 10;
let num_02 = 20;
let num_03 = 30 ;

const scoreArr = Array.of(num_01,num_02,num_03)
console.log(scoreArr);
