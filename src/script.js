let lastTime = 0;
let canvas;
let context;
const fps = 60;
const interval = 1000 / fps;

function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;

    if (deltaTime > interval) {
        lastTime = timestamp - (deltaTime % interval);

        // Update game state
        update(deltaTime);

        // Render game state
        render();
    }

    requestAnimationFrame(gameLoop);
}

function init() {
    // Set up stuff and begin the game
    canvas = document.getElementById('gameCanvas');
    context = canvas.getContext('2d');

    // Start the game loop
    requestAnimationFrame(gameLoop);}

function update(deltaTime) {
    // Update game objects, physics, etc.
}

function render() {
    // Clear everything
    context.clearRect(0, 0, canvas.width, canvas.height);

    // (re-)Draw game objects to the canvas
    context.font = '25px Arial';
    context.textAlign = 'right';
    context.textBaseline = 'bottom';
    context.fillStyle = 'white';
    context.fillText("Hello World", 200, 100);
}

window.onload = init;

