const form = document.querySelector("[data-login]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-login-usuario]").value;
  const password = document.querySelector("[data-login-password]").value;

  if (email.length > 5 && password.length > 5) {
    window.location.href = "../screens/admin-productos.html";
  } else {
    alert("email y contraseña deben tener mas de 5 caracteres.");
  }
});