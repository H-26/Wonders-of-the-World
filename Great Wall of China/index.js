const SQUARE_SIZE = 100;

let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth * 0.98;
canvas.height = window.innerHeight * 0.6;
canvas.addEventListener("click", onCanvasClick);

function onCanvasClick(event) {
    let canvas = document.getElementById("canvas");
    let bounds = canvas.getBoundingClientRect();
    if (canvas.getContext) {
        const context = canvas.getContext("2d");
        context.fillStyle = "rgb(138, 138, 138)";
        let x = event.x - bounds.x - SQUARE_SIZE / 2;
        let y = event.y - bounds.y - SQUARE_SIZE / 2;
        context.fillRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
    }
}