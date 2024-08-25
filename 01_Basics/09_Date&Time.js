// //? Date in Javascript

// //? Declaration of Date 

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());


// //?Another way to declare Date

// let myCreatedDate = new Date(2024,0,15)
// console.log(myCreatedDate.toDateString())

// let myDate_02 = new Date("2024-01-15")
// console.log(myDate_02.toLocaleString())


//? An important method of Date

let myDate_03 = Date.now()
console.log(myDate_03)

let myDate_04 = Math.round(Date.now()/1000) // gives value in second


//?Some method with Date

let myDate_05 = new Date()
console.log(myDate_05.getMonth() + 1)
console.log(myDate_05.getDate())

//? Narrow down the Date function

 const special_weekday = myDate_05.toLocaleString('default',{
    weekday : "long"
})

console.log(special_weekday);




