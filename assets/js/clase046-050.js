//callbacks

function call(){

  function saludar(nombre, callback) {
    let saludo = `Hola ${nombre}`;
    callback(saludo);
  }


  
  function conversacion(saludo) {
    console.log(saludo);
  }
  
  saludar(prompt("dime tu nombre"), conversacion);

}

//promesas

function promi(){
  
  function saludar(nombre) {
    return new Promise(function(resolve, reject) {
      if (typeof nombre !== "string") {
        reject(new Error("Este nombre es muy raro, no me convense porque no pruebas un apodo?"));
      }
      else {
        resolve(`Hola, mucho gusto ${nombre}`);
      }
    });
  }
  
  saludar(prompt("ingrese un nombre"))
    .then(function(EsLoQueDigaEnResolve) {
      console.log(EsLoQueDigaEnResolve);
    })
    .catch(function(EsLoQueDigaEnReject) {
      console.error(error);
    });
  
}

//asyncAwait

function asyncAwait(){
  function esperarcincoSegundo() {
    return new Promise(function(){
      setTimeout(() => {
        resolve('¡Listo!');
      }, 5000);
    });
  }
  
  async function miFuncion() {
    console.log('Esperando tres segundo...');
    const resultado = await esperarcincoSegundo();
    console.log(resultado);
  }
  
  miFuncion();
}

//simbolos
function simb(){

const miSimbolo = Symbol('creador');


const miObjeto = {};
miObjeto[miSimbolo] = 'Yoimar Julio Salcedo';


console.log(miObjeto[miSimbolo]);

}

/*
call()
promi()
asyncAwait()
simb()
*/
