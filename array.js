// Task One
const addToArray = function (array, string) {
  return [array, string];
};
//End Task One

// Task Two
const convertToString = function (array) {
  return array.join();
};
//End Task Two

// Task Three
const updateValue = function (array, index, value) {
  if (index >= array.length) {
    return "there is no element to updated in this index";
  } else {
    array.splice(index, 1, value);
    return array;
  }
};
//End Task Three

// Task Four
const onlyString = function (array) {
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
//End Task Four

// Task Five
const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];
const login = function (username, password) {
  for (i = 0; i < users.length; i++) {
    if (username === users[i][0] && password === users[i][1]) {
      return "Login Successful";
    }
  }
  return "Login Failed";
};
//End Task Five

// Task Six
const maximumNumber = function (numbers) {
  return Math.max(...numbers);
};
//End Task Six

// Task Se7en
const reversString = function (string) {
  // split: change string to array. reverse: reverse the array. join: change the array to sting
  return string.split("").reverse().join("");
};
//End Task Se7en

// Extra One
const allUsers = [
  { username: "Jane", password: "123456" },
  { username: "admin", password: "abc123" },
];

const createUser = function (username, password) {
  for (let i = 0; i < allUsers.length; i++) {
    if (username == allUsers[i].username) {
      return "That username is not available";
    }
  }
  allUsers.push({ username: `${username}`, password: `${password}` }); // Object
  return "Registration successful";
};

// End Extra One

// Extra Two
const sliceArray = function (array, control) {
  let newArr = [];
  for (i = 0; i < array.length / control; i+control) {
    newArr.push(array.splice(0, control));
  }
  return newArr;
};
