---
title: "Why We Rewrote Everything in Rust"
description: "The story behind our decision to rewrite Openfoot Manager from Python to Rust, and what it means for the future of the project."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["dev-notes", "rust"]
image: "/trophycrowd.jpg"
---

One of the biggest decisions in the history of Openfoot Manager was the choice to rewrite the entire game engine from Python to Rust and use React for the frontend. Here's why we did it, what we gained, and where we're headed.

## The beginning of the project

Openfoot Manager started as a Python project back in 2020. Python was a natural choice for me: it's an easy language, with a rich ecosystem, and the language that I was most familiar with at the time, a language that I enjoy writing and love the community.

I built early prototypes when I didn't know too much what I was doing. Threw many ideas around to build a solid match simulation, and they did work, but evolving it into a fully-featured project was a really big challenge.

When I started my first MVP, I had a few GUI choices to use. I didn't want to use any JS frontend framework (I had bad experiences with JavaScript in the past), so I ended up using [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) for the first iteration of the project.

For another project I was working on, I was using [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/), and this time I wanted to try something different for a change.

Turns out that working with ttk widgets was a real pain. I had to write myself a few widgets, but struggled hard to figure out how to do basic things I wanted to do. The backend part was not that hard: it took me a while, but I managed to build an engine that would be able to generate data to be used by the match simulation engine. After a long time experimenting, I also built a good enough match simulation engine.

But GUI was something I really wanted to solve without JS. I did try everything I could. I tried using [**Qt**](https://www.qt.io/), but did not enjoy it as well. I ended up going for a very wild ride: I tried using a [**Flask**](https://flask.palletsprojects.com/) backend with a frontend that used Jinja2 templates to render the HTML, and to mimick the behavior of React, I was using [**HTMX**](https://htmx.org/) with [**AlpineJS**](https://alpinejs.dev/).

Later on I ditched Flask in favor of [**FastAPI**](https://fastapi.tiangolo.com/), and rewrote the entire backend to use [**SQLModel**](https://sqlmodel.tiangolo.com/), which is a mix of [**Pydantic**](https://pydantic-docs.helpmanual.io/) and [**SQLAlchemy**](https://www.sqlalchemy.org/). To provide the styling, I used [**Tailwindcss**](https://tailwindcss.com/).

The icing on the cake, to provide the desktop experience I wanted to do, I was using [**Pywebview**](https://pywebview.flowrl.com/), and I needed to use [**uvicorn**](https://www.uvicorn.org/) to provide the webserver for FastAPI to connect with Pywebview.

Turns out this Frankenstein solution was absolutely not easy to work with at all. I realized I was falling into a trap of my own making, instead of making things easier on myself. It was really difficult to get a good performance with Pywebview, and packaging this app as a desktop solution is something I don't even know how I would solve. I was about to just tell people to start the server, and open the game on the browser and that was it.

I did try to make Python work with React as well, but it wasn't a good experience either, for both development and UX.

## Rust to the rescue

I've been programming in Rust for quite a while now. It's a very powerful but pedantic language. I enjoy using it, despite the fact that it's hard to get some things right at first. But it does deliver unparalleled performance, and has a very dedicated community for the purposes that I was looking for.

[**Tauri**](https://tauri.app/) is one of the projects that I was mostly interested on. If I wanted to avoid using JS-related technologies, such as **Electron**, it seemed that this would be the way to go.

My initial idea was to use **Tauri** with [**Leptos**](https://leptos.dev/) for the frontend. A full **Rust-based** stack. But it was way harder than I expected. Rust for the frontend is powerful, but not pleasant.

So, I decided to go the easier route: maintain the power and performance of Rust for the backend, preserving Tauri, and instead use **React** for the frontend. This time, I wouldn't need to touch React code that much. AI has been much of a help in programming frontends lately, and cutting corners in this aspect. And it does work pretty well for styling and doing all the boilerplate I hate for this.

It was just the perfect match.

## What we gained from it

At this point, it's pretty obvious that the journey has been very arduous. I have tried my best to make Python work, for my love of the language, but it just did not work out. One day I still want to write something solid like this in Python.

At the end, we ditched a monstrous FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn solution, to something that was just Tauri + Rust + React. Way simpler, more robust and battle-tested.

Not only I gained back my sanity, but I also gained much more stability, performance, and a better overall experience for the end-user. Developers will also be able to easily contribute and understand the project.

In the previous stack, you had to use [**uv**](https://docs.astral.sh/uv/) to set up the project and install the dependencies, and run a few scripts I had prepared to start the server and the frontend.

With the new stack, you still need Rust and NodeJS installed, but just by running `npm run tauri dev`, you start everything you need to develop the project, with hot-reloading enabled (which was not available on the previous stack). Just a wonderful Developer Experience.

## Looking Forward

The Rust rewrite wasn't just a technical upgrade: it was a foundation for everything we want to build. Way more solid, stable performance, with a greater Developer Experience and a beautiful UI for the end-user.

The game is still in early development, but the foundation is solid. We're excited about what's coming next.
