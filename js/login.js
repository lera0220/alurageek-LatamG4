const form = document.querySelector("[data-login]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-login-usuario]").value;
  const password = document.querySelector("[data-login-password]").value;

  if (email.length > 5 && password.length > 5) {
        Swal.fire({
        icon: 'success',
        title: 'Login Exitoso',
        showConfirmButton: false,
        timer: 1500
      })
  
      setTimeout(function(){
        window.location.href = "../screens/admin-productos.html";
      }, 2000);
      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Datos incorrectos',
        text: 'Usuario y Contraseña deben tener mas de 5 letras'
      })
    }
});