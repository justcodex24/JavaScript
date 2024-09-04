//? A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// * Making Promises

const promiseOne = new Promise(function (resolve, reject) {
  //Here we do some task like db calls, function execution , network calls

  setTimeout(function () {
    console.log(`Function has been Called!`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log(`A promise has been executed!`);
});

//? Method 02 to create a promises

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async task is completed using method two promises!`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`The Promise has been resoleved using the method two!`);
});

//? Creating another promises using third method

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: " Hasan", email: "abuhasan323382@gmail.com" }); // resolve can take any kind of data type as a parameter and we usually give object to the parameter into the resolve
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//? Creating another promise using method Four

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "XYZ", email: "yourmail@gmail.com" });
    } else {
      reject(`Something Went wrong!`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(() => {
	console.log(`The Promises is either resolved or rejected!`)
  });


  ///?? Creating a promise using method five



const promiseFive = new Promise(function(resolve,reject){
	setTimeout(function(){
		let error = true
		if(!error){
			resolve({username : "Javascript", password : "xyz123"})
		}else{
			reject(`The promise five went wrong!`)
		}
	},1000)
});

async function consumeFive (){
	try{
		const response = await promiseFive
	console.log(response)
	} catch (error){
		console.log(error)
	}
}

consumeFive()



