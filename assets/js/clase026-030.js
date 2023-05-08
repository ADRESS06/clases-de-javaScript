//objeto Date
function dat(){
    let fecha = new Date();
    console.log(fecha);
    console.log("mes", fecha.getMonth());
    console.log("año", fecha.getFullYear());
    console.log("hora",fecha.getHours());
    console.log("minutos", fecha.getMinutes());
    console.log("segundos", fecha.getSeconds());
}
//objeto math
function mat(){
    console.log("aproximar",Math.round(7.49));
    console.log("raiz cuadrada",Math.sqrt(81));
    console.log("potenciacion",Math.pow(2, 5));
    console.log("numero random",Math.random());
    console.log("numero random entre 0 y cien",Math.round(Math.random() * 100)); 
}
//corto circuito
function cosi(){
    function saludar(nombre) {
        nombre = nombre || "Desconocido";
        console.log(`Hola ${nombre}`);
      }
      saludar("Jon");
      saludar();
      console.log("cadena" || "Valor de la derecha");
      console.log(19 || "Valor de la derecha");
      console.log(true || "Valor de la derecha");
      console.log([] || "Valor de la derecha");
      console.log({} || "Valor de la derecha");
      console.log(false || "Valor de la derecha");
      console.log(null || "Valor de la derecha");
      console.log(undefined || "Valor de la derecha");
      console.log("" || "Valor de la derecha");
      console.log(-2 || "Valor de la derecha");
      console.log(0 || "Valor de la derecha");
 
}
//alert, confirm y prompt
function alcopr(){
    let alerta = alert("Esto es una alerta"),
      confirmacion = confirm("Esto es una confirmación"),
      aviso = prompt("Esto es un aviso y le permite al usuario ingresar un valor");
    console.log(alerta);
    console.log(confirmacion);
    console.log(aviso);
}

// dat()
// mat()
// cosi()
// alcopr()
