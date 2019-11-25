

var A = Array();

function Carrito(uni, pre){
    this.uni=uni || 1;
   this.pre=pre || 50;
  };

function Mostrar(){

var pre = document.getElementById('pre').value;
var uni = document.getElementById("uni").value;
var cant = uni*pre;
    var precio= new Carrito(pre, uni, cant);
    A.push(uni);
    document.getElementById("resul").innerHTML="";
    A.forEach(function (elemento, indice, array) {
        document.getElementById("resul").innerHTML+="El numero de unidades es: "+ A[indice]+"<br>";
    });
  


}
  