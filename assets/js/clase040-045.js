//temporizador
function tem(){
console.log("inicio");
    setTimeout(() => {
      console.log("Ejecutando un setTimeout, esto se ejecuta una sóla vez despues 10 segundos");
    }, 10000);
}
//asincronia y evento loop
function asevlo(){
    
//Código Síncrono Bloqueante
    (() => {
        console.log("Código Síncrono");
        console.log("Inicio");
        function dos() {
          console.log("2");
        }
        function uno() {
          console.log("1");
          dos();
          console.log("3");
        }
        uno();
        console.log("Fin");
      })();
      console.log("********************");
//Código Asíncrono No Bloqueante

      (() => {
        console.log("Código Asíncrono");
        console.log("Inicio");
        function dos() {
          setTimeout(function () {
            console.log("Dos");
          }, 1000);
        }
        function uno() {
          setTimeout(function () {
            console.log("Uno");
          }, 0);
          dos();
          console.log("Tres");
        }
        uno();
        console.log("Fin");
      })();
}

// tem()
// asevlo()