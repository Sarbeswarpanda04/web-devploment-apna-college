let todo = [];

let req = prompt("Please enter your request : ");
console.log(req);

while(true){
  if(req == "quit"){
    console.log("Quitting the application");
    break;
  }

  if(req == "list"){
    console.log("-------------------");
    for(let i=0;i<todo.length;i++){
      console.log(i,todo[i]);
    }
    console.log("-------------------");
  } else if (req == "add"){
    let task = prompt("Please enter your task : ");
    todo.push(task);
    console.log(task);
    console.log("task added")
  } else if (req == "delete"){
    let idx = prompt("please enter the task index");
    todo.splice(idx,1);
    console.log("task deleted")
  } else {
    console.log("Invalid request");
  }

  req = prompt("Please enter your request : ");
}