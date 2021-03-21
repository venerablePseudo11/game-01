<?php

$fecha = new DateTime();

$fontsJavaScript = array(
    "js/listofStates.js",
    "js/Rectangle.js",
    "js/Point.js",
    "js/Sprite.js",
    "js/PaletteSprites.js",
    "js/Tile.js",
    "js/LayerMapTiles.js",
    "js/ajax.js",
    "js/keyboard.js",
    "js/mainLoop.js",
    "js/dimensions.js",
    "js/inicio.js"
);

foreach($fontsJavaScript as $font) {
    echo '<script src="' . $font . '?' . $fecha -> getTimestamp() . '"></script>';
    echo nl2br("\n"); 
}