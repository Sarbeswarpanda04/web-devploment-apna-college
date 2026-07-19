function sum(a, b=3){
  return a+b;
}

console.log(sum(2));
console.log(sum(2,5));
console.log(sum(2,));
console.log(sum());
console.log(sum(sum(5,),));