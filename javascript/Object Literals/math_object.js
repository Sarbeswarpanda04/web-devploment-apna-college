console.log(Math.PI); // 3.141592653589793

console.log(Math.random());  //random

let num = Math.floor(Math.random() * 10) + 1;
console.log(num);  //8

console.log(Math.abs(-2));  //2

console.log(Math.pow(2,3)); //8

console.log(Math.floor(5.9));  //5 nearest smallest integer value

console.log(Math.sqrt(64));  //8

console.log(Math.cbrt(125)); //5

console.log(Math.ceil(5.1));  //6 nearest largest integer value

let numbers = [12, 45, 7, 89];
console.log(Math.max(...numbers)); // 89

let price = 19.9876;
console.log(Math.round(price * 100) / 100); // 19.99