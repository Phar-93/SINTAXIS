function Empleado(){
    this.nombre="Ricardo";
    this.depar="general";
}

function Manager(){
    this.reporte=[];
}
Manager.prototype=new Empleado;


function Programador(){
    this.proyectos=["a"];
}
Programador.prototype=new Empleado;
//HEREDA DE EMPLEADO

function Vendedor(){
    this.depar="ventas";
    this.cuota=100;
    console.log(this.proyectos, this.nombre, this.depar, this.cuota);
}
//ESTE HEREDA DEL PROGRAMADOR
Vendedor.prototype=new Programador;


function Ingeniero(){
    this.depar="ingenieria";
    this.maquina="";
}
//HEREDA TAMBIEN DEL PROGRAMADOR
Ingeniero.prototype=new Programador;


function Mostrar(){
     var ejem= new Ingeniero();
    console.log(ejem.depar+" "+ejem.maquina+" "+ejem.nombre+" "+ejem.proyectos);
}

