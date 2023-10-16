// main.js

function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33a6", "#33a6ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}