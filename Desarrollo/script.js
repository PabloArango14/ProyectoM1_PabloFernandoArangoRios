const botonPrincipal = document.getElementById("botonPrincipal");

botonPrincipal.addEventListener("click", function () {
  console.log("presionaste el botón principal");
});

const contenedorPadreColores = document.getElementById(
  "espacio-contenedores-colores",
);

const botonSeisColores = document.querySelector(".boton-seis-colores");

botonSeisColores.addEventListener("click", function () {
  contenedorPadreColores.innerHTML = "";
  for (let index = 0; index < 6; index++) {
    const contenedorHijo = document.createElement("div");
    contenedorPadreColores.appendChild(contenedorHijo);
    contenedorHijo.textContent = "Aquí va el color aleatorio";
  }

  console.log("Vas a crear 6 colores aleatorios");
});

const botonOchoColores = document.querySelector(".boton-ocho-colores");

botonOchoColores.addEventListener("click", function () {
  contenedorPadreColores.innerHTML = "";
  for (let index = 0; index < 8; index++) {
    const contenedorHijo = document.createElement("div");
    contenedorPadreColores.appendChild(contenedorHijo);
    contenedorHijo.textContent = "Aquí va el color aleatorio";
  }
  console.log("Vas a crear 8 colores aleatorios");
});

const botonNueveColores = document.querySelector(".boton-nueve-colores");

botonNueveColores.addEventListener("click", function () {
  contenedorPadreColores.innerHTML = "";
  for (let index = 0; index < 9; index++) {
    const contenedorHijo = document.createElement("div");
    contenedorPadreColores.appendChild(contenedorHijo);
    contenedorHijo.textContent = "Aquí va el color aleatorio";
  }

  console.log("Vas a crear 9 colores aleatorios");
});
