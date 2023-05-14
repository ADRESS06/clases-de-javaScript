//Propiedades Dinamicas

function Dina(){


    let aleatorio = Math.round(Math.random() * 200);

        const objUsuarios = {
          propiedad: "Valor",
          [`id_${aleatorio}`]: "Valor Aleatorio"
        };
        console.log(objUsuarios);


        const usuarios = ["Yoimar", "Samuel", "Andres", "Julio"];
        usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);

        console.log(objUsuarios);

}

//this

function Th(){

    console.log(this);
        console.log(window);
        console.log(this === window);

        this.nombre = "Contexto Global";
        console.log(this.nombre);

        function imprimir() {
          console.log(this.nombre);
        }

        imprimir();

        const obj = {
          nombre: "Contexto Objeto",
          imprimir: function () {
            console.log(this.nombre);
          }
        }

        obj.imprimir();

        const obj2 = {
          nombre: "Contexto Objeto 2",
          imprimir
        }

        obj2.imprimir();

        const obj3 = {
          nombre: "Contexto Objeto 3",
          imprimir: () => {
            console.log(this.nombre);
          }
        }

        obj3.imprimir();

        function Persona(nombre) {
          const that = this;
          //this.nombre = nombre;
          that.nombre = nombre;

          //return console.log(this.nombre);

          //return function () {
          //console.log(this.nombre);
          //}

          //return () => console.log(this.nombre);

          return function () {
            console.log(that.nombre);
          }
        }

        let jon = new Persona("adress");
        adress();

}

// call, apply, bind

function callappbin(){

    console.log(this);
    this.lugar = "Contexto Global";

    function saludar(saludo, aQuien) {
      console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
    }

    saludar("Hola", "adress");

    const obj = {
      lugar: "Contexto Objeto"
    }

    saludar.call(obj, "Hola", "adress");
    saludar.call(null, "Hola", "adress");
    saludar.call(this, "Hola", "adress");
    saludar.apply(obj, ["Adios", "adres"]);
    saludar.apply(null, ["Adios", "adres"]);
    saludar.apply(this, ["Adios", "adres"]);

    this.nombre = "ubuntu";

    const persona = {
      nombre: "adress",
      saludar: function () {
        console.log(`Hola ${this.nombre}`)
      }
    }

    persona.saludar();

    const otraPersona = {
      saludar: persona.saludar.bind(this)
    }

    otraPersona.saludar(); 

}

//json
function jso(){

    const json = {
        cadena: "Jon",
        numero: 35,
        booleano: true,
        arreglo: ["correr", "programar", "cocinar"],
        objeto: {
          twitter: "@jonmircha",
          email: "jonmircha@gmail.com"
        },
        nulo: null
      }
  
      console.log(json);
  
      console.log(JSON);
  
// JSON.parse
      console.log(JSON.parse("{}"));
      console.log(JSON.parse("[1,2,3]"));
      console.log(JSON.parse("true"));
      console.log(JSON.parse("false"));
      console.log(JSON.parse("19"));
      console.log(JSON.parse('"Hola Mundo"'));
      console.log(JSON.parse("null"));
      //console.log(JSON.parse("undefined"));
      console.log(JSON.parse('{ "x": 2, "y": 3 }'));
  
// JSON.stringify
      console.log(JSON.stringify({}));
      console.log(JSON.stringify([1, 2, 3]));
      console.log(JSON.stringify(true));
      console.log(JSON.stringify(false));
      console.log(JSON.stringify(19));
      console.log(JSON.stringify("Hola Mundo"));
      console.log(JSON.stringify(null));
      console.log(JSON.stringify(undefined));
      console.log(JSON.stringify({ x: 2, y: 3 }));
  
      console.log("*** Ejemplo JSON ***");
      console.log(JSON.stringify(json));
  

}
 //Web apis

 function webapis(){
  
  console.log("######-- ALGUNAS DE LAS WEB APIS SON --######")
  console.log("DOM: Document Object Model")
  console.log("BOM: Browser Object Model")
  console.log("CSSOM: CSS Object Model")

 }

// Dina()
// Th()
// callappbin()
// jso()
// webapis()