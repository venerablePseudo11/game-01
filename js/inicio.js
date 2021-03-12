document.addEventListener('DOMContentLoaded', function() {
    start.startGame();
}, false);
//DOM modelo de objeto del documento
var start = {
    startGame: function(){
        console.log("start game");
        dimension.start();
        var r = new Rectangle(0, 0, 100, 100);
        mainLoop.iterate();
    }
}