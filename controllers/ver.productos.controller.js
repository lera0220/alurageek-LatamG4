

export const Mostrarproducto=(nombre, imagen,precio,descripcion,categoria) =>{
  const productoCard=document.createElement("div");
  productoCard.className="producto__card";
  const contenido= `
      <div class="producto__card__imagen" style="background-Image: url(${imagen})"></div>
      <h3 class="producto__card__titulo">${nombre}</h3>
      <p class="producto__card__precio">${precio}</p>
      <a class="producto__card__boton" href="../screens/ver-producto.html?id=${id}">Ver producto</a>   
          `;
        productoCard.innerHTML=contenido;
          return productoCard;
}


