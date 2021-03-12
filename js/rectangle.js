function Rectangle(x, y, width, heigth) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
    this.id = "r" + x + y;
    this.insertDOM();    
}

Rectangle.prototype.insertDOM = function (){
    var div = '<div id="' + this.id +'"></div>';
    var html = document.getElementById("juego").innerHTML;
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("juego").innerHTML = html + div;
    document.getElementById(this.id).style.position = "absolute";
    document.getElementById(this.id).style.left = this.x + "px";
    document.getElementById(this.id).style.top = this.y + "px";
    document.getElementById(this.id).style.width = this.width + "px";
    document.getElementById(this.id).style.height = this.heigth + "px";
    document.getElementById(this.id).style.backgroundColor = color;
}