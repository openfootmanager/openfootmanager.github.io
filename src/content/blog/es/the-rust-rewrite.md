---
title: "Por Qué Reescribimos Todo en Rust"
description: "La historia detrás de nuestra decisión de reescribir Openfoot Manager de Python a Rust y lo que significa para el futuro del proyecto."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["notas-dev", "rust"]
image: "/trophycrowd.jpg"
lang: "es"
---

Una de las decisiones más importantes en la historia de Openfoot Manager fue reescribir por completo el motor del juego, pasando de Python a Rust, y utilizar React para el frontend. Aquí explico por qué tomamos esta decisión, qué ganamos con ella y hacia dónde nos dirigimos.

## El inicio del proyecto

Openfoot Manager comenzó en 2020 como un proyecto en Python. Python fue una elección natural para mí: es un lenguaje accesible, con un ecosistema muy rico, y el lenguaje con el que me sentía más cómodo en ese momento. Además, disfruto mucho escribir en Python y valoro enormemente a su comunidad.

Los primeros prototipos los construí cuando todavía no tenía del todo claro lo que estaba haciendo. Probé muchas ideas para crear una simulación de partidos sólida. Funcionaban, pero convertir eso en un proyecto completo y bien estructurado fue un reto enorme.

Cuando empecé a trabajar en el primer MVP, tenía varias opciones para la GUI. No quería usar frameworks de frontend en JavaScript (había tenido malas experiencias en el pasado), así que terminé usando [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) para la primera versión del proyecto.

En otro proyecto utilizaba [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/), y esta vez quería probar algo distinto.

Pronto quedó claro que trabajar con widgets ttk era realmente frustrante. Tuve que escribir algunos widgets desde cero y aun así me costaba implementar cosas bastante básicas. El backend fue más manejable: con el tiempo logré construir un motor capaz de generar los datos necesarios para la simulación de partidos. Tras muchas pruebas, conseguí una simulación suficientemente buena.

Sin embargo, la GUI seguía siendo un problema, y quería resolverlo sin JavaScript. Probé absolutamente de todo. También intenté usar [**Qt**](https://www.qt.io/), pero no me convenció. Finalmente me embarqué en una solución bastante extrema: un backend con [**Flask**](https://flask.palletsprojects.com/), un frontend basado en plantillas Jinja2 para renderizar HTML y, para imitar el comportamiento de React, el uso de [**HTMX**](https://htmx.org/) junto con [**AlpineJS**](https://alpinejs.dev/).

Más adelante sustituí Flask por [**FastAPI**](https://fastapi.tiangolo.com/) y reescribí todo el backend usando [**SQLModel**](https://sqlmodel.tiangolo.com/), una combinación de [**Pydantic**](https://pydantic-docs.helpmanual.io/) y [**SQLAlchemy**](https://www.sqlalchemy.org/). Para el diseño visual utilicé [**Tailwindcss**](https://tailwindcss.com/).

Para ofrecer la experiencia de escritorio que buscaba, integré [**Pywebview**](https://pywebview.flowrl.com/) y usé [**uvicorn**](https://www.uvicorn.org/) como servidor web para que FastAPI pudiera comunicarse con Pywebview.

El resultado fue una auténtica solución Frankenstein, muy difícil de mantener. Me di cuenta de que estaba complicando las cosas en lugar de simplificarlas. Obtener un buen rendimiento con Pywebview era complicado, y empaquetar la aplicación como software de escritorio seguía siendo un problema sin resolver. Estuve a punto de decirles a los usuarios que simplemente arrancaran el servidor y abrieran el juego en el navegador.

También intenté combinar Python con React, pero la experiencia no fue buena, ni para el desarrollo ni para la UX.

## Rust al rescate

Llevo programando en Rust desde hace bastante tiempo. Es un lenguaje muy potente, aunque exigente. No es fácil acertar a la primera, pero a cambio ofrece un rendimiento excelente y una fiabilidad sobresaliente. Además, cuenta con una comunidad muy comprometida, alineada con lo que estaba buscando.

[**Tauri**](https://tauri.app/) fue uno de los proyectos que más me llamó la atención. Si quería evitar tecnologías muy dependientes de JavaScript como **Electron**, esta era una opción clara.

Mi idea inicial era usar **Tauri** junto con [**Leptos**](https://leptos.dev/) para el frontend, creando un stack completamente basado en **Rust**. Sin embargo, en la práctica resultó ser mucho más complejo de lo esperado. Rust en el frontend es potente, pero poco agradable de trabajar.

Así que opté por un enfoque más práctico: mantener Rust en el backend, seguir usando Tauri y utilizar **React** para el frontend. De esta forma, apenas tuve que tocar el código de React. Las herramientas de IA han sido de gran ayuda últimamente para el desarrollo frontend, especialmente para el estilo y todo el boilerplate que no disfruto escribir.

Fue, sencillamente, la combinación perfecta.

## Lo que ganamos con este cambio

Llegados a este punto, es evidente que el camino fue largo y complicado. Intenté por todos los medios hacer que Python funcionara, por el cariño que le tengo al lenguaje, pero simplemente no era la mejor opción. Aun así, espero poder construir algo igual de sólido en Python algún día.

Al final, dejamos atrás una solución enorme y compleja basada en FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn, y la reemplazamos por algo mucho más sencillo: Tauri + Rust + React. Más simple, más robusto y probado en la práctica.

No solo recuperé la cordura, sino que también obtuvimos mucha más estabilidad, mejor rendimiento y una experiencia general mucho mejor para el usuario final. Además, ahora es mucho más fácil para otros desarrolladores entender el proyecto y contribuir a él.

Con el stack anterior, era necesario usar [**uv**](https://docs.astral.sh/uv/) para instalar dependencias y ejecutar varios scripts para arrancar el backend y el frontend.

Con el nuevo stack, basta con tener Rust y NodeJS instalados y ejecutar `npm run tauri dev` para iniciar todo el entorno de desarrollo, con hot-reloading incluido, algo que antes no estaba disponible. Una experiencia de desarrollo realmente excelente.

## Mirando hacia el futuro

La reescritura en Rust no fue solo una mejora técnica. Es la base sobre la que construiremos todo lo que viene: mayor estabilidad, mejor rendimiento, una excelente experiencia para desarrolladores y una interfaz cuidada para los usuarios.

El juego aún se encuentra en una etapa temprana, pero los cimientos son sólidos. Estamos muy ilusionados con lo que viene a continuación.