function Sprite(route, idSobreZero, positioninBlade) {
    var elementsRoute = route.split("/");
    this.routeBladeOrigen = "img/" + elementsRoute[elementsRoute.length - 1];
}