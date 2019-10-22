function navidad(){
    var a = new Date();
    var d = new Date(2019, 11,25);
    var dias=0;
    dias=d-a;
    dias=dias/(1000*60*60*24);
    document.write(Math.round(dias), " DIAS FALTAN PARA NAVIDAD");
}
navidad();
