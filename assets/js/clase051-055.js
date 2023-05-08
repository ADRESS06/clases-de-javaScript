//sets

function sets(){
//crear sets
    const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);
    console.log(set);
//ver longitud
    console.log(set.size);


    const set2 = new Set();
//Agregar elementos al set 2
    set2.add(1);
    set2.add(2);
    set2.add(2);
    set2.add(3);
    set2.add(true);
    set2.add(false);
    set2.add(true);
    set2.add({});
    console.log(set2);
//ver longitud set 2
    console.log(set2.size);


//Recorriendo set
    for (item of set) {
      console.log(item);
    }

//Recorriendo set2
    set2.forEach(item => console.log((item)), console.log(`yoimar julio`));

//convirtiendo set en arreglo
    let arr = Array.from(set);
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[9]);

//eliminando elementos del set
    set.delete("HOla");
//imprimiendo el set
    console.log(set);
//buscando en el set "debe devolver true o false"
    console.log(set.has("hola"));
    console.log(set.has(19));
//Eliminar todo el set 2 completo
    set2.clear();
//imprimiendo el set2
    console.log(set2); 

}

//maps

function maps(){
//crear maps
    const mapa = new Map();
//Agregar elementos al map
    mapa.set("nombre", "Jon");
    mapa.set("apellido", "MirCha");
    mapa.set("edad", 35);
//imprimiendo maps
    console.log(mapa);
//ver longitud
    console.log(mapa.size);
//buscar elementos en maps
    console.log(mapa.has("correo"));
    console.log(mapa.has("nombre"));
//obteniendo valores
    console.log(mapa.get("nombre"));
//Agregar elementos al map
    mapa.set("creator", "Yoimar julio");
    console.log(mapa.get("creator"));
//eliminar elementos
    mapa.delete("apellido");
//agregando elementos a livertad completa
    mapa.set(19, "diecinueve");
    mapa.set(false, "falso");
    mapa.set({}, "objeto");
//imprimiendo maps
    console.log(mapa);
//iterando maps
    for (let [key, value] of mapa) {
      console.log(`Llave: ${key}, Valor:${value}`);
    }
//creando maps 2
    const mapa2 = new Map([
      ["nombre", "kEnAi"],
      ["edad", 7],
      ["animal", "perro"],
      [null, "nulo"]
    ]);
//imprimiendo maps
    console.log(mapa2);
//destructurando las llaves y los mapas
    const llavesMapa2 = [...mapa2.keys()];
    const valoresMapa2 = [...mapa2.values()];
//imprimiendo las llaves y mapas por separado
    console.log(llavesMapa2);
    console.log(valoresMapa2); 

}


//weak set y weak maps

function weakSetMaps(){
//creando Weak sets
    const ws = new WeakSet();
//solo acepta objetos
    let valor1 = { "valor1": 1 };
    let valor2 = { "valor2": 2 };
    let valor3 = { "valor3": 3 };
//agregando valores
    ws.add(valor1);
    ws.add(valor2);
//imprimiendo weaksets
    console.log(ws);
//buscando en el weak set
    console.log(ws.has(valor1));
    console.log(ws.has(valor3));
//elimienando valores
    ws.delete(valor2);
//imprimiendo weak set
    console.log(ws);
//agregando valores 
    ws.add(valor2);
    ws.add(valor3);
//imprimiendo weak set
    console.log(ws);
//imprimir cada cinco segundos
    setInterval(() => console.log(ws), 1000);
    setTimeout(() => {
      valor1 = null;
      valor2 = null;
      valor3 = null;
    }, 5000); 
  
    
//creando Weak maps
    const wm = new WeakMap();
//solo acepta objetos
    let llave1 = {};
    let llave2 = {};
    let llave3 = {};
//agregando valores
    wm.set(llave1, 1);
    wm.set(llave2, 2);
//imprimiendo weak maps
    console.log(wm);
//buscando en el weak maps
    console.log(wm.has(llave1));
    console.log(wm.has(llave3));
//obteniendo valores de weack maps
    console.log(wm.get(llave1));
    console.log(wm.get(llave2));
    console.log(wm.get(llave3));
//elimienando valores
    wm.delete(llave2);
    console.log(wm);
//agregando valores
    wm.set(llave2, 2)
    wm.set(llave3, 3)
//imprimiendo weak maps  
    console.log(wm);
//imprimir cada cinco segundos
    setInterval(() => console.log(wm), 1000);
    setTimeout(() => {
      llave1 = null;
      llave2 = null;
      llave3 = null;
    }, 5000); 

}

//iterables e interadores

function iteraBlesTor(){

    const iterable = [1, 2, 3, 4, 5];
    //const iterable = "Hola Mundo";
    //const iterable = new Set([1, 2, 3, 3, 4, 5]);
    //const iterable = new Map([["nombre", "jon"], ["edad", 35]]);
    //Accedemos al iterador del iterable
    const iterador = iterable[Symbol.iterator]();
    console.log(iterable);
    console.log(iterador);
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    let next = iterador.next();
    while (!next.done) {
      console.log(next.value);
      next = iterador.next();
    } 

}

// generadores

function gen(){

    function* iterable() {
// los yields son returns guardan un daton y los puedes guardar en una variable
        yield "hola1";
        console.log("Hola 2");
        yield "hola 3";
        console.log("hola 4");
        yield "hola 5";
        yield "hola 6";
      }
      let iterador = iterable();
      //console.log(iterador.next());
      //console.log(iterador.next());
      //console.log(iterador.next());
      //console.log(iterador.next());
      //console.log(iterador.next());
      for (let Y of iterador) {
        console.log(Y);
      }
//guardando los datos de los yields en una variable
      const arr = [...iterable()];
      console.log(arr);

//Asincronia con los generadores
     function cuadrado(valor) {
        setTimeout(() => {
          return console.log({ valor, resultado: valor * valor })
        }, /*que imprima en un tiempo de "un numero aleatorio multiplicado por mil"*/Math.random() * 5000);
      }

      function* generador() {
        console.log("Inicia Generator");
        yield cuadrado(0);
        yield cuadrado(1);
        yield cuadrado(2);
        yield cuadrado(3);
        yield cuadrado(4);
        yield cuadrado(5);
        console.log("Termina Generator");
      }
      let gen = generador();
      for (let y of gen) {
        console.log(y);
      } 

}
//proxis
function proxis(){

    const persona = {
        nombre: "",
        apellido: "",
        edad: 0
      }
      const manejador = {
        set(obj, prop, valor) {
          if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`La propiedad "${prop}" no existe en el objeto persona.`);
          }
          if (
            (prop === "nombre" || prop === "apellido") &&
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
          ) {
            return console.error(`La propiedad "${prop}"" sólo acepta letras y espacios en blanco`);
          }
          obj[prop] = valor;
        }
      }
      const jon = new Proxy(persona, manejador);
      jon.nombre = "Jon";
      jon.apellido = "MirCha";
      jon.edad = 35;
      jon.twitter = "@jonmircha";
      console.log(jon);
      console.log(persona); 

}


/*sets()
maps()
weakSetMaps()
iteraBlesTor()
gen()
proxis()
*/