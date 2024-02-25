

/*function cambiarImagen(src) {
  document.getElementById('main-image').src = src;
}*/

const imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg"];
const titulos = ["Título imagen 1", "Título imagen 2", "Título imagen 3", "Título imagen 4"];
let indiceActual = 0;

function mostrarImagen(indice) {
    document.getElementById('image-title').textContent = titulos[indice];
  document.getElementById('main-image').src = imagenes[indice];
  
}

function imagenAnterior() {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indiceActual);
}

function imagenSiguiente() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarImagen(indiceActual);
}

// Mostrar la primera imagen al cargar la página
mostrarImagen(indiceActual);
