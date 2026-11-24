const botonPrincipal = document.getElementById("botonPrincipal");
const contenedorPadreColores = document.getElementById(
  "espacio-contenedores-colores",
);
botonPrincipal.addEventListener("click", function () {
  if (contenedorPadreColores.innerHTML === "") {
    alert("Primero debes seleccionar cuántos colores quieres generar");
  } else {
    const contenedoresColores = document.querySelectorAll(".contenedor-color");
    for (let index = 0; index < contenedoresColores.length; index++) {
      contenedoresColores[index].style.backgroundColor = "#1e1e1e";
    }
  }
});

const botonSeisColores = document.querySelector("#boton-seis-colores");

botonSeisColores.addEventListener("click", function () {
  contenedorPadreColores.innerHTML = "";
  for (let index = 0; index < 6; index++) {
    const contenedorHijo = document.createElement("div");
    contenedorHijo.className = "contenedor-color";
    contenedorPadreColores.appendChild(contenedorHijo);
    contenedorHijo.textContent = "Aquí va el color aleatorio";
  }

  console.log("Vas a crear 6 colores aleatorios");
});

const botonOchoColores = document.querySelector("#boton-ocho-colores");

botonOchoColores.addEventListener("click", function () {
  contenedorPadreColores.innerHTML = "";
  for (let index = 0; index < 8; index++) {
    const contenedorHijo = document.createElement("div");
    contenedorHijo.className = "contenedor-color";
    contenedorPadreColores.appendChild(contenedorHijo);
    contenedorHijo.textContent = "Aquí va el color aleatorio";
  }
  console.log("Vas a crear 8 colores aleatorios");
});

const botonNueveColores = document.querySelector("#boton-nueve-colores");

botonNueveColores.addEventListener("click", function () {
  contenedorPadreColores.innerHTML = "";
  for (let index = 0; index < 9; index++) {
    const contenedorHijo = document.createElement("div");
    contenedorHijo.className = "contenedor-color";
    contenedorPadreColores.appendChild(contenedorHijo);
    contenedorHijo.textContent = "Aquí va el color aleatorio";
  }

  console.log("Vas a crear 9 colores aleatorios");
});

const botonBorrar = document.getElementById("borrar-contenedores-de-colores");

botonBorrar.addEventListener("click", function () {
  contenedorPadreColores.innerHTML = "";
});
