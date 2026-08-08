# Changelog

Todas las modificaciones notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/), y este proyecto respeta [Versionado Semántico](https://semver.org/lang/es/).

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/), y este proyecto respeta [Versionado Semántico](https://semver.org/lang/es/).

## [0.3.0] - 2026-08-08

### Added

- Subida de archivos de texto plano (`js/modules/uploader.js`): lectura como UTF-8 mediante `FileReader`.
- Zona de subida operable con clic (abre el selector), arrastrar y soltar, y teclado (foco + Enter/Espacio).
- Al cargar un archivo, el área sustituye su contenido y se recalculan las métricas.

## [0.2.0] - 2026-08-08

### Added

- Conteo en vivo de palabras, caracteres y caracteres sin espacios mientras se escribe o pega.
- Botones de control: **Limpiar**, **Copiar** (resumen al portapapeles) y **Ejemplo** (texto de muestra).
- Los botones **Limpiar** y **Copiar** se deshabilitan cuando no hay texto.

## [0.1.0] - 2026-08-08

### Added

- Aplicación web de conteo de palabras con HTML, CSS y JavaScript Vanilla.
- Estructura del proyecto: página principal, estilos por capas (tokens, base, componentes, layout), módulos ES6, favicon y documentación técnica.
- Diseño editorial austero con tema de estilo impreso (papel con tinte cálido, serifas, acento cálido discreto).