<?php

$fecha = new DateTime();

$fontsJavaScript = array(
    "js/Rectangle.js",
    "js/Point.js",
    "js/Sprite.js",
    "js/Tile.js",
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