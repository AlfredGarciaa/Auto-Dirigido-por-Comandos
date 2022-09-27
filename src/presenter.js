import {controladorDeAuto} from "./controlador_auto.js";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#controlador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const respuesta = controladorDeAuto(comandos.value);
  div.innerHTML = "<p>" + respuesta[0] + "<br>" + respuesta[1] + "<br>" + respuesta[2] + "</p>";
});
