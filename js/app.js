function actualizarReloj() {

    let reloj = document.querySelector("#reloj");

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

    reloj.innerHTML = `
                <div class=" bg-dark text-white bg-opacity-50 p-2 mb-2">
                    <p class="fs-5 fw-bold m-0">
                        <span>${diaDeLaSemana}  </span>
                        <span>${dia}</span>
                        <span> de </span>
                        <span>${nombreMes}  </span>
                        <span> del </span>
                        <span>${año}  </span>
                    </p>
                </div>
                <div class=" bg-dark text-white bg-opacity-50 p-2 mt-2">
                   <aside class="d-flex justify-content-center">
                     <div class="d-flex flex-column justify-content-center">
                        <p class=" nroGrande my-auto">${horas}</p>
                     </div>
                     <div class="d-flex flex-column justify-content-center">
                        <p class=" fs-1 mx-2  my-auto " >:</p>
                     </div>
                     <div class="d-flex flex-column justify-content-center">
                        <p class=" nroGrande my-auto">${minutos}</p>
                     </div>
                     <div class="d-flex flex-column justify-content-center">
                        <p class=" fs-1 mx-2  my-auto ">:</p>
                     </div>
                     <div class="d-flex flex-column justify-content-center">
                        <p class="fs-6 m-0 fw-bold ">${ampm}</p>
                        <p class="fs-6 m-0 fw-bold ">${segundos}</p>
                     </div>
                   </aside>
                </div>
                `


}


setInterval(actualizarReloj, 1000);