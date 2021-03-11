//nameSpace - espacio de nombre
//callback - 
var mainLoop = {
    idEjecucion: null,
    lastRecord: 0,
    aps: 0,
    fps: 0,
    iterate: function (tempRegister) {
        mainLoop.idEjecucion = window.requestAnimationFrame(mainLoop.iterate);
        
        mainLoop.upgrade(tempRegister);
        mainLoop.paint();

        if (tempRegister - mainLoop.lastRecord > 999) {
            mainLoop.lastRecord = tempRegister;
            console.log("APS: " + mainLoop.aps + "FPS: " + mainLoop.fps);
            mainLoop.aps = 0;
            mainLoop.fps = 0;
        }
    },
    stop: function (){

    },
    upgrade: function (tempRegister){
        mainLoop.aps++;
    },
    paint: function (tempRegister){
        mainLoop.fps++;
    }
};