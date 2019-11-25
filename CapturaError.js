function Mostrar(){
    var num, cont;
    var num = document.getElementById("resul");
    num.innerHTML="";
    var cont = document.getElementById("uni").value;
    try {
        
        if(cont==""){
            throw "Esta vacia la cadena";
        }

        if(isNaN(cont)){
            throw "No es un numero";
        }

        if(cont > 10)throw "El numero es demasiado alto";
        if(cont < 5)throw "El numero es demasiado pequeño";

    } catch (error) {
        num.style.color = "red";
        num.innerHTML = "Error "+ error;
    }
    // finally{
    //     num.style.color="blue";
    //     num.innerHTML="Datos introducidos correctamente";
    // }

}