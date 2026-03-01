---
title: "Por qué Reescribimos Todo en Rust"
description: "La historia detrás de nuestra decisión de reescribir Openfoot Manager de Python a Rust, y lo que significa para el futuro del proyecto."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["notas-dev", "rust"]
image: "/trophycrowd.jpg"
lang: "es"
---

Una de las mayores decisiones en la historia de Openfoot Manager fue la elección de reescribir todo el motor del juego de Python a Rust y usar React para el frontend. Aquí está el porqué, lo que ganamos y hacia dónde nos dirigimos.

## El comienzo del proyecto

Openfoot Manager comenzó como un proyecto en Python en 2020. Python fue una elección natural para mí: es un lenguaje fácil, con un ecosistema rico, y el lenguaje con el que estaba más familiarizado en ese momento, un lenguaje que disfruto escribiendo y cuya comunidad me encanta.

Construí prototipos iniciales cuando no sabía muy bien lo que estaba haciendo. Probé varias ideas para construir una simulación de partidos sólida, y funcionaron, pero evolucionar eso hacia un proyecto completo fue un gran desafío.

Cuando comencé mi primer MVP, tenía algunas opciones de GUI para usar. No quería usar ningún framework JS para el frontend (había tenido malas experiencias con JavaScript en el pasado), así que terminé usando [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) para la primera iteración del proyecto.

En otro proyecto en el que estaba trabajando, usaba [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/), y esta vez quería probar algo diferente.

Resulta que trabajar con widgets ttk era realmente doloroso. Tuve que escribir algunos widgets yo mismo, pero tuve muchas dificultades para descubrir cómo hacer cosas básicas que quería hacer. La parte del backend no fue tan difícil: me tomó un tiempo, pero logré construir un motor capaz de generar datos para ser usados por el motor de simulación de partidos. Después de mucho tiempo experimentando, también construí un motor de simulación de partidos suficientemente bueno.

Pero la GUI era algo que realmente quería resolver sin JS. Intenté de todo. Intenté usar [**Qt**](https://www.qt.io/), pero tampoco me gustó. Terminé embarcándome en una aventura bastante salvaje: intenté usar un backend [**Flask**](https://flask.palletsprojects.com/) con un frontend que usaba plantillas Jinja2 para renderizar el HTML, y para imitar el comportamiento de React, usaba [**HTMX**](https://htmx.org/) con [**AlpineJS**](https://alpinejs.dev/).

Más tarde cambié Flask por [**FastAPI**](https://fastapi.tiangolo.com/), y reescribí todo el backend para usar [**SQLModel**](https://sqlmodel.tiangolo.com/), que es una mezcla de [**Pydantic**](https://pydantic-docs.helpmanual.io/) y [**SQLAlchemy**](https://www.sqlalchemy.org/). Para proporcionar el estilo, usé [**Tailwindcss**](https://tailwindcss.com/).

La guinda del pastel, para proporcionar la experiencia de escritorio que quería, usaba [**Pywebview**](https://pywebview.flowrl.com/), y necesitaba usar [**uvicorn**](https://www.uvicorn.org/) para proporcionar el servidor web para que FastAPI se conectara con Pywebview.

Resulta que esta solución Frankenstein no era nada fácil de trabajar. Me di cuenta de que estaba cayendo en una trampa de mi propia creación, en lugar de facilitar las cosas. Era realmente difícil obtener un buen rendimiento con Pywebview, y empaquetar esta app como una solución de escritorio es algo que ni siquiera sé cómo habría resuelto. Estaba a punto de simplemente decirle a la gente que iniciara el servidor, abriera el juego en el navegador y listo.

También intenté hacer que Python funcionara con React, pero no fue una buena experiencia, ni para el desarrollo ni para la UX.

## Rust al rescate

He estado programando en Rust durante bastante tiempo. Es un lenguaje muy poderoso pero pedante. Disfruto usándolo, a pesar de que es difícil acertar algunas cosas al principio. Pero ofrece un rendimiento incomparable, y tiene una comunidad muy dedicada para los propósitos que yo buscaba.

[**Tauri**](https://tauri.app/) es uno de los proyectos que más me interesaba. Si quería evitar usar tecnologías relacionadas con JS, como **Electron**, parecía que este era el camino a seguir.

Mi idea inicial era usar **Tauri** con [**Leptos**](https://leptos.dev/) para el frontend. Un stack completamente basado en **Rust**. Pero fue mucho más difícil de lo que esperaba. Rust para el frontend es poderoso, pero no agradable.

Así que decidí ir por la ruta más fácil: mantener el poder y el rendimiento de Rust para el backend, preservando Tauri, y usar **React** para el frontend. Esta vez, no necesitaría tocar tanto el código React. La IA ha sido de mucha ayuda en la programación de frontends últimamente, y atajar en este aspecto. Y funciona bastante bien para estilizar y hacer todo el boilerplate que detesto.

Fue simplemente la combinación perfecta.

## Lo que ganamos con esto

A estas alturas, es bastante obvio que el camino ha sido muy arduo. Intenté al máximo hacer que Python funcionara, por mi amor al lenguaje, pero simplemente no funcionó. Algún día todavía quiero escribir algo sólido así en Python.

Al final, cambiamos una solución monstruosa de FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn, por algo que era simplemente Tauri + Rust + React. Mucho más simple, robusto y probado en batalla.

No solo recuperé mi cordura, sino que también gané mucha más estabilidad, rendimiento, y una mejor experiencia general para el usuario final. Los desarrolladores también podrán contribuir y entender el proyecto fácilmente.

En el stack anterior, tenías que usar [**uv**](https://docs.astral.sh/uv/) para configurar el proyecto e instalar las dependencias, y ejecutar algunos scripts que había preparado para iniciar el servidor y el frontend.

Con el nuevo stack, todavía necesitas tener Rust y NodeJS instalados, pero simplemente ejecutando `npm run tauri dev`, inicias todo lo que necesitas para desarrollar el proyecto, con hot-reloading habilitado (que no estaba disponible en el stack anterior). Simplemente una experiencia de desarrollador maravillosa.

## Mirando hacia adelante

La reescritura en Rust no fue solo una actualización técnica: fue la base para todo lo que queremos construir. Mucho más sólido, con rendimiento estable, una mejor experiencia de desarrollador y una interfaz hermosa para el usuario final.

El juego aún está en desarrollo temprano, pero la base es sólida. Estamos emocionados por lo que viene.
