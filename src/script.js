let lastTime = 0;
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
    
    
    // Start the game loop
    requestAnimationFrame(gameLoop);}

function update(deltaTime) {
    // Update game objects, physics, etc.
}

function render() {
    // Draw game objects to the canvas
}

window.onload = init;

