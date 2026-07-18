let nums = [2, 4, 6, 8, 10];

let even = nums.every((el) => {
  return el % 2 == 0;
});

let odd = nums.every((el) => {
  return el % 2 != 0;
});

console.log(even);
console.log(odd);