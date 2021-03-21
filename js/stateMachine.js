var stateMachine = {
    actualState: null,
    start : function () {
        
    },
    changeState : function (newState) {
        switch (newState) {
            case listofStates.LOADING:
                
                break;
            case listofStates.INITIAL_MENU:
                
                break;
            case listofStates.WORLD_MAP:
                
                break; 
            case listofStates.LEVEL:
                
                break;   
            default:
                break;
        }
    },
    update : function () {
        stateMachine.actualState.update();
    },
    paint : function () {
        stateMachine.actualState.paint();
    }
}