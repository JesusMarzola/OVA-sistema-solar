function mostrarSeccion(id) {
  // Ocultar bienvenida y todas las secciones
  document.getElementById("bienvenida").style.display = "none";
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.classList.add("oculto"));

  // Mostrar la sección seleccionada
  const mostrar = document.getElementById(id);
  if (mostrar) {
    mostrar.classList.remove("oculto");
  }

  // Actualizar botón activo
  const botones = document.querySelectorAll(".sidebar button");
  botones.forEach(btn => btn.classList.remove("activo"));

  const botonActivo = document.querySelector(`.sidebar button[onclick*="${id}"]`);
  if (botonActivo) {
    botonActivo.classList.add("activo");
  }
}

let seccionAnterior = "";

function cargarIframe(url) {
  const iframePanel = document.getElementById("iframe-panel");
  const iframe = document.getElementById("visor-iframe");

  // Guardamos la sección visible antes de ocultarla
  const visibleSection = document.querySelector('.seccion:not(.oculto)');
  seccionAnterior = visibleSection?.id || "bienvenida";

  // Ocultar todas las secciones
  document.querySelectorAll('.seccion').forEach(s => s.classList.add('oculto'));

  // Mostrar panel del iframe ANTES de asignar src
  iframePanel.classList.remove("oculto");
  document.getElementById("btn-regresar").classList.remove("ocultar-boton");

  // Ahora sí asignamos la URL al iframe
  setTimeout(() => {
    iframe.src = url;
  }, 50);
}

function regresarASeccion() {
  const iframe = document.getElementById("visor-iframe");

  // Ocultar panel y borrar el src
  document.getElementById("iframe-panel").classList.add("oculto");
  iframe.src = "";
  document.getElementById("btn-regresar").classList.add("ocultar-boton");

  // Restaurar la sección anterior
  if (seccionAnterior) {
    document.getElementById(seccionAnterior).classList.remove("oculto");
  }
}

