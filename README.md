# Generador de Colores Aleatorios 🎨

Este es mi proyecto del primer módulo de desarrollo web. Es una aplicación sencilla hecha con HTML, CSS y JavaScript puro que permite crear cuadros de colores aleatorios en formato RGB con un par de clics.

## ¿Cómo se usa la aplicación?

El funcionamiento es muy intuitivo y sigue tres pasos básicos:

1. **Elegir la cantidad de colores:** Presiona alguno de los botones numéricos (`6`, `8` o `9`) para indicar cuántos cuadros quieres ver en pantalla. Al hacerlo, aparecerán los contenedores vacíos esperando su color.
2. **Generar los colores:** Haz clic en el botón azul **"Genera un color"**. Cada cuadro cambiará a un color aleatorio y mostrará su código `rgb(r, g, b)` en el centro. Si intentas presionar este botón sin haber elegido una cantidad antes, aparecerá una alerta avisándote.
3. **Limpiar la pantalla:** Si quieres empezar de cero, presiona el botón rojo **"Borrar"** para eliminar todos los cuadros generados.

---

## Estructura del proyecto

El proyecto está dividido en tres archivos principales para mantener ordenado el contenido, el diseño y la lógica:

- `index.html`: Contiene la estructura de la página, los textos de ayuda, los botones y el espacio vacío (`#espacio-contenedores-colores`) donde se van insertando los cuadros.
- `style.css`: Se encarga de los estilos visuales, colores de los botones y el acomodo de los cuadros.
- `script.js`: Tiene toda la programación en JavaScript para escuchar los clics, crear elementos nuevos en el HTML y calcular los colores al azar.

---

## Decisiones técnicas (¿Por qué lo hice así?)

Como parte de lo que aprendí en este módulo, tomé estas decisiones para resolver el problema:

- **Creación dinámica en el DOM:** En lugar de escribir los 6, 8 o 9 cuadros fijos en el HTML, decidí crearlos desde JavaScript usando `document.createElement("div")` y `appendChild()` dentro de un ciclo `for`. Así la página empieza limpia y solo muestra los cuadros que el usuario pide.
- **Limpieza antes de crear:** Cada vez que se presiona un botón de cantidad (6, 8 o 9), primero vacío el contenedor padre con `innerHTML = ""`. Esto evita que se acumulen cuadros nuevos encima de los anteriores.
- **Generación de colores RGB:** Para lograr colores aleatorios, creé la función `definirColor()`, que usa `Math.floor(Math.random() * 256)` tres veces para sacar los valores de rojo (R), verde (G) y azul (B) entre 0 y 255.
- **Validación básica:** Agregué un condicional `if` en el botón principal para revisar si el contenedor está vacío. Si no hay cuadros creados, muestro un `alert()` para guiar al usuario en lugar de que el botón parezca que no hace nada.
- **Diseño adaptable con Flexbox:** En el CSS usé `display: flex` y `flex-wrap: wrap` en el contenedor padre para que los cuadros de colores se acomoden uno al lado del otro y bajen automáticamente si no caben en el ancho de la pantalla.
- **Diferenciación visual de botones:** Usé colores distintos en CSS para que cada acción se entienda rápido: gris para elegir cantidad, azul para la acción principal de generar y rojo para borrar.

---

## Cómo ejecutar el proyecto en tu computadora

No necesitas instalar nada especial ni usar terminal para correr esta aplicación:

1. Descarga o clona este repositorio en tu computadora.
2. Asegúrate de que los tres archivos (`index.html`, `style.css` y `script.js`) estén dentro de la misma carpeta.
3. Haz doble clic sobre el archivo `index.html` para abrirlo en tu navegador favorito (Chrome, Edge, Firefox, etc.).
   _(Opcional: Si usas Visual Studio Code, puedes abrirlo con la extensión **Live Server**)._

---

## Pasos para desplegar la aplicación

Para subir esta página a internet de forma gratuita usando **GitHub Pages**, seguí estos pasos:

1. Crear un repositorio nuevo en GitHub y subir los archivos `index.html`, `style.css` y `script.js` a la rama principal (`main`).
2. Entrar a la pestaña **Settings** (Configuración) del repositorio en GitHub.
3. En el menú de la izquierda, entrar a la sección **Pages**.
4. En el apartado **Build and deployment** > **Branch**, seleccionar la rama `main` y dejar la carpeta en `/ (root)`.
5. Hacer clic en **Save** y esperar un par de minutos hasta que GitHub genere el enlace público de la página.
