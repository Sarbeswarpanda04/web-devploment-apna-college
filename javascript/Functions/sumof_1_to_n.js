function sum1ton(n) {
  let sum = 0;
  for (let  i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sum1ton(5));