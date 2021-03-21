class LayerMapTiles {
    constructor(dataLayer, indexZ, widthOfTiles, heigthOfTiles, paletteSprites) {
        this.widthInTiles = parseInt(dataLayer.width);
        this.heigthInTiles = parseInt(dataLayer.heigth);
        this.x = parseInt(dataLayer.x);
        this.y = parseInt(dataLayer.y);
        this.z = indexZ;
        this.tiles = [];
        
        for (y = 0; y < this.heigthInTiles; y++) {
            for (x = 0; x < this.widthInTiles; x++) {
                var idSpritesCurrentOverOne = dataLayer.data[x + y * this.widthInTiles];
                if (idSpritesCurrentOverOne == 0) {
                    this.tiles.push(null);
                } else {
                    var currentSprite = this.findSpriteInPaletteByID(idSpritesCurrentOverOne - 1, paletteSprites);
                    this.tiles.push(new Tile(x, y, indexZ, widthOfTiles, heigthOfTiles, currentSprite));
                }
            }
        }
    }
    findSpriteInPaletteByID(idSpriteOverZero, paletteSprites) {
        for (s = 0; s < paletteSprites.length; s++) {
            if (idSpriteOverZero >= paletteSprites[s].firstSpriteOverOne - 1 && idSpriteOverZero < paletteSprites[s].totalSprites + paletteSprites[s].firstSpriteOverOne + 1) {
                return paletteSprites[s].sprites[Math.abs(paletteSprites[s].firstSpriteOverOne - 1 - idSpriteOverZero)];
            }
        }
        throw "The id ovre Zero " + idSpriteOverZero + " of Sprite don´t exist in never palette"
    }
}