//agradecimientos
creator = "Yoimar Andres julio Salcedo"
creatorC = "Yoimar"
console.log(`Esta pagina fue creada por ${creator}`);
//modo oscuro
let botonWBback = document.getElementById("botonWBback");
let tema = document.getElementById("tema");
let temaH = document.getElementById("temaH");
let botonWBcircle = document.getElementById("botonWBcircle")

botonWBback.addEventListener("click", bgtema);

function bgtema(){
    tema.classList.toggle("tema-oscuro");
    temaH.classList.toggle("temaHoscuro");

    if(tema.classList.contains("tema-oscuro")){
        botonWBcircle.style.right = "10%"
    }
    else{
        botonWBcircle.style.right = "40%"
    }
}