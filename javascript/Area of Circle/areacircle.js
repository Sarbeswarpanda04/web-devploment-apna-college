function drawCircle() {

    let r = Number(document.getElementById("radius").value);

    if (isNaN(r) || r <= 0) {
        alert("Please enter a valid radius.");
        return;
    }

    // Calculate area
    let area = Math.PI * r * r;
    document.getElementById("area").textContent = area.toFixed(2);

    const svg = document.getElementById("svg");
    svg.innerHTML = "";

    const cx = 275;
    const cy = 275;
    const maxRadius = 220;

    // Scale the circle if necessary
    let drawRadius = r;
    if (drawRadius > maxRadius) {
        drawRadius = maxRadius;
    }

    // Draw circle
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", drawRadius);
    circle.setAttribute("fill", "#dbeafe");
    circle.setAttribute("stroke", "#2563eb");
    circle.setAttribute("stroke-width", "3");
    svg.appendChild(circle);

    // Draw center point
    let center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    center.setAttribute("cx", cx);
    center.setAttribute("cy", cy);
    center.setAttribute("r", "4");
    center.setAttribute("fill", "#2563eb");
    svg.appendChild(center);

    // Radius line
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", cx);
    line.setAttribute("y1", cy);
    line.setAttribute("x2", cx + drawRadius);
    line.setAttribute("y2", cy);
    line.setAttribute("stroke", "#2563eb");
    line.setAttribute("stroke-width", "2");
    line.setAttribute("stroke-dasharray", "6,6");
    svg.appendChild(line);

    // Radius text
    let radiusText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    radiusText.setAttribute("x", cx + drawRadius / 2);
    radiusText.setAttribute("y", cy - 12);
    radiusText.setAttribute("text-anchor", "middle");
    radiusText.setAttribute("fill", "#2563eb");
    radiusText.setAttribute("font-size", "22");
    radiusText.setAttribute("font-weight", "bold");
    radiusText.textContent = "r = " + r.toFixed(2);
    svg.appendChild(radiusText);

    // Area text
    let areaText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    areaText.setAttribute("x", cx);
    areaText.setAttribute("y", 40);
    areaText.setAttribute("text-anchor", "middle");
    areaText.setAttribute("fill", "#111827");
    areaText.setAttribute("font-size", "20");
    areaText.setAttribute("font-weight", "bold");
    areaText.textContent = "Area = " + area.toFixed(2);
    svg.appendChild(areaText);
}