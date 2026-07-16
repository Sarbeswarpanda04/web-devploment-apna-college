const student = {
  name : "Sarbeswar",
  age : 20,
  marks : 94.4,
  city : "Bhubaneswar"
};
console.log(student);

//Add
student.gender = "Male";
console.log(student.gender);

//Update
student.city = "Mumbai";
console.log(student.city);

//Delete
delete student.age;
console.log(student.age);

console.log(student);