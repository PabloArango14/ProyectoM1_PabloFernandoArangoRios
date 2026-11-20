const botonPrincipal = document.getElementById("botonPrincipal");

botonPrincipal.addEventListener("click", function () {
  console.log("presionaste el botón principal");
});

const botonSeisColores = document.querySelector(".boton-seis-colores");

botonSeisColores.addEventListener("click", function () {
  console.log("Vas a crear 6 colores aleatorios");
});

const botonOchoColores = document.querySelector(".boton-ocho-colores");

botonOchoColores.addEventListener("click", function () {
  console.log("Vas a crear 8 colores aleatorios");
});

const botonNueveColores = document.querySelector(".boton-nueve-colores");

botonNueveColores.addEventListener("click", function () {
  console.log("Vas a crear 9 colores aleatorios");
});
