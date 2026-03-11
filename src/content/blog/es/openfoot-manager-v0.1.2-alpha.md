---
title: "Openfoot Manager v0.1.2-alpha - Arreglando una gran metedura de pata"
description: "Ups, metimos bastante la pata en la versión anterior. Aquí va el arreglo."
pubDate: 2026-03-10T21:04:00.000Z
author: "Sturdy Robot"
tags: ["lanzamiento", "anuncio", "parche", "correcciones de errores"]
image: "/images/features/manage_squad.png"
lang: "es"
---

Antes de lanzar la v0.1.1-alpha, estuve probando cosas para asegurarme de que todo funcionara como debía. Encontré algunos problemas, los corregí y sacamos la v0.1.1. Pero lo que yo pensaba que estaba arreglado, al parecer tenía una causa más profunda, y al final la v0.1.1-alpha salió con un bug crítico que te impedía empezar una partida nueva.

Hay un apaño para este problema, pero no es lo ideal. Sé que la gente se va a quejar de eso, así que prefiero arreglarlo ahora. Pensé en sacar un hotfix, retirar las descargas antiguas y volver a publicarlo como si no hubiera pasado nada. Pero eso no estaría bien. Tengo que hacerme cargo de mis errores y asumir las consecuencias. Así que subí la versión a la 0.1.2-alpha. Técnicamente podría llamarla 0.1.1.1, pero según [SemVer](https://semver.org/), eso no sería correcto.

Bueno, esto es lo que estaba pasando:

- El nuevo combobox de nacionalidad que añadimos se comportaba de una forma rarísima. A veces te dejaba seleccionar un país y a veces no.
- Pensé que sabía cómo arreglarlo, y escribí algunas pruebas para evitar que volviera a pasar. Dejé de poder reproducirlo, así que di el tema por cerrado.
- Pero el problema era bastante más profundo que eso. Resultó que había una interacción extraña entre el combobox del mes y el combobox de nacionalidad. Si abrías primero el combobox del mes, el de nacionalidad dejaba de permitirte seleccionar países. Cuando entendí cuál era el problema de verdad, por fin pude arreglarlo, pero la v0.1.1 ya estaba fuera.
- Luego decidí probar el juego en Windows, y me llevé otra sorpresa desagradable: las banderas de los países no estaban soportadas allí. Un fastidio. Funcionaba en Linux y macOS, pero se me olvidó probarlo en la plataforma más grande de todas. Así que tuve que añadir dependencias de terceros para que las banderas funcionen en todas las plataformas. Espero que con eso quede resuelto.

Sí, es una versión pequeña, pero si no puedes seleccionar tu nacionalidad, no puedes empezar una partida nueva. Y si no sabes que lo que rompe todo es abrir primero el combobox del mes, te vas a quedar atascado y frustrado porque cometí la tontería de no comprobarlo como debía.

Pasa.

¡Pero ahora ya está arreglado! (Eso espero.)

Perdón por las molestias. Ya puedes descargar la nueva versión en la [página de descarga](/es/download).

¡Muchísimas gracias por tu apoyo!

¡Nos vemos en la próxima!
