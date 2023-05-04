//manejo de errores
function maEr(){
try {
    let numero = "y";
    if (isNaN(numero)) {
      throw new Error("El caractér introducido no es un Número");
    }
    console.log(numero * numero);
  } catch (error) {
    console.log(`Se produjo el siguiente : ${error}`);
  }
}
//breack y continue
function brco(){

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
      break;
    }
    console.log(numeros[i]);
  }
  for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
      continue;
    }
    console.log(numeros[i]);
  }
}
//destructuracion
function dest(){
  const numeros = [1, 2, 3];

    //Sin destructuración
    let uno = numeros[0],
      dos = numeros[1],
      tres = numeros[2];
    console.log(uno, dos, tres);

    //Con destructuración
    const [one, two, three] = numeros;
    console.log(one, two, three);
    const persona = {
      nombre: "yoimmar",
      apellido: "julio",
      edad: 17
    };
    let { nombre, edad, apellido } = persona;
    console.log(nombre, apellido, edad); 
}
//rest y operador spread
function resp(){

  function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function (n) {
      resultado += n
    });
    return resultado;
  }
  console.log(sumar(1, 2));
  console.log(sumar(1, 2, 3));
  console.log(sumar(1, 2, 3, 4));
  console.log(sumar(1, 2, 3, 4, 5));
  console.log(sumar(1, 2, 3, 4, 5, 6));
  console.log(sumar(1, 2, 3, 4, 5, 6, 7));
  const arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];
  console.log(arr1, arr2);
  const arr3 = [...arr1, ...arr2];
  console.log(arr3);

}


maEr()
brco()
dest()
resp()
