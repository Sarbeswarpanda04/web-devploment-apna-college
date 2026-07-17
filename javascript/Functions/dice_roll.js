function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  if (randomNumber == 1){
    console.log(" * ");
  } else if (randomNumber == 2){
    console.log("* *");
  } else if (randomNumber == 3){
    console.log("* * *");
  } else if (randomNumber == 4){
    console.log("* *");
    console.log("* *");
  } else if (randomNumber == 5){
    console.log("* *");
    console.log(" * ");
    console.log("* *");
  } else {
    console.log("***");
    console.log("***");
  }
}

rollDice();