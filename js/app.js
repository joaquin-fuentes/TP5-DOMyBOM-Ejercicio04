function updateClock() {
    let now = new Date();

    let day = now.getDate();
    let month = now.getMonth() + 1;
    let nombreMes
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let dayOfWeek = daysOfWeek[now.getDay()];

    // Formatea los valores para que se muestren con un 0 delante si son menores que 10
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    switch (month) {
        case 1:
            nombreMes = "Enero"
           break;
        case 2:
            nombreMes = "Febrero"
           break;
        case 3:
            nombreMes = "Marzo"
           break;
        case 3:
            nombreMes = "Abril"
           break;
        case 3:
            nombreMes = "Mayo"
           break;
        case 3:
            nombreMes = "Junio"
           break;
        case 3:
            nombreMes = "Julio"
           break;
        case 3:
            nombreMes = "Agosto"
           break;
        case 3:
            nombreMes = "Septiembre"
           break;
        case 3:
            nombreMes = "Octubre"
           break;
        case 3:
            nombreMes = "Noviembre"
           break;
        case 3:
            nombreMes = "Diciembre"
           break;
        default:
            alert("El numero del mes no coincide con ningun nomre de mes válido")
        break;
    }

    // Actualiza el contenido HTML de los elementos correspondientes
    document.getElementById("numeroDia").innerHTML = day;
    document.getElementById("nombreMes").innerHTML = nombreMes;
    document.getElementById("año").innerHTML = year;

    document.getElementById("horas").innerHTML = hours;
    document.getElementById("minutos").innerHTML = minutes;
    document.getElementById("segundos").innerHTML = seconds;
    document.getElementById("nombreDia").innerHTML = dayOfWeek;
}


setInterval(updateClock, 1000);