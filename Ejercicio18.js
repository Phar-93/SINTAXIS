function Persona(nom, year, gen){
    this.nombre=nom ||"Ricardo";
    this.edad=year || 26;
    this.genero=gen || "masculino";
    this.obtDetalles=function(){
        return this.nombre+" "+this.edad+" "+this.genero;
    }
}
// Persona.prototype.obtDetalles=function(){
//     return this.nombre+" "+this.edad+" "+this.genero;
// }

function Estudiante(){
    this.curso="2º";
    this.grupo="B";
    this.registrar=function(){
        this.curso=Nncurso;
        this.grupo=Ngrupo;
    }
}
Estudiante.prototype=new Persona;


function Profesor(Nasignatura, Nivel){
    this.asignatura="javascript";
    this.nivel="4";
    this.asignar=function(){
        this.asignatura=Nasignatura;
        this.nivel=Nivel;
    }
}
Profesor.prototype=new Persona;


function Llamada(){
      var nom = document.getElementById("nombre").value;
      var year = document.getElementById("edad").value;
      var gen = document.getElementById("gen").value;
    persona1 = new Persona(nom, year, gen);
    console.log(persona1.obtDetalles());
}