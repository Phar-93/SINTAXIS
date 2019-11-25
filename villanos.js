var Nombre = new Array();
var Edad = new Array();
var Maldad = new Array();
var cont = 0;

//funcion registrar

function Registrar(){
document.getElementById("resul1").innerHTML="";
var Np = /[A-Z]{1}[a-z]{0,17}/; 
var Ep =/^[1]{1}[8-9]{1}|[2-9][0-9]|^[1]{1}[0-1]{1}[0-9]{1}|^[1]{1}[2]{1}[0]{1}/;
var Mp=/[0-9][0-9]|^[1]{1}[0]{1}[0]{1}/;

    var nom = document.getElementById("nombre").value;
    var year = document.getElementById("edad").value;
    var mal = document.getElementById("mal").value;


if(nom.match(Np) && year.match(Ep) && mal.match(Mp)){
    if(Nombre.indexOf(nom)){
        Nombre[cont]=nom;
        Edad[cont]=year;
        mal=parseInt(mal);
        Maldad[cont]=mal;
        cont+=1;
    }else{
        document.getElementById("resul1").innerHTML="ERROR LOS DATOS NO ESTAN BIEN";
    }

}else{
    document.getElementById("resul1").innerHTML="ERROR LOS DATOS NO ESTAN BIEN";
}
}

function Informe(){
    var num = Nombre.length;
    document.getElementById("Numero").innerHTML="Numero de villanos registrados: "+num;

    var media=0;
    var num1;
    for(const i in Edad){
        num1=parseInt(Edad[i]);
        media=media+num1;
     }
     var media2 = media / num;
     document.getElementById("Media").innerHTML="Media de edad: "+media2;

    var maxM = Math.max.apply(null, Maldad);
    document.getElementById("Maldad").innerHTML="Maldad maxima: "+maxM;

    for(const e in Edad){
        document.getElementById("Listado").innerHTML+=" Nombre: "+Nombre[e]+" Edad: "+Edad[e]+" Maldad "+Maldad[e]+"<br>";
     }

}