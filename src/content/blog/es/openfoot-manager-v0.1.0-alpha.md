---
title: "Openfoot Manager v0.1.0-alpha Ya Está Aquí"
description: "La primera versión alfa pública de Openfoot Manager por fin está disponible. Esto es lo que puedes esperar, lo que incluye y lo que aún falta."
pubDate: 2026-03-02T16:54:00.000Z
author: "Sturdy Robot"
tags: ["lanzamiento", "anuncio"]
image: "/images/v0.1.0-alpha-start-screen.PNG"
lang: "es"
---

No puedo creer que esté escribiendo esto.

Después de años experimentando, reescribiendo, tirando cosas a la basura y empezando de cero, **Openfoot Manager v0.1.0-alpha** por fin está ahí afuera para que la gente lo descargue y lo juegue. No es perfecto — ni de lejos, la verdad — pero es real, funciona, y puedes gestionar un club de fútbol en él. Solo eso ya se siente como un pequeño milagro para mí.

## Un poco de contexto

Si has seguido este proyecto, ya conoces la historia: todo empezó en 2020 como un proyecto hobby en Python. Solo quería construir un juego de gestión de fútbol que fuera gratuito, open-source y divertido. Algo que no te pidiera gastar dinero, no necesitara conexión a internet y que pudieras modificar como quisieras.

Fueron muchos desvíos hasta llegar aquí. Prototipos en Python, pesadillas con frameworks de interfaz, una reescritura completa en Rust, aprender React por el camino... ha sido todo un viaje. Pero aquí estamos.

## ¿Qué puedes hacer en el juego?

Déjame contarte lo que funciona ahora mismo:

- **Elige un club y gestiónalo.** Empiezas el juego, eliges un equipo y eres el entrenador. Así de simple.
- **Configura tu plantilla.** Elige tu formación, selecciona tu once titular, asigna los encargados de las jugadas a balón parado y define tu estilo táctico (ofensivo, defensivo, equilibrado, contraataque, posesión).
- **Mira cómo se desarrollan los partidos.** El motor de partidos simula los juegos minuto a minuto con una interfaz estilo retransmisión. Verás goles, tarjetas, sustituciones, lesiones y todo el drama que esperarías. Puedes acelerar o ralentizar las cosas.
- **Entrena a tus jugadores.** Hay 6 enfoques de entrenamiento y 3 niveles de intensidad. Los jugadores jóvenes crecen más rápido, los veteranos declinan. Tu cuerpo técnico influye en la efectividad del entrenamiento.
- **Contrata y gestiona al personal.** Entrenadores, fisioterapeutas, ojeadores — cada uno con sus propias especializaciones y niveles de habilidad. Importan.
- **Maneja tus finanzas.** Tienes un presupuesto, salarios que pagar y necesitas mantener las cosas sostenibles. Quiebra y... bueno, mejor no quiebres.
- **Compra y vende jugadores.** El mercado de fichajes está ahí. Puedes comprar jugadores, venderlos, cederlos. Los clubes de la IA también hacen sus propios movimientos.
- **Sigue la liga.** Una liga de 16 equipos con formato de doble vuelta. Clasificación, calendario, resultados — todo está ahí.
- **Lee las noticias.** El juego genera informes de partidos, rumores de fichajes, actualizaciones de lesiones y otras noticias para mantenerte inmerso.
- **Modifica el juego.** Todos los datos del juego están en archivos JSON externos. ¿Quieres crear tu propia liga con tus propios equipos y jugadores? Adelante.

Y todo el juego está **completamente traducido a 6 idiomas**: inglés, portugués brasileño, portugués de Portugal, español, francés y alemán.

## Lo que NO tiene el juego (todavía)

Voy a ser honesto sobre lo que falta. Esto es una alfa, y se nota:

- **Sin competiciones de copa.** Solo hay liga por ahora.
- **Sin interacciones con jugadores.** Los jugadores no vienen a ti con quejas o peticiones.
- **Sin sistema de ojeadores detallado.** Los ojeadores existen, pero el sistema es bastante básico. Todavía no puedes enviar ojeadores a ver jugadores o ligas específicas.
- **Sin visor 3D de partidos.** Los partidos son en texto con una interfaz de retransmisión. Sin visualización del campo todavía.
- **Sin tutoriales.** Vas a tener que descubrir las cosas por tu cuenta por un rato. Perdón por eso.

También es probable que haya bugs. Probablemente bastantes. Los archivos de guardado de esta versión podrían no funcionar con futuras versiones tampoco. Esa es la realidad de una alfa.

## ¿Por qué lanzarlo ahora?

Porque si seguía esperando a que estuviera "listo", nunca lo lanzaría. En algún momento simplemente tienes que sacarlo al mundo y dejar que la gente lo pruebe. El ciclo principal de juego funciona: gestionas un club, juegas partidos, tomas decisiones y esas decisiones tienen consecuencias. Eso es suficiente para empezar.

También quiero feedback de verdad. He estado mirando esto durante tanto tiempo que ya no puedo verlo con claridad. Ojos frescos detectarán cosas que yo he pasado por alto y me ayudarán a entender en qué enfocarme a continuación.

## ¿Qué viene después?

El plan es seguir iterando. Las competiciones de copa probablemente sean la próxima gran funcionalidad. También quiero mejorar los entrenadores de la IA, añadir más profundidad al sistema de ojeadores y, en general, pulir todo.

Si quieres seguir el desarrollo, dale una estrella al [repositorio en GitHub](https://github.com/openfootmanager/openfootmanager). Si encuentras bugs — y los encontrarás — por favor [abre un issue](https://github.com/openfootmanager/openfootmanager/issues). Si quieres contribuir con código, traducciones, bases de datos personalizadas o cualquier otra cosa, consulta la [guía de contribución](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).

## Descárgalo

Ve a la [página de descarga](/es/download) para conseguir el juego para Windows, macOS o Linux.

Gracias por estar aquí. En serio. Aunque solo lo hayas descargado para probarlo cinco minutos, eso significa mucho para mí. Veamos a dónde nos lleva esto.
