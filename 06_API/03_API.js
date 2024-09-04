//? Getting data from URL

async function getAllUser() {
  try {
    const response =await  fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Something Went Wrong!`);
  }
}

getAllUser();



//? Wrinting the same code using then and catch method

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
	return response.json()
})
.then((data) => {
	console.log(data)
})
.catch((error) => console.log(error))