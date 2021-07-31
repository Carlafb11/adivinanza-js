let respuestaBotonCorrecta = document.getElementById("boton1")
let respuestaBotonIncorrecta1 = document.getElementById("boton2")
let respuestaBotonIncorrecta2 = document.getElementById("boton3")
let respuestaTexto = document.getElementById("respuestaTexto")


let botonRespuestaCorrecta = () => {
  respuestaBotonCorrecta.style.backgroundColor = "green"
  respuestaTexto.textContent = '¡Respuesta correcta!'
  respuestaBotonIncorrecta1.disabled = true;
  respuestaBotonIncorrecta2.disabled = true;
}

let botonRespuestaIncorrecta1 = () => {
  respuestaBotonIncorrecta1.style.backgroundColor = "red"
  respuestaBotonIncorrecta2.style.backgroundColor = "red"
  respuestaBotonCorrecta.style.backgroundColor = "green"
  respuestaTexto.textContent = "¡Respuesta incorrecta!"
  respuestaBotonCorrecta.disabled = true;
  respuestaBotonIncorrecta2.disabled = true;
}

let botonRespuestaIncorrecta2 = () => {
  respuestaBotonIncorrecta2.style.backgroundColor = "red"
  respuestaBotonIncorrecta1.style.backgroundColor = "red"
  respuestaBotonCorrecta.style.backgroundColor = "green"
  respuestaTexto.textContent = "¡Respuesta incorrecta!"
  respuestaBotonCorrecta.disabled = true;
  respuestaBotonIncorrecta1.disabled = true;
}

respuestaBotonCorrecta.onclick = botonRespuestaCorrecta
respuestaBotonIncorrecta1.onclick = botonRespuestaIncorrecta1
respuestaBotonIncorrecta2.onclick = botonRespuestaIncorrecta2