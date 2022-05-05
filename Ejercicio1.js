//Ejercicio 1

function indicadorDia() {
    const d = new Date();
    let day = d.getDay();
    let nombre = "";
    switch (day){
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
    console.log('El día de hoy es '+ nombre);
}

indicadorDia();
