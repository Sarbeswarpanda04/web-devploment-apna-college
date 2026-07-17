function MultipleGreet(func,count) {  //Higher Order Function
  for(let i=0 ; i<count ; i++){
    func();
  }
}

let greet = function(){
  console.log("Hello");
}

MultipleGreet(greet,5);