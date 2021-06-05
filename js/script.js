
var nombre = document.getElementById('fname');
var apellido = document.getElementById('lname');
var correo = document.getElementById('email');
var fono = document.getElementById('phone');
var error = document.getElementById('error');
error.style = 'red';

function enviarFormulario(){
console.log('Enviado Formulario....');

var mensajesError = [];

if(nombre.value === null || nombre.value === ''){
mensajesError.push('Ingresa tu Nombre');
}
if(apellido.value === null || apellido.value === ''){
    mensajesError.push('Ingresa tu Apellido');
}
if(correo.value === null || correo.value === ''){
mensajesError.push('Ingresa tu Email');
}
if(fono.value === null || fono.value === ''){
mensajesError.push('Ingresa tu Telefono');
}

error.innerHTML = mensajesError.join(', ');
return false;

}