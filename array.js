const addToArray = function (array, string) {
  return [array, string];
};

const convertToString = function (array) {
  return array.join();
};

const updateValue = function (array, index, value) {
  if (index >= array.length) {
    return "there is no element to updated in this index";
  } else {
    array.splice(index, 1, value);
    return array;
  }
};

const onlyString = function (array) {
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
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


