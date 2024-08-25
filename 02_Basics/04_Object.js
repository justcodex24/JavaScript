const appUser = new Object(); //* This is a singleton object

const myAppUser = {}; //* This is a non-singleton object.

//? Creating some property for the object

myAppUser.id = "123abc";
myAppUser.name = "Username";
myAppUser.isloggedIn = false;

console.log(myAppUser);

//? Accessing the key of the myAppUser

console.log(Object.keys(myAppUser)); //* Return an array of the keys of the object
console.log(Object.entries(myAppUser)); //* Return value in key value pairs

console.log(Object.hasOwnProperty("name")); //* check if the given value is in the object or not . Return value in boolean
//? Declaring object in object

const customUser = {
  email: "username@gamil.com",
  fullName: {
    username: {
      firstName: "abc",
      lastName: "xyz",
    },
  },
};

//? Trying to ascess the value of the customUser lastName

console.log(customUser.fullName.username.lastName);

//? Merging two object together

const myObj_01 = { 1: "a", 2: "b" };
const myObj_02 = { 3: "c", 4: "d" };
const myObj_03 = { 5: "e", 6: "f" };

const myAllObj = Object.assign({}, myObj_01, myObj_02);
console.log(myAllObj);

//? Merging all the value of the object using spread operator

const myAllobj_02 = { ...myObj_01, ...myObj_02 };

console.log(myAllobj_02);

//? object inside an array

const myObjArr = [
  {
    id: "1",
    email: "user@gamil.com",
  },
  {
    id: "2",
    email: "user@gamil.com",
  },
  {
    id: "3",
    email: "user@gamil.com",
  },
  {
    id: "4",
    email: "this_is_user_four@gamil.com",
  },
  {
    id: "5",
    email: "user@gamil.com",
  },
];

//? Acessing the vlaue of the fourth user

console.log(myObjArr[3].email);


const codexCourse = {
  coursename : "Javascript",
  price : 10,
  courseInstructor : " Hasan "
}

//? Destructuring object

const {courseInstructor : instructor} = codexCourse

console.log(instructor)