import { clienteServices } from "../services/cliente.services.js";
import { MostrarProductos } from "./mostrar.productos.controller.js";

//Capturando la seccion de productos star wars
const productosCombos = document.querySelector("[data-combos]");
//Capturando la seccion de consolas
const productosHamburguesas = document.querySelector("[data-hamburguesas]");
//Capturando la seccion de consolas
const productosPizzas = document.querySelector("[data-pizzas]");

const productosBebidas = document.querySelector("[data-bebidas]");

//Recorrer los datos traidos del JSON
clienteServices.listaProductos().then(data => {
  data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
    //Imprimir datos en el index
    if(categoria === "Combos"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosCombos.appendChild(nuevoProducto);
    }else if(categoria === "Hamburguesas"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosHamburguesas.appendChild(nuevoProducto);
    }else if(categoria === "Pizzas"){
        const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
        productosPizzas.appendChild(nuevoProducto);
    }else if(categoria === "Bebidas"){
        const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
        productosBebidas.appendChild(nuevoProducto);
    }
  });
})
