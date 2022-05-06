

const btn = document.getElementById("btn");
btn.addEventListener("click" , function(){

    //Obtengo el input donde el usuario escribio la palabra
    const inputUser = document.getElementById("palabra");

    //console.log(inputUser.value);

    //Creo un nuevo div que se mostrará
    const resultado = document.createElement("DIV");

    //Cpaturo e invierto el texto ingresado por el usuario
    //const texto  ;
    

    //
    resultado.innerHTML = `
        <p>El texto invertido es  : <b>  </b></p>
        `

    //Agrego el nuevo elemento al body
    const body = document.querySelector("body");
    body.appendChild(resultado);
});



function revertirTexto (texto){
    //Separo el String en un arreglo
    const textoInvertido = texto.split("");
    //Invierto sus elementos
    textoInvertido.reverse();
    //Los vuelvo a unir en un string
    return textoInvertido.join("");
}