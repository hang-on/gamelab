window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const context = canvas.getContext('2d');

    // Load sprite image
    const sprite = new Image();
    sprite.src = 'gfx/longmoan.png'; // Update with the path to your sprite image

    const tyris = new Image();
    tyris.src = 'gfx/tyris.png'; // Update with the path to your sprite image


    sprite.onload = function() {
        // Draw sprite on canvas
        context.drawImage(sprite, 0, 0);
        context.drawImage(tyris, 450, 355);
                
    };
};