function hola(nombre, micallback) {
    setTimeout(function() {
        console.log("Hola, "+ nombre);
        micallback(nombre);
    },1000);
}
function hablar(callbackhablar){
    setTimeout(function(){
      console.log("Bla bla bla");
      callbackhablar(); 
    },100);
}
 function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log('Adios, '+nombre);
        otrocallback();
    }, 1000);
 }

 function conversacion(nombre,veces, callback){
    if(veces>=0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    }else{
        adios(nombre,callback);
    }
 }
//--
console.log('iniciando proceso');
hola('Shirley', function(nombre) {
    conversacion(nombre,3,function(){
        console.log('Terminando');
    });
});