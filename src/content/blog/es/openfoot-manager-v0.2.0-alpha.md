---
title: "Lanzamiento de Openfoot Manager v0.2.0-alpha"
description: "Esta versión es un salto enorme: contratos, fichajes, finanzas, empleos, cantera, noticias del mundo y muchísimo pulido bien ganado."
pubDate: 2026-05-18T18:00:00.000Z
author: "Sturdy Robot"
tags: ["lanzamiento", "anuncio", "alpha", "jugabilidad", "correcciones de errores"]
image: "/images/020-new-features/020releasenotes.jpg"
lang: "es"
---

Después de casi dos meses de trabajo, más de 350 commits, 517 archivos modificados, más de 1600 pruebas unitarias automatizadas y un montón de correcciones de errores, **Openfoot Manager v0.2.0-alpha** por fin está aquí.

Hay muchísimo contenido en esta versión, y sinceramente fue difícil seguirle el ritmo a todo, así que vamos con los puntos más importantes.

## Contratos, fichajes y finanzas

Hemos dedicado bastante tiempo a conseguir que la parte financiera del juego importe mucho más esta vez.

<table>
<tr>
<td>
<img src="/images/020-new-features/renew-contract.PNG" alt="Renovando contrato" width="100%">
</td>
<td>
<img src="/images/020-new-features/transfer-bid.PNG" alt="Oferta de fichaje" width="100%">
</td>
</tr>
</table>

Ahora hay un sistema de contratos y fichajes mucho más completo, en el que las negociaciones pueden salir bien, atascarse o romperse por completo.

Las renovaciones, rescisiones y expiraciones de contrato ya existen dentro del juego, así que retener a tus jugadores más importantes requiere un poco más de atención que antes.

<img src="/images/020-new-features/finances-screen.PNG" alt="Contratos, fichajes y finanzas" width="95%">

Los sistemas financieros también se han rehecho. Ahora puedes cerrar patrocinios, salir de deudas e invertir en las instalaciones del club para impulsar el progreso a largo plazo, pero todo eso tiene un coste real, así que gestionar el presupuesto por fin importa.

## Estar en paro ahora forma parte del juego

Esta versión también trae más riesgo a la carrera: el desempleo. Ahora pueden despedirte si la directiva no está satisfecha con tu trabajo.

Pero esto no es game over. El desempleo es jugable, tiene su propio tratamiento en el panel principal y viene acompañado de un mercado laboral de verdad. Mientras estés sin club, puedes recibir ofertas pasivas, presentar solicitudes manualmente, seguir vacantes, recibir respuestas en la bandeja de entrada y ver el resultado de las contrataciones.

Ese sistema también se conecta con la simulación general. El mundo del juego ahora tiene más rotación visible de entrenadores, lógica de reemplazo de vacantes, movimientos al final de la temporada y actualizaciones más claras sobre nombramientos y vacantes. Esto importa mucho, porque hace que el mundo se sienta menos congelado alrededor del jugador.

## El mundo ahora se siente más vivo

Uno de los principales objetivos de la 0.2.0 era hacer que el mundo se sintiera más vivo: rumores de fichajes, calendario de pretemporada, noticias de lesiones y más actividad en general.

<img src="/images/020-new-features/preseason-status.PNG" alt="Estado de la pretemporada" width="95%">

Ahora puedes jugar amistosos de pretemporada, y el juego también cuenta con un mercado de fichajes activo en el que los clubes controlados por la IA participan en las negociaciones.

Otros clubes pueden contratar o despedir entrenadores, seguir con su propia actividad y, además, ahora puedes ver resultados de otros partidos en la pantalla posterior al encuentro.

La generación del mundo y los datos de la partida ahora admiten una profundidad configurable del historial con archivos persistentes de historia del mundo. El juego puede generar hasta 24 temporadas pasadas, para que puedas ver quiénes fueron los campeones anteriores, los jugadores más importantes, los entrenadores más exitosos y mucho más.

## Jugadores, plantilla y desarrollo a largo plazo dieron un paso adelante

Los perfiles de jugadores y equipos recibieron una mejora bastante seria en esta versión. Ahora puedes consultar estadísticas avanzadas, historial reciente de partidos y un nivel de detalle estadístico mucho más rico.

La cantera ya no es solo un sistema de relleno. Ahora puedes observar jugadores jóvenes, ascenderlos al primer equipo o devolver a los jugadores elegibles al equipo juvenil. El juego también te avisará cuando te cruces con un posible **Prodigio**.

### Nuevas posiciones de los jugadores

<img src="/images/020-new-features/player-positions.PNG" alt="Posiciones de los jugadores" width="95%">

También merece la pena mencionar que las posiciones ahora son mucho más granulares. En lugar de limitarse a etiquetas amplias como defensa, centrocampista y delantero, los jugadores ahora pueden identificarse con más precisión como laterales derechos, centrales, laterales izquierdos, carrileros, mediocentros defensivos, centrocampistas, mediapuntas, volantes de banda, extremos y delanteros centro.

