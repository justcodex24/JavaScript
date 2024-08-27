//? Constrol flow means that which part of the code should be run according to the logic we provide..

const isUerloggedIn = true;

if (isUerloggedIn) {
  console.log(`User logged in succesfully😁`);
}

//? Building a logic to see balance of a person and give the feedback to the user

const balance = 500;

if (balance < 500) {
  console.log(`You balance is less than $500`);
} else if (balance > 500) {
  console.log(`Your balance is greater than $500`);
} else {
  console.log(`You have $500 in your bank account.`);
}


//? ***************  Switch case ******************************//

//? Futher we will learn in project that we are going to biuld further