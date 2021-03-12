var dimension = {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    heigth: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    start: function (){
        window.addEventListener("resize", function(e){
            dimension.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimension.heigth = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log("width: "+ dimension.width+" | heigth: "+ dimension.heigth);
        });
    }
}