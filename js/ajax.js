var ajax = {
    uploadFile: function (route) {
        var petition = new XMLHttpRequest();
        petition.onreadystatechange = function () {
            /*
            0 / UNSET - no iniciada
            1 / OPENED - conectado
            2 / HEADERS_RECIVED - peticion recivida
            3 / LOADING - cargando peticion
            4 / DONE - peticion finalizada
            */
           if (petition.readyState == XMLHttpRequest.DONE) {
               if (petition.status == 200) {
                   console.log(JSON.parse(petition.responseText));
               } else if (petition.status == 400){
                   console.log("error");
               } else {
                   console.log("resultado inesperado");
               }
           }
        };
        petition.open("GET", route, true);
        petition.send();
    }
}