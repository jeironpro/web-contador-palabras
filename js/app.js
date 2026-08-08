/**
 * Punto de entrada del contador de palabras: conecta la lógica con el DOM.
 * @module app
 */

import { qs } from "./utils/dom.js";
import { getCounts } from "./modules/counter.js";

const elements = {
  textarea: qs("#texto"),
  palabras: qs("#valor-palabras"),
  caracteres: qs("#valor-caracteres"),
  sinEspacios: qs("#valor-sin-espacios"),
  limpiar: qs("#limpiar"),
  copiar: qs("#copiar"),
  ejemplo: qs("#ejemplo"),
};

/** Texto de muestra para probar la aplicación. */
const SAMPLE_TEXT = [
  "El contador de palabras es una herramienta sencilla y local.",
  "",
  "Todo lo que escribes aquí se procesa en tu navegador:",
  "nada se envía a ningún servidor. Puedes pegar un texto,",
  "escribir uno nuevo o subir un archivo de texto plano.",
  "",
  "Las tres métricas se actualizan mientras escribes:",
  "palabras, caracteres y caracteres sin espacios.",
].join("\n");

/**
 * Actualiza las tres métricas con el conteo del texto dado.
 * @param {string} text Texto del que se muestran las métricas.
 */
function renderStats(text) {
  const { palabras, caracteres, sinEspacios } = getCounts(text);
  elements.palabras.textContent = String(palabras);
  elements.caracteres.textContent = String(caracteres);
  elements.sinEspacios.textContent = String(sinEspacios);
}

/**
 * Habilita o deshabilita los controles según haya contenido o no.
 * @param {boolean} hasText Hay texto en el área de escritura.
 */
function updateControls(hasText) {
  elements.limpiar.disabled = !hasText;
  elements.copiar.disabled = !hasText;
}

/**
 * Actualiza la interfaz completa a partir del texto actual.
 */
function sync() {
  const text = elements.textarea.value;
  renderStats(text);
  updateControls(text !== "");
}

/**
 * Vacía el área de texto y restablece la interfaz.
 */
function limpiar() {
  elements.textarea.value = "";
  sync();
  elements.textarea.focus();
}

/**
 * Copia un resumen con las tres métricas al portapapeles.
 */
async function copiar() {
  const { palabras, caracteres, sinEspacios } = getCounts(
    elements.textarea.value
  );
  const resumen = [
    `Palabras: ${palabras}`,
    `Caracteres: ${caracteres}`,
    `Caracteres sin espacios: ${sinEspacios}`,
  ].join("\n");

  try {
    await navigator.clipboard.writeText(resumen);
  } catch {
    /* Portapapeles no disponible: la acción se ignora. */
  }
}

/**
 * Carga el texto de ejemplo y actualiza la interfaz.
 */
function cargarEjemplo() {
  elements.textarea.value = SAMPLE_TEXT;
  sync();
  elements.textarea.focus();
}

elements.textarea.addEventListener("input", sync);
elements.limpiar.addEventListener("click", limpiar);
elements.copiar.addEventListener("click", copiar);
elements.ejemplo.addEventListener("click", cargarEjemplo);

sync();