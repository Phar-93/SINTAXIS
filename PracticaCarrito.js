


function Producto(num_serie,nombre,precio,iva){
    this.num_serie=num_serie||"xxxxxxxx";
    this.nombre=nombre||"producto";
    this.precio=precio||0;
    this.iva=iva||0;
}


// function Camiseta(){
//     this.talla=talla||"talla";
//     this.color=color||"";
    
// }
// Camiseta.prototype=new Producto;

class Camiseta extends Producto{
    constructor(num_serie,nombre,precio,iva,talla, color){
        super(num_serie,nombre,precio,iva);
        this.talla=talla||"talla";
        this.color=color||"";
    }
    get talla(){
        return this._talla;
    }
    set talla(){
        return this._talla=value;
    }
    get color(){
        return this._color;
    }
    set color(value){
        return this._color=value;
    }
}


function Pantalon(){
    this.talla=talla||"talla";
    this.color=color||"";
    this.ancho=ancho||"";
    this.largo=largo||"";
}
Pantalon.prototype=new Producto;


function Zapatilla(){
    this.tipo=tipo||"tipo";
    this.numero=numero||"0";
}
Zapatilla.prototype=new Producto;



function Carrito(){
    this.tipo=tipo||"tipo";
    this.numero=numero||0;
}
Zapatilla.prototype=new Producto;