let peticion = new XMLHttpRequest();
let datos = document.querySelector('#formulario');
let mensaje = document.querySelector('#mensaje-cont');


datos.addEventListener('submit', (e) => {

    let form = new FormData(datos);

    peticion.open('POST','php/data.php');
    peticion.onload = () => {
        if (peticion.status == 200) {

            

            // datosForm = JSON.parse(peticion.responseText);
            datosForm = peticion.responseText;
            console.log(datosForm);
            // mensaje = JSON.parse(peticion.responseText);
            if (datosForm === 'Registro exitoso') {
                mensaje.innerHTML = `<div class="mensaje" >
                                        <i class="far fa-check-circle ff"></i>
                                            <p>Registro exitoso</p>
                                    </div>`;
            }else{
                mensaje.innerHTML = `<div class="mensaje-error" >
                                        <i class="far fa-times-circle ffe"></i>
                                            <p>Error en el registro</p>
                                    </div>`;
            }

        } else {
            console.log('Error en la peticón: ' + peticion.status);

        }
    }
    peticion.send(form);
    e.preventDefault();
    datos.reset();
});