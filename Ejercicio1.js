//Ejercicio 1

//La función nos indica el día actual
function indicadorDia() {

    //d es la fecha actual (hoy) 
    const d = new Date();

    /*day nos da el número de día actual
     *domingo = 0
     *lunes = 1
     *Para todos los días de la semana
     * */
    let day = d.getDay();

    //El nombre contendrá nuestro día de semana
    let nombre = "";
    //De acuerdo al día actual se asignará un nombre
    switch (day) {
        case 0:
            nombre = "domingo";
            break;
        case 1:
            nombre = "lunes";
            break;
        case 2:
            nombre = "martes";
            break;
        case 3:
            nombre = "miércoles";
            break;
        case 4:
            nombre = "jueves";
            break;
        case 5:
            nombre = "viernes";
            break;
        case 6:
            nombre = "sábado";
            break;
    }
    //mostramos en consola
    console.log("El día de hoy es " + nombre);
}

indicadorDia();
