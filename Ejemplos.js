"use strict";


function Cat(_nombre) {

    this._nombre= _nombre;
    var _sonido = "MIAU";


    this.dice = function(){
        return _sonido;
    }
    
}

Cat.prototype.especie=function(){
    return "Persa";
}

console.log("Ejemplo 1: creacion de instancias");
var cat1 = new Cat("TORRISI");
var cat2 = new Cat("TRISTAN");

Object.defineProperty(Cat.prototype, "numPatas", {
    value:4,
// cambiamos
writable:true,
enumerable:true,
configurable:true

});
console.log(cat2);
console.log(cat1._nombre);
console.log(cat1.dice());
console.log(cat2.numPatas);
console.log(cat1.numPatas);




var dog = new Object();


dog.nombre="ZORTON";
dog.owner={};
dog.owner.nombre="Rodrigo";
console.log(dog.owner);
dog.bark=function(){
    return "GUAU";
};
console.log(dog.bark());

var dog2 = { 
nombre : "AUTISMO",
owner:{ nombre:"LOCO",
        edad:84},
bark : function(){
    return "adasdadsdasad";
}
};

console.log(dog2);


function Cartera(){
    var dinero = 0;

 Object.defineProperty(this, "cantidad",{
    get : function(){
        return dinero;
    },
    set : function(val){
        dinero=val;
    }
 });


 this.checkSaldo = function(){
     if(this.dinero<100){
        return "ERES POBRE";
     }else{
         return "ERES MILLONAR@ CRACK";
     }
 }


}

Cartera.prototype.cobro=function(salario){
this.cantidad = salario + this.cantidad;
return this.cantidad;
}


console.log("EJEMPLO CARTERA con getter y setter");

// var monedero = new Cartera();

var monedero = Object.create(Cartera.prototype);



console.log(monedero.cantidad);
console.log(monedero.dinero);
console.log(monedero.cobro(1000));
console.log(monedero.cantidad);
monedero.cantidad = 99;
// console.log(monedero.checkSaldo());


//EJERCICIO INVESTIGACION CREACION DE OBJETOS





//El método Object.create() crea un objeto nuevo, 
//utilizando un objeto existente como el prototipo del nuevo objeto creado.
//Object.create() para agregar un prototipo desde un objeto con una propiedad 
//a la que también le pasábamos sus descriptores usando getOwnPropertyDescriptor():


//Creando un nuevo objeto a partir de un prototipo
let arbol = {bolas: 20};
let arbol2 = Object.create({estrella: 1}, {bolas:
    Object.getOwnPropertyDescriptor(arbol, "bolas")});
console.log(arbol === arbol2); // false
console.log(arbol); 
console.log(arbol2); 
console.log(Object.getPrototypeOf(arbol)); 
console.log(Object.getPrototypeOf(arbol2)); 
//Las dos variables NO apuntan al mismo objeto
arbol2.bolas = 7;
console.log(arbol); 


  //FREEZE
  //Congelar un objeto supone desactivar los descriptores writable y configurable

//El método Object.freeze() se encarga de hacer esto y bloquear el objeto para impedir agregar nuevas propiedades.
var coche = new Object();
Object.defineProperty(coche, 'ruedas', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 4
  });

//congelamos las propiedades writable y configurable
coche = Object.freeze(coche);
//no podemos cambiar la propiedad al utilizar freeze
////tampoco podremos agregar nuevas propiedades ni borrarlas
// coche = Object.defineProperty(coche, "b", {value: 2});
// coche.ruedas=2;
console.log(coche); 
console.log(Object.getOwnPropertyDescriptor(coche, "ruedas"));



//SEAL
//El método Object.seal() sella el objeto desactivando el descriptor configurable de todas sus propiedades. 
//Esto tiene como principal efecto el impedimento para agregar nuevas propiedades.
// Con el método Object.isSealed() comprobamos si un objeto está sellado.

let pajaro = {pico: 1, alas: 2};

pajaro = Object.seal(pajaro);
console.log(Object.isSealed(pajaro)); // true
//El descriptor configurable será ahora falso
console.log(Object.getOwnPropertyDescriptor(pajaro, "pico"));
//Object {value: 1, writable: true, enumerable: true,
//        configurable: false}
//No podemos agregar nuevas propiedades
console.log(pajaro); 
//Pero si podemos cambiar el valor de las
//propiedades existentes con writable activado
pajaro.alas = 4; 
console.log(pajaro); // Object {a: 99}

