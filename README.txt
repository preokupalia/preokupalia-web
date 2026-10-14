PreOkupalia — paquete actualizado para GitHub Pages

1. Sube TODOS los archivos de esta carpeta a la raíz del repositorio.
2. El archivo principal debe llamarse index.html.
3. Mantén los nombres de manifest.webmanifest, service-worker.js, los dos iconos PNG y guia_instalar_preokupalia.webp.
4. El service worker usa una nueva versión de caché (v4) para evitar conservar la versión anterior de la página.
5. En GitHub, activa Pages desde Settings > Pages y selecciona la rama/carpeta donde hayas subido estos archivos.

Este paquete conserva los recursos PWA del ZIP anterior y sustituye index.html por la última versión entregada.

Actualización: se añadió el botón «← Atrás» en la barra superior de las pantallas internas y se redujo el espacio inferior del Foro para dejar visible el acceso PreOkupalia al modo administrador.

Cambios de esta versión: la pantalla de instalación/detección se muestra al inicio después del aviso de edad y de resolver cookies; incluye la imagen de instalación al comienzo, un botón de instalación cuando el navegador lo permite y pasos manuales alternativos. El diseño adapta la tarjeta a móviles, tabletas y PC.

Nota técnica: los navegadores web no permiten consultar si un icono de acceso directo existe en la pantalla de inicio mientras la página está abierta en una pestaña normal. La app sí puede detectar que se está ejecutando en modo independiente (abierta desde el acceso directo instalado).


NAVEGACIÓN Y DETECCIÓN DE INSTALACIÓN
- Se eliminó la barra superior; Atrás y Cerrar son controles flotantes. Atrás se oculta en el menú principal.
- La web detecta de forma fiable cuando se abre como PWA en modo independiente y entonces no muestra la pantalla de instalación.
- Limitación de los navegadores: si la web se abre en una pestaña normal, no hay una API universal que confirme si el usuario conserva o ha borrado el icono de la pantalla de inicio. En ese caso se ofrecen las opciones de instalación.


Actualización: añadidos cinco recursos al principio de Pedagogía y ajustada la adaptación de pantalla para móviles, tabletas y PC. Sube todos los archivos de este ZIP a la raíz del repositorio GitHub Pages.


Actualización v5: confirmación de edad en cada nueva carga/sesión; aviso de cookies solo mientras no exista una elección guardada; barra inferior oculta durante el splash; restauración de pantalla y desplazamiento al volver de segundo plano.

Actualización: los cinco recursos nuevos de Pedagogía tienen títulos algo mayores y en negrita, botones en negrita y más separación. En Varios, Pedagogía aparece antes de FilmografIA. Los enlaces y el estilo de los recursos anteriores se han conservado.


Actualización: enlaces nuevos de Pedagogía sin flechas, orden actualizado, título retirado del menú principal y acceso de administración desplazado hacia abajo.
