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
    update (){

    }
    draw (){

    }
}