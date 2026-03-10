---
title: "Lanzamiento de Openfoot Manager v0.1.1-alpha"
description: "Ha llegado una nueva versión, esta vez con correcciones de errores, algunas funciones nuevas y varios retoques para pulir asperezas."
pubDate: 2026-03-10T16:51:00.000Z
author: "Sturdy Robot"
tags: ["lanzamiento", "anuncio", "parche", "correcciones de errores"]
image: "/images/features/manage_squad.png"
lang: "es"
---

Ha pasado poco más de una semana desde nuestro primer lanzamiento público, ¡y ya tenemos un nuevo parche! Nada mal, ¿eh?

Esta vez traemos correcciones de errores, algunos cambios grandes en el código y ese tipo de mejoras de interfaz que siempre nos gusta ver. Empecemos por los cambios importantes, ¿te parece?

Y antes de empezar: **ciao ragazzi, benvenuti su Openfoot Manager! Speriamo che vi divertiate un sacco**.

## Soporte para el idioma italiano

Esta versión también añade soporte para el idioma italiano dentro del juego.

Si estás jugando en italiano, bienvenido a bordo. Estamos muy contentos de tenerte aquí.

Como siempre, si detectas frases raras, textos que faltan o cualquier otra cosa que no suene bien, avísanos. El feedback sobre traducciones ayuda muchísimo, sobre todo tan temprano en el desarrollo.

## Renovación completa del sistema de guardado

Nuestro sistema de guardado inicial era malo: solo había un archivo `saves.db` que contenía todas tus partidas, con todos los datos metidos en una única columna tipo BLOB JSON.

