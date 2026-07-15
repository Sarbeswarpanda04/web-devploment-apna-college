function eligibleToVote() {

    let age = Number(document.getElementById("age").value);

    if (age > 130 || age < 0) {
        document.getElementById("result").textContent = "Invalid age";
    }
    else if (age >= 18 && age <= 130) {
        document.getElementById("result").textContent = "✅ You are eligible to vote.";
    }
    else {
        document.getElementById("result").textContent = "❌ You are not eligible to vote.";
    }
}