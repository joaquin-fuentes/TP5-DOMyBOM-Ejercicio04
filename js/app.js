function actualizarReloj() {
    let ahora = new Date();

    let dia = ahora.getDate();
    let mes = ahora.getMonth() + 1;
    let año = ahora.getFullYear();
    let nombreMes
    let ampm
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    let diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let diaDeLaSemana = diasDeLaSemana[ahora.getDay()];

    // Formatea los valores para que se muestren con un 0 delante si son menores que 10
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    if (horas >= 12 && minutos >= 0 && segundos > 0){
        ampm = "PM"
    }  else {
        ampm = "AM"
    }

    switch (mes) {
        case 1:
            nombreMes = "Enero"
           break;
        case 2:
            nombreMes = "Febrero"
           break;
        case 3:
            nombreMes = "Marzo"
           break;
        case 4:
            nombreMes = "Abril"
           break;
        case 5:
            nombreMes = "Mayo"
           break;
        case 6:
            nombreMes = "Junio"
           break;
        case 7:
            nombreMes = "Julio"
           break;
        case 8:
            nombreMes = "Agosto"
           break;
        case 9:
            nombreMes = "Septiembre"
           break;
        case 10:
            nombreMes = "Octubre"
           break;
        case 11:
            nombreMes = "Noviembre"
           break;
        case 12:
            nombreMes = "Diciembre"
           break;
        default:
            alert("El numero del mes no coincide con ningun nomre de mes válido")
        break;
    }


    document.getElementById("numeroDia").innerHTML = dia;
    document.getElementById("nombreMes").innerHTML = nombreMes;
    document.getElementById("año").innerHTML = año;
    document.getElementById("am-pm").innerHTML = ampm;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
    document.getElementById("nombreDia").innerHTML = diaDeLaSemana;
    let dosPuntos = document.querySelectorAll("#dosPuntos");
    dosPuntos[0].innerHTML = ":";
    dosPuntos[1].innerHTML = ":";
}


setInterval(actualizarReloj, 1000);