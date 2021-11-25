let filtro = document.querySelector('#filtro');
let listaFiltro = document.querySelector('#listaFiltro');
let filtroDesplegableColores = document.querySelector('#colores');
let filtroDesplegableTallas = document.querySelector('#tallas');
let filtroDesplegablePrecio = document.querySelector('#precio');

const reiniciar = document.querySelector('#reiniciar');
const colores = document.querySelector('.ocultarColores');
const tallas = document.querySelector('.tallas');
const precio = document.querySelector('.precio');
console.log(filtroDesplegableColores);


filtro.addEventListener('click', () => {
  listaFiltro.classList.toggle('liDinamico');
  filtro.classList.toggle('rotacion');
})



filtroDesplegableColores.addEventListener('click', () => {
  colores.classList.toggle('liDinamicoColores');
  setTimeout(() => {
    colores.classList.toggle('ocultarDisplay');
  }, 800);
})
filtroDesplegableTallas.addEventListener('click', () => {
  tallas.classList.toggle('liDinamicoColores');
  setTimeout(() => {
    tallas.classList.toggle('ocultarDisplay');
  }, 800);
})
filtroDesplegablePrecio.addEventListener('click', () => {
  precio.classList.toggle('liDinamicoColores');
})


/***********  Agregar productos al carrito ***********/

const producto = document.querySelector('.card');
console.log(producto);
producto.addEventListener('submit', () => {
  console.log(producto);
})