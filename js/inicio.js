document.addEventListener('DOMContentLoaded', function() {
    start.startGame();
}, false);
//DOM modelo de objeto del documento
var start = {
    startGame: function(){
        console.log("start game");
        mainLoop.iterate();
    }
}