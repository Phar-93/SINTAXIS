"use strict";

var Afechas = new Array();
var anio = new Array();
var mes = new Array();
var dia = new Array();
var fechaAx = new Array();

function MeterFechas(){
var NuevaF=document.getElementById("fecha").value;
// var NuevaF="1993/03/10";
var fecha = new Date(NuevaF);
console.log(fecha);
Afechas.push(fecha);
console.log(Afechas);
var sepa = NuevaF
.split("/");
anio.push(sepa[0]);
mes.push(sepa[1]);
dia.push(sepa[2]);

}

function OrdenarFechas(){
    //Ordeno el array de fechas y lo imprimo

    for(var i=0;i<(anio.length-1);i++){
        for(var j=i+1;j<anio.length;j++){
            if(anio[i]>anio[j]){
                //Intercambiamos valores
                var variableauxiliar=anio[i];
                anio[i]=anio[j];
                anio[j]=variableauxiliar;

                var variableauxiliar=mes[i];
                mes[i]=mes[j];
                mes[j]=variableauxiliar;

                var variableauxiliar=dia[i];
                dia[i]=dia[j];
                dia[j]=variableauxiliar;

            }
        }
    }

//imprimir fechas

for(i in anio){
    fechaAx[i]=anio[i]+"/"+mes[i]+"/"+dia[i];
}

console.log(fechaAx);

}