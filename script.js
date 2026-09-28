const botonCargar = document.getElementById("boton-cargar");
const botonTema = document.getElementById("boton-tema");

function cargarCatalogo() {
  fetch("productos.json")
    .then(respuesta => respuesta.json())
    .then(datos => {
      let htmlAcumulado = "";

      datos.forEach(item => {
        htmlAcumulado += `<div class="tarjeta">`;
        htmlAcumulado += `<h3>${item.titulo}</h3>`;
        htmlAcumulado += `<p>${item.descripcion}</p>`;
        htmlAcumulado += `<p>${item.detalles}</p>`;
        htmlAcumulado += `</div>`;
      });

      document.getElementById("contenedor").innerHTML = htmlAcumulado;
    })
    .catch(() => {
      document.getElementById("contenedor").innerHTML =
        "<p>No se pudo cargar el catálogo.</p>";
    });
}

botonCargar.addEventListener("click", cargarCatalogo);

botonTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-oscuro");
});