let nums = [1, 2, 3, 4, 5];

let result = nums.reduce((a, b) => {  // a = accumulator, b = current element
  return a + b;
},0);  //0 is initial value we can change it 

console.log(result);