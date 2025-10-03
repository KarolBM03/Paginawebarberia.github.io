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
