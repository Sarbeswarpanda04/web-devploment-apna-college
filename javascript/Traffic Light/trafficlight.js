function checkColor() {

    let color = document.getElementById("color").value.toLowerCase();

    if (color === "red") {
        document.getElementById("result").textContent = "🛑 Stop";
    }
    else if (color === "yellow") {
        document.getElementById("result").textContent = "🟡 Ready";
    }
    else if (color === "green") {
        document.getElementById("result").textContent = "🟢 Go";
    }
    else {
        document.getElementById("result").textContent = "❌ Invalid traffic light color";
    }
}