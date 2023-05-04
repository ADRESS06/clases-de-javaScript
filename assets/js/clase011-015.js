//arreglos
function arr(){
let alumnos =["andres", "sara", "yoimar","samuel"]
const grados =["primero", "segundo", "tercero", "cuarto"]
console.log("un arreglo es un prototipo o variable en forma de lista ")
console.log (alumnos, grados)
console.log("tambien podemos podemos llamar solo un objeto por su posicion recordando que la primera posicion es 0")
console.log(alumnos[3],grados[1])
console.log("tambien podemos usar el metodo push para agregar nuevos elementos al arreglo")
alumnos.push("yarlis")
grados.push("quinto")
console.log (alumnos, grados)
console.log("tambien podemos usar el metodo pop para eliminar el ultimo elemento")
grados.pop()
console.log (alumnos, grados)
}
//objetos
function obj(){
let alumnos ={
    yoimar:17,
    sara:18,
    samuel:18
}
console.log("un objeto es una variable con que guarda caracteristicas dentro")
console.log (alumnos)
console.log("tambien podemos agregar nuevos elementos al objeto llamando el objeto y usando como metodo una variable no existente y agregarle un valor")
alumnos.yarlis = 18
console.log (alumnos)
}
//tipos de operadores
function op(){
console.log("son los bacicos (+)suma,(-)resta,(*)multiplicación,(/)divicion,(%)modulo,(==)igual,(!=)diferente(>)mayor que,(<)menor que,(>=)mayor igual que,(<)menor igual que")
let l=1+2-5*7+5-1/7
console.log(l)
}
function condi(){
    let m=22
    let n=44
    if (m==n){
        console.log("m y n son iguales")
    }
    else
    console.log(m)

//ciclos
}
function loops(){
    console.log("el while imprime todas las interacciones hasta que contador valga 10")
    let contador = 0;
    while (contador < 10) {
       console.log("while " + contador);
       contador++;
     }
     console.log("el do while imprime todas las interacciones hasta que contador valga 10 pero hace por lo menos una interaccion")
    do {
        console.log("do while " + contador);
        contador++;
        } while (contador < 10);
        console.log("este es el mas utilizado actualmente por los programadores")
    for (let i = 0; i < 10; i++) {
      console.log("for " + i);
    }
    const jon = {
        nombre: "yoimar",
        apellido: "julio",
        edad: 17
      }
      for (const propiedad in jon) {
        console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`);
      }
}


arr()
obj()
op()
loops()