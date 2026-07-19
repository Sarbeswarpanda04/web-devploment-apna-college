const student = {
  name : "Sarbeswar",
  age : 20,
  class : 12,
  subjects : ["Hindi", "English", "Maths", "Science"],
  username : "sarbeswarpanda",
  password : "djysuhvn7hajvw"
};

// let username = student.username;
// let password = student.password;

// console.log(username);
// console.log(password);

//destructuring
let {username, password} = student;
console.log(username);
console.log(password);