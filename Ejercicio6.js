function domingos(){
var d;
for(let i=2014; i<2050;i++){
    d = new Date(i, 0, 1);
if( d.getDay() === 0 ){
    document.write(i,"<br>");
}
}
}

domingos();
