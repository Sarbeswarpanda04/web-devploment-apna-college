const fav_mov = "Avatar";

let guess = prompt("Guess my favorite movie : ");

while((guess != fav_mov) ){
      if(guess == "quit"){
        alert("You quit.");
        break;
      }
      guess = prompt("Wrong guess , Please try Again : ");
}

if(guess == fav_mov){
  alert("Congratulation 🎉");
}