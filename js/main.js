let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let boton = document.getElementById('boton');
var color = document.getElementById('color');

//Validación personalizada de los formularios
function validarCamposIngreso(name, surname, email) {

    if (name.value == '') {
        name.setCustomValidity('Complete su nombre');
        name.style.border = '3px solid red';
    } else if (surname.value == '') {
        surname.setCustomValidity('Complete su apellido');
        surname.style.border = '3px solid red';
        name.setCustomValidity('');
        name.style.border = 'none';
        name.style.borderBottom = '1px solid #182026';
    } else if (email.value == '') {
        email.setCustomValidity('Complete su Correo');
        email.style.border = '3px solid red';
        name.setCustomValidity('');
        name.style.border = 'none';
        name.style.borderBottom = '1px solid #182026';
        surname.setCustomValidity('');
        surname.style.border = 'none';
        surname.style.borderBottom = '1px solid #182026';
    } else {
        name.setCustomValidity('');
        name.style.border = 'none';
        name.style.borderBottom = '1px solid #182026';
        surname.setCustomValidity('');
        surname.style.border = 'none';
        surname.style.borderBottom = '1px solid #182026';
        email.setCustomValidity('');
        email.style.border = 'none';
        email.style.borderBottom = '1px solid #182026';
    }
}


//Mensaje de alerta sobre campo vacio al salir del input
document.addEventListener("focusout", function() { validarCamposIngreso(nombre, apellido, correo) }, false);



boton.addEventListener('click', function(e) {
    //Si los campos están en blanco, vacia el localStorage y ejecuta la función de validación 
    if (nombre.value == "" || apellido.value == "" || correo.value == "") {
        localStorage.removeItem("colorEnviado");
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        validarCamposIngreso(nombre, apellido, correo);
    } else {
        //Si los campos estan completos, guarda la información de cada input en el localStorage
        localStorage.setItem("colorEnviado", color.value);
        localStorage.setItem("nombre", nombre.value);
        localStorage.setItem("apellido", apellido.value);
        window.document.location = './index.html';
    }
});