



function Carrito(uni, pre, cant){
    this.uni=uni;
   this.pre=pre;
   this.cant=cant;
  };

//   Carrito.prototype.toString = function precioToString() {
//     var precio= new Carrito(pre, uni, cant);
//     var retorno = this.uni+ this.pre + this.cant;
//     return retorno;
//   }
  
function Mostrar(){
var pre = document.getElementById('pre').value;
var uni = document.getElementById("uni").value;
var cant = uni*pre;
    var precio= new Carrito(pre, uni, cant);
     document.write(precio.pre," precio ",precio.uni," cantidad " ,precio.cant, " total \€ ");
}
  