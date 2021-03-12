var dimension = {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    heigth: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    sideTile: 100,
    scale: 1,
    start: function (){
        window.addEventListener("resize", function(e){
            dimension.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimension.heigth = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log("width: "+ dimension.width+" | heigth: "+ dimension.heigth);
            start.reloadTiles();
        });
    },
    getTileHorizontales: function(){
        var finalSide = dimension.sideTile * dimension.scale;
        return Math.ceil((dimension.width - finalSide) / finalSide);
    },
    getTileVerticales: function(){
        var finalSide = dimension.sideTile * dimension.scale;
        return Math.ceil((dimension.heigth - finalSide) / finalSide);
    },
    getTotalTiles: function(){
        return dimension.getTileHorizontales() * dimension.getTileVerticales();
    }
};