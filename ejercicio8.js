var reloj = 0;
var frecuencia = 1000;
function actualiza() {
  var ahora = new Date();
  var fecha = ahora.getDate() + " - " + (ahora.getMonth() + 1) + " - " + ahora.getFullYear();
  var hora = ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds();
  var escribe = 'Hoy es ' + fecha + ' y son las ' + hora + ' horas';
  var situa = document.getElementById('capa0');
  situa.innerHTML = escribe;
  reloj = setTimeout("actualiza()", frecuencia);
}

actualiza();