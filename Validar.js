function EmailException(code){

    this.name = "EmailException";
    
    switch(code){
        case 1:
            this.message = "Error: Falta la @, o tiene demasiadas.";
            break;
        case 2:
            this.message = "Error repeticion excesiva de caracteres(. ó _ ó -).";
            break;
        case 3:
            this.message = "Error: El dominio no es válido.";
            break;
        default:
            this.message = "Error: Error desconocido.";
    }
    this.code = code;
}
EmailException.prototype=new BaseException();
EmailException.prototype.constructor = EmailException;


function sendEmail(){
    var resultado = document.getElementById("email");
    var address = document.getElementById("address").value;

try {
    //  resultado.Style.color="blue";
    resultado.innerHTML = ValidateEmail(address);
} catch (e) {
    //  resultado.Style.color="red";
    resultado.innerHTML = e.name;
}

}

function ValidateEmail(address){
    var patron = /@/;
    var patron2 = /\w*(\.|-){2,}\w*@/;
    var patron3 = /[.][c][o][m]|[.][n][e][t]|[.][e][s]/;
    var valido = true;
    if(!address.match(patron)){
        throw new EmailException(1);
    }else if (address.match(patron2)){
        throw new EmailException(2);
    }else if(!address.match(patron3)){
        throw new EmailException(3);
    }else{
        return address;
    }
}