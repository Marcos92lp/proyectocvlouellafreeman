document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-enlace'); // Obtén todos los enlaces de navegación

  // Agrega un evento de clic a cada enlace de navegación
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Evita la acción predeterminada del enlace

      // Obtén el texto del enlace clicado
      const sectionId = link.textContent.toLowerCase().replace(' ', '-');

      // Oculta todas las secciones
      const sections = document.querySelectorAll('section');
      sections.forEach(function (section) {
        section.classList.add('hidden'); // Agregar una clase "hidden" a todas las secciones
      });

      // Muestra la sección correspondiente al enlace clicado
      const selectedSection = document.querySelector(`#${sectionId}`);
      if (selectedSection) {
        selectedSection.classList.remove('hidden'); // Quita la clase "hidden" de la sección seleccionada
      }
    });
  });
});

var e = document.getElementById("watchme");
e.addEventListener("animationstart", listener, false);
e.addEventListener("animationend", listener, false);
e.addEventListener("animationiteration", listener, false);

e.className = "slidein";

function listener(e) {
  var l = document.createElement("li");
  switch (e.type) {
    case "animationstart":
      l.innerHTML = "Iniciado: tiempo transcurrido " + e.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Finalizado: tiempo transcurrido " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "Nueva iteración comenzó a los " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}

// Generar un captcha al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  generateCaptcha();
});

// Función para generar un captcha
function generateCaptcha() {
  const captchaResult = document.getElementById('captchaResult');
  const captchaValue = Math.floor(1000 + Math.random() * 9000); // Genera un número aleatorio de 4 dígitos
  captchaResult.textContent = `(${captchaValue})`;
}

// Función para validar el captcha al enviar el formulario
function validateCaptcha(inputValue) {
  const captchaResult = document.getElementById('captchaResult').textContent;
  return inputValue.trim() === captchaResult.trim();
}

// Función para enviar el formulario
function submitForm() {
  const nameInput = document.getElementById('Nombre');
  const lastNameInput = document.getElementById('Apellido');
  const emailInput = document.getElementById('Email');
  const phoneInput = document.getElementById('Telefono');
  const messageInput = document.getElementById('mensaje');
  const captchaInput = document.getElementById('captcha');

  if (validateCaptcha(captchaInput.value)) {
    // Realizar alguna acción con los datos del formulario (puedes ajustar según tus necesidades)
    alert(`Formulario enviado:\nNombre: ${nameInput.value}\nApellido: ${lastNameInput.value}\nCorreo Electrónico: ${emailInput.value}\nTeléfono: ${phoneInput.value}\nMensaje: ${messageInput.value}`);
    
    // Limpiar el formulario
    nameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    messageInput.value = '';
    captchaInput.value = '';

    // Generar un nuevo captcha
    generateCaptcha();
  } else {
    alert('Captcha incorrecto. Intenta de nuevo.');
  }
}


