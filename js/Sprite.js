class Sprite {
    constructor(route, idSobreZero, positioninBlade) {
        var elementsRoute = route.split("/");
        this.routeBladeOrigen = "img/" + elementsRoute[elementsRoute.length - 1];
        this.idSobreZero = idSobreZero;
        this.idSobreUno = idSobreZero + 1;
        this.positioninBlade = positioninBlade;
    }
}
