// Lightbox
const imagenes = document.querySelectorAll(".foto img");
const lightbox = document.getElementById("lightbox");
const imgAmpliada = document.getElementById("img-ampliada");
const cerrar = document.querySelector(".cerrar");

imagenes.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    imgAmpliada.src = img.src;
  });
});

cerrar.addEventListener("click", () => (lightbox.style.display = "none"));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});

// Formulario de contacto
document
  .getElementById("form-contacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    if (nombre === "" || email === "" || mensaje === "") {
      alert("⚠️ Por favor, completa todos los campos.");
      return;
    }
    let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!regexEmail.test(email)) {
      alert("⚠️ Por favor, ingresa un correo válido.");
      return;
    }
    alert(
      "✅ ¡Gracias por contactarnos, " + nombre + "! Te responderemos pronto."
    );
    document.getElementById("form-contacto").reset();
  });

// Menú responsive
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});

// ==== EFECTO FANTASMA AL HACER SCROLL ====
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 120; // Cuánto antes aparece

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active"); // opcional si quieres que desaparezcan al subir
    }
  });
}

window.addEventListener("scroll", revealElements);

// Llamada inicial al cargar
revealElements();

// Enviar formulario con EmailJS
document
  .getElementById("form-contacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tyosrlg", // 🔹 Tu Service ID
        "template_eagj2eb", // 🔹 Tu Template ID
        this,
        "_ahx23zob7VSnYyLk" // 🔹 Tu User ID (Public Key)
      )
      .then(
        function () {
          alert("✅ ¡Mensaje enviado con éxito!");
          document.getElementById("form-contacto").reset();
        },
        function (error) {
          alert("❌ Ocurrió un error: " + JSON.stringify(error));
        }
      );
  });
