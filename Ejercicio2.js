

const btn = document.getElementById("btn");
btn.addEventListener("click" , function(){

    //Obtengo el input donde el usuario escribio la palabra
    const inputUser = document.getElementById("palabra");

    //console.log(inputUser.value);

    //Creo un nuevo div que se mostrará
    const resultado = document.createElement("DIV");
    resultado.innerHTML = `
        <p> El texto invertido es  : <b> ${inputUser.value} </b><p>
        `
    const body = document.querySelector("body");
    body.appendChild(resultado);
});