function hola(nombre, micallback) {
    setTimeout(function() {
        console.log("Hola, "+ nombre);
        micallback(nombre);
    },1000);
}

 function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log('Adios, '+nombre);
        otrocallback();
    }, 1000);
 }
console.log('iniciando proceso');
hola('Shirley', function(nombre){
    adios(nombre, function(){
        console.log('terminando proceso');
    })
    
});
