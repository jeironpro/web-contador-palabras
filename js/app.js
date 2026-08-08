/**
 * Punto de entrada del contador de palabras.
 * @module app
 */

import { qs } from "./utils/dom.js";

const elements = {
  textarea: qs("#texto"),
  palabras: qs("#valor-palabras"),
  caracteres: qs("#valor-caracteres"),
  sinEspacios: qs("#valor-sin-espacios"),
};

/** Fija el texto inicial de las métricas (0). */
function renderStats() {
  elements.palabras.textContent = "0";
  elements.caracteres.textContent = "0";
  elements.sinEspacios.textContent = "0";
}

renderStats();