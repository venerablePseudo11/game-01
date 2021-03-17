class Tile {
    constructor(xInTile, yInTile, z, width, heigth, sprite) {
        this.rectangle = new Rectangle(xInTile, yInTile, width, heigth);
        this.zIndex = z;
        this.sprite = sprite;
        this.idHTML = "x" + xInTile + "y" + yInTile + "z" + z;
        this.html = '<div id ="' + this.idHTML + '></div>';
    }
    applyStyles() {
        if (!document.getElementById(this.idHTML)) {
            throw ("The ID " + this.idHTML + "Don´t exist in the blade");
        }
        document.getElementById(this.idHTML).style.position = "absolute";
        document.getElementById(this.idHTML).style.left = (this.rectangle.x * this.rectangle.width) + "px";
        document.getElementById(this.idHTML).style.top = (this.rectangle.y * this.rectangle.heigth) + "px";
        document.getElementById(this.idHTML).style.width = this.rectangle.width + "px";
        document.getElementById(this.idHTML).style.height = this.rectangle.heigth + "px";
        document.getElementById(this.idHTML).style.zIndex = "" + this.zIndex;
        document.getElementById(this.idHTML).style.background = "url('" + this.sprite.routeBladeOrigen + "')";
        var x = this.sprite.positioninBlade.x;
        var y = this.sprite.positioninBlade.y;
        document.getElementById(this.idHTML).style.backgroundPosition = "-" + x + "px -" + y + "px";
        document.getElementById(this.idHTML).style.backgroundClip = "border-box";
        document.getElementById(this.idHTML).style.outline = "1px solid transparent";
    }
}

