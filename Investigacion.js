//EJERCICIO INVESTIGACION CREACION DE OBJETOS


//El constructor es llamado en el momento de la creación de la instancia 
//(el momento en que se crea la instancia del objeto). El constructor es un método de la clase. 
//En JavaScript, la función sirve como el constructor del objeto, por lo tanto, 
//no hay necesidad de definir explícitamente un método constructor. 
//Cada acción declarada en la clase es ejecutada en el momento de la creación de la instancia.

//El constructor se usa para establecer las propiedades del objeto o 
//para llamar a los métodos para preparar el objeto para su uso. 
//Más adelante describiremos como agregar métodos a clase y sus definiciones ya que se realiza 
//utilizando una sintaxis diferente.


function Persona(primerNombre) {
    this.primerNombre = primerNombre;
    console.log('Una instancia de Persona');
  }
  
  var persona1 = new Persona("Hernan");
  var persona2 = new Persona("Ricardo");
  
  // Muestra el primer nombre de persona1
  console.log('persona1 es ' + persona1.primerNombre); // muestra "persona1 es Hernan"
  console.log('persona2 es ' + persona2.primerNombre); // muestra "persona2 es Ricardo"

  //para añadir un metodo tenemos que agregarlo al prototipo
  Persona.prototype.piernas=function(numero){
    this.piernas = numero + this.piernas;
    return this.piernas;
    }


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