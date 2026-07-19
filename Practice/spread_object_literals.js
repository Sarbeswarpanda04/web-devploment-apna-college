let data = {
  email : "sarbeswar@sarbeswarpanda.me",
  password : "Sarbeswar@123"
};

let dataCopy = {...data, id : 123}
let dataCopy2 = {...dataCopy, Name : "Sarbeswar"}

console.log(data);
console.log(dataCopy);
console.log(dataCopy2);