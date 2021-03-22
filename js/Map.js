class Map {
    constructor(objJSON) {
        this.position = new Point(0, 0);
        this.updatedPosition = new Point(0, 0);

        this.widthMeasuredInTiles = parseInt(objJSON.width);
        this.heigthMeasuredInTiles = parseInt(objJSON.heigth);
        this.widthOfTheTiles = parseInt(objJSON.tilewidth);
        this.heigthOfTheTiles = parseInt(objJSON.tileheigth);

        this.paletteSprites = [];
        this.startPaletteSprites(objJSON.tilesets);

        this.layerTiles = [];
        this.startLayer(objJSON.layers);
    }

    startPaletteSprites (dataLayer){
        for(i = 0; i < dataLayer.length; i++){
            this.paletteSprites.push(new this.paletteSprites(dataLayer[i]));
        }
    }

    startLayer (dataLayer){
        for(i = 0; i < dataLayer.length; i++){
            switch (dataLayer[i].type) {
                case "tilelayer":
                    this.layerTiles.push(new LayerMapTiles(dateLayer[i], i, this.widthOfTheTiles, this.heigthOfTheTiles, this.paletteSprites));
                    break;
                case "objectgroup":
                    break;
            }
        }
    }

    startGrid (){
        var widthInPixels = this.widthMeasuredInTiles * this.widthOfTheTiles;
        var heigthInPixels = this.heigthMeasuredInTiles * this.heigthOfTheTiles;

        var html = "";

        for (ct = 0; ct < this.layerTiles.length; ct++){
            for (t = 0; t < this.layerTiles[ct].tiles.length; t++){
                if(this.layerTiles[ct].tiles[t] == null){
                    continue;
                }
                var currentTile = this.layerTiles[ct].tiles[t];
                html += currentTile.html;
            }
        }

        document.getElementById("map").innerHTML = html;

        for (ct = 0; ct < this.layerTiles.length; ct++){
            for (t = 0; t < this.layerTiles[ct].tiles.length; t++){
                if(this.layerTiles[ct].tiles[t] == null){
                    continue;
                }
                var currentTile = this.layerTiles[ct].tiles[t];
                currentTile.applyStyles();
            }
        }

        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    update (){

    }

    draw (){

    }
}