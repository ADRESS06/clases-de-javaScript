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
  
  saludar("YOIMAR")
    .then(function(EsLoQueDigaEnResolve) {
      console.log(EsLoQueDigaEnResolve);
    })
    .catch(function(EsLoQueDigaEnReject) {
      console.error(error);
    });
  
}
//asyncAwait
function asyncAwait(){
  function esperarUnSegundo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('¡Listo!');
      }, 3000);
    });
  }
  
  async function miFuncion() {
    console.log('Esperando tres segundo...');
    const resultado = await esperarUnSegundo();
    console.log(resultado);
  }
  
  miFuncion();
}

//simbolos
function simb(){

const miSimbolo = Symbol('Yoimar');


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