Hemos reescrito completamente este sistema. Ahora tus archivos de guardado son bases de datos independientes, y además admiten [migraciones de base de datos](https://en.wikipedia.org/wiki/Schema_migration), lo que significa que estamos sentando las bases para la compatibilidad hacia atrás con los datos de guardado.

Tus datos de guardado actuales no se perderán, eso sí. El juego migrará todas tus partidas al sistema actual y renombrará tu antiguo archivo `saves.db`. Este formato de guardado antiguo no seguirá siendo compatible a partir de ahora.

Aun así, no podemos garantizar que todas tus partidas sigan siendo compatibles a medida que añadamos nuevas funciones al juego, incluso con las migraciones en marcha. Sigue siendo una versión alfa, así que no te encariñes demasiado con tus archivos de guardado.

## Cambios internos en el código

Nuestro código anterior era suficientemente bueno para aquello para lo que fue creado. Pero era un desastre: una masa enorme de funciones y cosas sin probar. Sí teníamos algunas pruebas (más de 80) cubriendo las partes más importantes, pero cualquiera que trabaje con software sabe que eso no basta para un proyecto como el nuestro.

Nos pusimos manos a la obra con una gran refactorización, separamos las cosas en sus propios módulos y funciones, y cubrimos todo con pruebas. Pasamos de una cobertura miserable de alrededor del 10% con 80 tests a una impresionante cobertura del 84% con más de 700 tests (y subiendo), tanto en el frontend como en el backend.

Es un salto enorme para mantener la estabilidad y el rendimiento.

Ahora el código está mucho más organizado, modular y es más fácil trabajar con él. Sigue habiendo mucho margen de mejora, pero ya está en un punto lo bastante bueno para quienes quieran contribuir por primera vez.

## Menú principal y pantalla de nueva partida

- Se añadió un botón para salir en el menú principal.
- El nombre y el apellido ahora tienen límite de caracteres.
- El selector de fecha fue rediseñado. El calendario anterior no funcionaba bien en todos los sistemas operativos.
- El selector de nacionalidad ahora es mucho más completo, con muchos más países para elegir.

## Gestión de jugadores y plantilla

- Los jugadores ahora tienen posiciones alternativas en las que pueden jugar. Ya no están limitados a una única posición, lo que te permite tomar decisiones más estratégicas en los partidos. Esto solo está disponible si empiezas una partida nueva.
- La tabla de la plantilla y la tabla de listas de jugadores ahora permiten ordenar columnas.
- Estas tablas ahora muestran la bandera del país del jugador y su país de origen. También puedes verlo en la página del perfil del jugador.
- Hemos reducido la frecuencia con la que los jugadores te hablan. Ahora deberían ser mucho más reservados en vez de inundar tu bandeja de entrada.
- Se ha ajustado la moral, y ya no debería ser tan fácil poner contentos a los jugadores (eso espero).

## Sistema de entrenamiento

Hemos introducido grupos de entrenamiento, por si quieres centrarte en áreas concretas con ciertos jugadores. Esta función sigue siendo muy experimental y necesita muchas mejoras.

## Sistema de ojeo

- Los informes de ojeadores ahora revelan los atributos de los jugadores de forma progresiva.
- Los informes de ojeadores ahora te muestran una tarjeta del jugador en lugar de texto plano, lo que te lleva a la página de perfil del jugador.
- Algunos informes de ojeadores no tenían traducciones, y ahora deberían estar completamente traducidos.

## Informes del cuerpo técnico

- Hemos reducido la frecuencia con la que el segundo entrenador te habla del estado de ánimo general de la plantilla. A veces podías recibir más de 3 informes al día diciéndote exactamente lo mismo. Ahora solo te informan del ánimo una vez por semana, los lunes.
- Estamos rediseñando los informes del cuerpo técnico para que sean más útiles en general.
- Algunos informes del staff no tenían traducciones, y ahora deberían estar completamente traducidos.

## Cambios en la interfaz

- La barra lateral ahora tiene desplazamiento, lo que facilita la navegación.
- La barra lateral ahora se puede contraer, lo que ayuda a concentrarte en el juego.
- Eliminamos la pestaña "Manager" e hicimos clicable la información de "Tu manager", para que puedas acceder al perfil del entrenador desde ahí.
- Las pestañas "Noticias" y "Calendario" ahora están en la primera sección de la barra lateral.
- El botón "Start Match" ahora está centrado en lugar de estar en la esquina inferior derecha.
- El panel de sustituciones es un poco más grande ahora, así que resulta más fácil de ver.
- Ahora puedes seleccionar mensajes para borrarlos de tu bandeja de entrada y ordenarlos por fecha.
- Las páginas de Tácticas y Plantilla han sido rediseñadas por completo:
  - Solo puedes ver a todo tu equipo en la página de Plantilla.
  - En la página de Tácticas ahora puedes configurar correctamente la formación de tu equipo con una pantalla de arrastrar y soltar y comparar jugadores dentro de tu plantilla.
  - Todos los cambios relacionados con la formación y la táctica se han movido a la página de Tácticas.
  - Las jugadas a balón parado y los roles de los jugadores ahora se encuentran en la página de Tácticas.

## Correcciones de errores

- Se corrigió la advertencia de "Invalid Starting XI" al inicio de la partida, incluso cuando tu plantilla era totalmente válida.
- Se corrigió el problema por el que el menú "Getting Started" no desaparecía después de revisar todo lo que había que revisar.
- Se corrigió la ordenación de jugadores en la tabla de plantilla y en las tablas del día de partido.
- Se corrigió el comportamiento errático de la lista de formación al intentar hacer sustituciones durante un partido.
- Se corrigieron los colores de fondo de los cuadros combinados en sistemas Linux.
- Se corrigió un error que impedía iniciar el juego en sistemas Linux que usan drivers propietarios de NVIDIA en Wayland.
- Se corrigió un error que no te dejaba sustituir al portero.
- Se corrigió un error que permitía sustituir jugadores no válidos (expulsados o ya sustituidos).
- Se corrigió un error por el que la formación 4-3-2-1 mostraba 2 porteros en la formación de jugadores.
- Si intentas salir del juego con cambios sin guardar, ahora te pedirá confirmación.
- Se corrigieron traducciones al portugués brasileño que no eran precisas.

Si encuentras más problemas o regresiones, avísanos en la sección de [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Problemas conocidos

- Si usas un driver propietario de NVIDIA en Wayland, el juego ahora arrancará, pero el rendimiento puede ser pobre. Es un problema conocido en [WebKitGTK](https://gitlab.gnome.org/GNOME/gnome-build-meta/-/issues/749), que [Tauri](https://github.com/tauri-apps/tauri/issues/10702) usa para renderizar la pantalla. Por desgracia, hasta que eso se arregle, no hay nada que podamos hacer para mejorarlo.
- La mitigación que aplicamos para que el juego arranque en GPUs NVIDIA podría afectar al rendimiento en otros sistemas sin drivers de NVIDIA. Si detectas problemas de rendimiento por eso, avísanos en la sección de [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Notas finales

¡Este es un gran paso hacia una versión estable! Sabemos que todavía queda mucho camino por recorrer, pero ya estamos alcanzando un gran hito en el ciclo de vida de este proyecto.

¡Es increíble poder compartir esto contigo por fin y sacar este juego al mundo! Si disfrutaste el juego, por favor considera apoyarnos:

- Compártelo en redes sociales.
- Háblales de nosotros a tus amigos.
- [Danos una estrella en GitHub](https://github.com/openfootmanager/openfootmanager).
- [Envía tus contribuciones de código o traducción](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).
- Publica un vídeo en YouTube.

¡Todo esto ayuda muchísimo!

## Descárgalo

Ve a la [página de descarga](/es/download) para conseguir el juego para Windows, macOS o Linux.

En las próximas versiones, una vez que logremos un bucle de juego estable, añadiremos nuevas funciones como nuevas ligas, nuevos torneos, más equipos, una ventana de fichajes, más interacción con los jugadores y cualquier otra cosa que sintáis que este juego merece.

¡Muchísimas gracias por tu apoyo!

¡Nos vemos en la próxima!
