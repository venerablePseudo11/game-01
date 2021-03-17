class PaletteSprites {
    constructor(dataSprites) {
        this.routeImg = dataSprites.image;
        this.widthImg = parseInt(dataSprites.imagewidth);
        this.heigthImg = parseInt(dataSprites.imageheight);
        this.widthSprite = parseInt(dataSprites.tilewidth);
        this.heigthSprite = parseInt(dataSprites.tileheight);
        this.firstSpriteOverOne = parseInt(dataSprites.firstgid);

        this.widthImgMeasuredInSprites = this.widthImg / this.widthSprite;
        this.heigthImgMeasuredInSprites = this.heigthImg / this.heigthSprite;
        this.totalSprites = this.widthImgMeasuredInSprites * this.heigthImgMeasuredInSprites;

        this.sprites = [];

        for (s = 0; s < this.totalSprites; s++) {
            var idCurrentOverZero = this.firstSpriteOverOne - 1 + s;
            this.sprites.push(new Sprite(this.routeImg, idCurrentOverZero, this.getPositionSinceIdSprite(idCurrentOverZero)));
        }
    }
    getPositionSinceIdSprite(idSpriteOverZero) {
        var y = Math.floor(idSpriteOverZero / this.widthImgMeasuredInSprites);
        var x = idSpriteOverZero % this.widthImgMeasuredInSprites;
        return new Point(x * this.widthSprite, y * this.heigthSprite);
    }
}

