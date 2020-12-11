var divCrear = document.querySelector('header');
let id_registro = 1;
let boton = document.getElementById('boton');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let domicilio = document.getElementById('domicilio');
let fechaCum = document.getElementById('cumple');
let crearli = document.getElementById('contactos');
let contactos = new Array();


//Toma los datos desde el localStorage y los usa para personalizar la agenda
function presentacion() {
    let titulo =document.createElement('h1');
    titulo.setAttribute('id', "presentacion");
    let nombreApellido = localStorage.getItem("nombre") + " " +localStorage.getItem("apellido");
    console.log(nombreApellido);
    let texto = document.createTextNode("Contactos de " + nombreApellido);
    titulo.appendChild(texto);
  
    divCrear.insertBefore(titulo, divCrear.childNodes[0]);
}

//Accede al color seleccionado guardado en LocalStorage y lo aplica de fondo
function cambiarTema() {
    let theme = document.getElementById('fondo');
    let valor = localStorage.getItem("colorEnviado");
     
     theme.style.background = valor;

    console.log(valor);
}

cambiarTema();
presentacion();

function validarCamposIngreso(name, surname, email, birthday) {
    if(name.value == '') {
        name.setCustomValidity('Complete el nombre');
        name.style.border = '3px solid red';
    } else if (surname.value == '') {
        surname.setCustomValidity('Complete el apellido');
        surname.style.border = '3px solid red';
        name.setCustomValidity('');
        name.style.border = 'none';
        name.style.borderBottom = '1px solid #182026';
    } else if (email.value == '') {
        email.setCustomValidity('Complete el Correo');
        email.style.border = '3px solid red';
        name.setCustomValidity('');
        name.style.border = 'none';
        name.style.borderBottom = '1px solid #182026';
        surname.setCustomValidity('');
        surname.style.border = 'none';
        surname.style.borderBottom = '1px solid #182026';
    } else if (birthday.value == '') {
        birthday.setCustomValidity('Complete fecha de nacimiento');
        birthday.style.border = '3px solid red';
        name.setCustomValidity('');
        name.style.border = 'none';
        name.style.borderBottom = '1px solid #182026';
        surname.setCustomValidity('');
        surname.style.border = 'none';
        surname.style.borderBottom = '1px solid #182026';
        email.setCustomValidity('');
        email.style.border = 'none';
        email.style.borderBottom = '1px solid #182026';
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
        birthday.setCustomValidity('');
        birthday.style.border = 'none';
        birthday.style.borderBottom = '1px solid #182026';
    }
}

function agregarContacto(id, name, surname, email, adress, birthday) {
 
    let contacto = [id, surname + ", " + name, email, adress, birthday];


    let nuevoContacto = document.createElement('ul');
    
    for (let i = 0; i < contacto.length; i++) {
        let nuevaColumna = document.createElement('li');
        nuevoContacto.appendChild(nuevaColumna);
        let info = document.createTextNode(contacto[i]);
        
        nuevaColumna.appendChild(info);
        crearli.insertBefore(nuevoContacto, crearli.lastChild);
    }
    
        id_registro++  
        
        swal({
            title: "Listo!",
            text: "El contacto se ha agregado correctamente",
            icon: "success",
            button: "Aceptar",
          });
          
}


function limpiarRegistros() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('domicilio').value = "";
    document.getElementById('cumple').value = "";
}

document.addEventListener("focusout", function (){validarCamposIngreso(nombre, apellido, correo, fechaCum)}, false);

boton.addEventListener('click', function(e) { 
    if (nombre.value == "" || apellido.value =="" || correo.value =="" || fechaCum.value =="") {
        validarCamposIngreso(nombre, apellido, correo, fechaCum);
    } else {   
    e.preventDefault();
    agregarContacto(id_registro, nombre.value, apellido.value, correo.value, domicilio.value, fechaCum.value);
    limpiarRegistros();
    }
});


