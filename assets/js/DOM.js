//DOM generador

/*
setTimeout(() => {document.write( "No debiste activar esto" )},2000 )
*/ 


//SELECTORES DEL DOM
function derrumbe(){

    const $TODO = document.querySelector("body")
    //de este modo endremos que señalar si llamamos una clase"."", un elemento o un id ""# 
    //o simplemente por la etiqueta
    //para ids
    const $tOdO = document.querySelector("#tema")
    //par clases
    const $TOdo = document.querySelector(".tema")
    //si son todas las etiquetas o ids o clases
    const $todO = document.querySelectorAll("body")

    //tambien se puede hacer con estas opciones
    const $TOdoo = document.getElementsByTagName(".body")
    const $Todo = document.getElementById("tema")
    const $ToDo = document.getElementsByClassName("tema")
    const $todo = document.getElementsByName("tema")


    alert("DERRUMBARE LA PAGINA EN 3")
    alert("DERRUMBARE LA PAGINA EN 2")
    alert("DERRUMBARE LA PAGINA EN 1")
    alert("YAAAAAAAAAAAAAAAAAAAAAAAA")

    $TODO.style.display ="none"
    setTimeout(() => { alert("JAJAJA recarga la pagina para seguir viendola")},2000 )
    
}
//Estilos con DOM

function colorchanged(){

    //de esta forma cambiaomos los estilos de las etiquetas

    let tema = document.querySelector("body");

    CF = prompt("cual es tu color favorito?\nten en cuenta que actualmente solo reconocemos los colores si los escribes en ingles, puedes guiarte de algun traductor")
    tema.style.backgroundColor = CF

} 