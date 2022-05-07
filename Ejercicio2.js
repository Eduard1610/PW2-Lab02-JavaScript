

const btn = document.getElementById("btn");
btn.addEventListener("click" , function(){

    //Obtengo el input donde el usuario escribio la palabra
    const inputUser = document.getElementById("palabra");

    //Cpaturo e invierto el texto ingresado por el usuario
    const texto  = revertirTexto(inputUser.value);

    //Reemplazo el texto en el parrafo
    document.getElementById("resultado").innerHTML = texto;
});



function revertirTexto (texto){
    //Separo el String en un arreglo
    const textoInvertido = texto.split("");
    //Invierto sus elementos
    textoInvertido.reverse();
    //Los vuelvo a unir en un string
    return textoInvertido.join("");
}