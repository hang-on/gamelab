
class GameWorld{

    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.gameObjects = [];
        
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update(){
        // Update the game world and the objects in it.

    }

    draw(){
        // Clear and redraw the canvas.
    }

    waitForNextFrame(){
        window.requestAnimationFrame(() => this.gameLoop());
    }


    gameLoop(){
        this.update();

        this.draw();

        this.waitForNextFrame();
    }
}

window.onload = () => {
    // After page is loaded, initialize the game.
    let gameWorld = new GameWorld('canvas');
}