Eso también se conecta con la lógica actualizada del **OVR**, que ahora pondera mejor el rol del jugador y hace más fácil identificar a los jugadores de élite de un vistazo.

Los agentes libres también pueden ficharse ahora, y existe una vista dedicada para manejar ese mercado.

Los sistemas de estado físico y servicios médicos también se ampliaron con un atributo propio de fitness, progresión de recuperación de lesiones, efectos de recuperación del entrenamiento basados en edad, moral y condición, además de ajustes al comportamiento de la resistencia y la recuperación.

## Nuevo idioma compatible

<img src="/images/020-new-features/simplified-chinese.PNG" alt="Chino simplificado" width="45%">

El chino simplificado (ZH-CN) se ha añadido a la lista de idiomas compatibles.

Se añadirán más idiomas en las próximas versiones (ruso y turco están en la lista).

## También se pulió bastante la UX

### Modo claro en la simulación del partido

<img src="/images/020-new-features/light-mode-match-sim.PNG" alt="Modo claro en la simulación del partido" width="70%">

La pantalla de simulación del partido ahora incluye un modo claro para quienes prefieren una interfaz más luminosa.

### **Salón de la Fama** y **Centro de Fichajes**

<table>
<tr>
<td>
<img src="/images/020-new-features/hall-of-fame.PNG" alt="Salón de la Fama" width="80%">
</td>
<td>
<img src="/images/020-new-features/transfer-centre.PNG" alt="Centro de Fichajes" width="80%">
</td>
</tr>
</table>

El juego ahora también tiene páginas de **Salón de la Fama** y **Centro de Fichajes**, que te dan una forma mucho mejor de seguir la historia pasada y los rumores actuales de fichajes por todo el mundo.

### Elige tu temporada inicial

<table>
<tr>
<td>
<img src="/images/020-new-features/new-manager-starting-season.PNG" alt="Nueva carrera empezando al inicio de la temporada" width="70%">
</td>
<td>
<img src="/images/020-new-features/new-manager-starting-season2.PNG" alt="Nueva carrera empezando a mitad de temporada" width="60%">
</td>
</tr>
</table>

Al crear una nueva partida, ahora también puedes elegir el año y el momento de la temporada en el que quieres empezar, ya sea desde el inicio o desde mitad de temporada.

### Problemas de traducción

Otro de los focos fue limpiar tantos problemas de traducción como fuera posible.

Muchas cadenas que estaban sin traducir ahora están correctamente traducidas. Y si encuentras algo que no se haya traducido a tu idioma (o que se haya traducido mal), por favor envíalo como incidencia en el [repositorio de GitHub](https://github.com/openfootmanager/openfootmanager/issues).

## Correcciones, pulido y mucha limpieza importante

Esta versión no va solo de añadir sistemas nuevos y vistosos. También hay bastante limpieza importante aquí.

Algunas de las correcciones y mejoras más destacadas incluyen:

- Los días restantes de recuperación de lesiones ahora disminuyen correctamente con el avance diario del tiempo.
- La simulación de partidos es ahora más robusta frente a snapshots nulos.
- El orden del once inicial ahora se normaliza correctamente al guardar y migrar datos.
- La persistencia de ligas se reforzó para limpiar datos obsoletos durante los upserts.
- La validación de ofertas de fichaje ahora tiene en cuenta correctamente las comisiones de la oferta.
- Los mensajes de confianza de la directiva ahora usan el identificador correcto basado en la fecha de la derrota.
- Las vistas de plantilla en la pantalla principal ya no muestran jugadores de la cantera donde no deberían aparecer.
- Las heurísticas de noticias y jugadores destacados ahora usan el contexto correcto del equipo.
- Se mejoraron el mapeo de variantes regionales y el comportamiento de fallback para cadenas sin traducir.
- El menú principal recibió correcciones de overflow, arreglos en el desplegable de nacionalidad y una mejor validación de la edad del entrenador.
- La lógica de visualización del próximo partido ahora usa de forma consistente el ID del equipo del usuario.
- Se ajustó el manejo de fechas al inicio y al final de la temporada.
- El feedback de moral y las variaciones de moral ahora se muestran con mayor precisión.
- El desgaste de la resistencia y la recuperación se ajustaron para reflejar mejor la carga de partidos.
- La localización de partidos y noticias mejoró en informes, clasificaciones, sustituciones, fases de eventos, premios y mensajes de gestión de jugadores.

Estas no son las notas más llamativas del mundo, pero importan muchísimo. Es el tipo de limpieza que evita que una gran versión repleta de funciones se venga abajo por su propio peso.

## Notas finales

v0.2.0-alpha es un paso enorme para el proyecto. Aún queda mucho por mejorar, claro, y vamos a seguir haciéndolo.

Si quieres probarlo, pásate por la [página de descarga](/es/download).

Muchas gracias por el apoyo.

¡Nos vemos en la próxima!