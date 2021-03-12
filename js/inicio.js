document.addEventListener('DOMContentLoaded', function() {
    start.startGame();
}, false);
//DOM modelo de objeto del documento
var start = {
    startGame: function(){
        console.log("start game");
        dimension.start();
        start.reloadTiles();
        mainLoop.iterate();
    },
    reloadTiles: function(){
        document.getElementById("game").innerHTML = "";
        for (var y = 0; y < dimension.getTileVerticales(); y++) {
            for (var x = 0; x < dimension.getTileHorizontales(); x++) {
                var r = new Rectangle(x * dimension.sideTile, y * dimension.sideTile, dimension.sideTile, dimension.sideTile);
            }
        }
    }
};