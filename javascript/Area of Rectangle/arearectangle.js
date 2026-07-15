function drawRectangle() {
  let length = Number(document.getElementById("length").value);
  let width = Number(document.getElementById("width").value);

  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    alert("Please enter valid Length and Width.");
    return;
  }

  // Calculate area
  let area = length * width;
  document.getElementById("area").textContent = area.toFixed(2);

  const svg = document.getElementById("svg");
  svg.innerHTML = "";

  const svgWidth = 550;
  const svgHeight = 550;

  const maxWidth = 400;
  const maxHeight = 280;

  const minWidth = 120;
  const minHeight = 80;

  // Scale while preserving aspect ratio
  let scale = Math.min(maxWidth / length, maxHeight / width);

  let drawLength = length * scale;
  let drawWidth = width * scale;

  // Minimum visible size
  if (drawLength < minWidth) {
    let factor = minWidth / drawLength;
    drawLength *= factor;
    drawWidth *= factor;
  }

  if (drawWidth < minHeight) {
    let factor = minHeight / drawWidth;
    drawLength *= factor;
    drawWidth *= factor;
  }

  // Maximum size
  if (drawLength > maxWidth) {
    let factor = maxWidth / drawLength;
    drawLength *= factor;
    drawWidth *= factor;
  }

  if (drawWidth > maxHeight) {
    let factor = maxHeight / drawWidth;
    drawLength *= factor;
    drawWidth *= factor;
  }

  // Center the rectangle
  let leftMargin = 80; // Space for width label
  let x = leftMargin + (svgWidth - leftMargin - drawLength) / 2;
  let y = (svgHeight - drawWidth) / 2;

  // Draw rectangle
  let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", drawLength);
  rect.setAttribute("height", drawWidth);
  rect.setAttribute("fill", "#dbeafe");
  rect.setAttribute("stroke", "#2563eb");
  rect.setAttribute("stroke-width", "3");
  svg.appendChild(rect);

  // Length label
  let lengthText = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text",
  );
  lengthText.setAttribute("x", x + drawLength / 2);
  lengthText.setAttribute("y", y - 12);
  lengthText.setAttribute("text-anchor", "middle");
  lengthText.setAttribute("font-size", "20");
  lengthText.setAttribute("fill", "#2563eb");
  lengthText.textContent = "Length = " + length;
  svg.appendChild(lengthText);

  // Width label
  let widthText = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
);

widthText.setAttribute("x", x - 25);
widthText.setAttribute("y", y + drawWidth / 2);
widthText.setAttribute("fill", "#2563eb");
widthText.setAttribute("font-size", "18");
widthText.setAttribute("text-anchor", "middle");

// Rotate 90°
widthText.setAttribute(
    "transform",
    `rotate(-90 ${x - 25} ${y + drawWidth / 2})`
);

widthText.textContent = "Width = " + width;

svg.appendChild(widthText);

  // Area text
  let areaText = document.createElementNS("http://www.w3.org/2000/svg", "text");

  let fontSize = Math.min(drawLength, drawWidth) / 6;
  fontSize = Math.max(18, Math.min(fontSize, 34));

  areaText.setAttribute("x", x + drawLength / 2);
  areaText.setAttribute("y", y + drawWidth / 2);
  areaText.setAttribute("text-anchor", "middle");
  areaText.setAttribute("dominant-baseline", "middle");
  areaText.setAttribute("font-size", fontSize);
  areaText.setAttribute("font-weight", "bold");
  areaText.setAttribute("fill", "#111827");
  areaText.textContent = "Area = " + area.toFixed(2);

  svg.appendChild(areaText);
}
