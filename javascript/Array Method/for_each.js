let arr = [1,2,3,4,5];

//Arrow Function
arr.forEach(el => console.log(el));

//Anonymous Function
arr.forEach(function(el){
  console.log(el);
})

//Named Function
let print = function(el) {
  console.log(el);
};
arr.forEach(print);