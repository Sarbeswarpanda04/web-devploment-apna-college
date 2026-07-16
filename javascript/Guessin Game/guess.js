// const max = prompt("Enter the maximum Number ");

// const random = Math.floor(Math.random()*max)+1;

// let guess = prompt("guess the number : ");

// while(true){
//     if(guess == "quit"){
//       alert("Game Over , you quit the game");
//       break;
//     }

//     if(guess == random) {
//       alert("You Won 🎉🎉🎉 number is : "+random);
//       break;
//     } else if (guess < random) {
//       guess = prompt("Your guess was too small please try again :");
//     } else if (guess > random) {
//       guess = prompt("Your guess was too large please try again :");
//     }
// }


const max = 100; // Maximum number

const randomNumber = Math.floor(Math.random() * max) + 1;
let attempts = 0;

const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector(".message");
const score = document.querySelector(".score");

button.addEventListener("click", function () {
    const guess = Number(input.value);

    if (input.value === "") {
        message.textContent = "⚠️ Please enter a number.";
        return;
    }

    attempts++;
    score.textContent = "Attempts: " + attempts;

    if (guess === randomNumber) {
        message.textContent = "🎉 Congratulations! You guessed the number!";
        button.disabled = true;
        input.disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = "📉 Too low! Try again.";
    } else {
        message.textContent = "📈 Too high! Try again.";
    }

    input.value = "";
    input.focus();
});