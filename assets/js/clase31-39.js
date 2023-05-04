//Función Anónima Autoejecutables
function fuanau(){
    (function () {
        console.log("");
      })();
//Formas de escribir las funciones Anónimas Autoejecutables
//Clásica
       (function () {
        console.log('versión Clásica')
      })();
//La Crockford (JavaScript The Good Parts)
      ((function () {
        console.log('versión Crockford')
      })());
//Unaria
      +function () {
        console.log('versión Unaria')
      }();
//Facebook
      !function () {
        console.log('versión Facebook')
      }();
}

fuanau()