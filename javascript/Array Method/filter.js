let nums = [1,2,3,4,5];

let even = nums.filter( (el) =>{
  return el % 2 == 0;
});

let odd = nums.filter( (el) =>{
  return el % 2 != 0;
});

console.log("Even Number :",even);
console.log("Odd Number :",odd);