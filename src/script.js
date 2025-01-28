
class GameWorld{

    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.gameObjects = [];
        this.fpsCounter = new fpsCounter(this.context);


        this.init();

        window.requestAnimationFrame(() => this.gameLoop());
    }

    init(){

    }

    update(timeStamp){
        // Update the game world and the objects in it.
        this.fpsCounter.update(timeStamp);

    }

    draw(){
        // Clear the canvas.
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw game objects.
        this.fpsCounter.draw();
    }

    waitForNextFrame(){
        window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp));
    }


    gameLoop(timeStamp){
        this.update(timeStamp);

        this.draw();

        this.waitForNextFrame();
    }
}

class fpsCounter{

    constructor(context){
        this.context = context;
        this.secondsPassed;
        this.oldTimeStamp;
        this.fps;        
    }

    update(timeStamp){
        this.secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;

        this.fps = Math.round(1/this.secondsPassed);
    }

    draw(){
        // Draw number to the screen
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, 200, 40);
        this.context.font = '25px Arial';
        this.context.fillStyle = 'black';
        this.context.fillText("FPS: " + this.fps, 10, 30);                
    }
}

window.onload = () => {
    // After page is loaded, initialize the game.
    let gameWorld = new GameWorld('canvas');
}