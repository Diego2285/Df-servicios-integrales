//Funcion typewriter
const app=document.getElementById('typewriter');

const typewriter= new Typewriter(app,{
    loop: true,
    delay: 75
});

typewriter
.typeString('Servicio integral de Mantenimiento y Seguridad e Higiene.')
.pauseFor(200)
.start();

//validacion Formulario
document.getElementById("miFormulario").addEventListener("submit", function (event) {
  // Validar campos de correo electrónico y nombre (requeridos)
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!email || !name || !phone || !message) {
    alert("Por favor, complete los campos de correo electrónico,nombre,telefono y mensaje.");
    event.preventDefault(); // Evita que el formulario se envíe si faltan datos.
  } else {
    // Pedir confirmación antes de enviar
    const confirmacion = confirm("¿Está seguro de que desea enviar el formulario?");
    if (!confirmacion) {
      event.preventDefault(); // Evita que el formulario se envíe si el usuario no confirma.
    }
  }
});