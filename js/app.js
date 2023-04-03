function actualizarReloj() {

    let reloj = document.querySelector("#reloj");

    let ahora = new Date();
    let dia = ahora.getDate();
    let mes = ahora.getMonth();
    let año = ahora.getFullYear();
    let ampm;
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    let diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let diaDeLaSemana = diasDeLaSemana[ahora.getDay()];

    let mesesDelAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre","Diciembre"]
    let mesDelAño = mesesDelAño[mes]

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
        ampm = "PM";
    }  else {
        ampm = "AM";
    }


    reloj.innerHTML = `
                <div class=" bg-dark text-white bg-opacity-75 p-2 mb-2">
                    <p class="fs-5 fw-bold m-0">
                        <span>${diaDeLaSemana}  </span>
                        <span>${dia}</span>
                        <span> de </span>
                        <span>${mesDelAño}  </span>
                        <span> del </span>
                        <span>${año}  </span>
                    </p>
                </div>
                <div class=" bg-dark text-white bg-opacity-75 p-2 mt-2">
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
                `;
}


setInterval(actualizarReloj, 1000);