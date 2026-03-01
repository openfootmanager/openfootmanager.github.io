---
title: "Por que Reescrevemos Tudo em Rust"
description: "A história por trás da nossa decisão de reescrever o Openfoot Manager de Python para Rust, e o que isso significa para o futuro do projeto."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["notas-dev", "rust"]
image: "/trophycrowd.jpg"
lang: "pt-br"
---

Uma das maiores decisões na história do Openfoot Manager foi a escolha de reescrever todo o motor do jogo de Python para Rust e usar React para o frontend. Aqui está o porquê, o que ganhamos e para onde estamos indo.

## O início do projeto

O Openfoot Manager começou como um projeto em Python em 2020. Python foi uma escolha natural para mim: é uma linguagem fácil, com um ecossistema rico, e a linguagem com a qual eu estava mais familiarizado na época, uma linguagem que eu gosto de escrever e amo a comunidade.

Construí protótipos iniciais quando eu não sabia muito bem o que estava fazendo. Testei várias ideias para construir uma simulação de partidas sólida, e elas funcionaram, mas evoluir isso para um projeto completo foi um grande desafio.

Quando comecei meu primeiro MVP, eu tinha algumas opções de GUI para usar. Eu não queria usar nenhum framework JS para o frontend (tive experiências ruins com JavaScript no passado), então acabei usando o [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) para a primeira iteração do projeto.

Em outro projeto que eu estava trabalhando, eu usava [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/), e desta vez eu queria tentar algo diferente.

Acontece que trabalhar com widgets ttk era realmente doloroso. Tive que escrever alguns widgets eu mesmo, mas tive muita dificuldade para descobrir como fazer coisas básicas que eu queria. A parte do backend não foi tão difícil: demorou um pouco, mas consegui construir um motor capaz de gerar dados para serem usados pelo motor de simulação de partidas. Depois de muito tempo experimentando, também construí um motor de simulação de partidas bom o suficiente.

Mas a GUI era algo que eu realmente queria resolver sem JS. Tentei de tudo. Tentei usar [**Qt**](https://www.qt.io/), mas também não gostei. Acabei indo para uma aventura bem selvagem: tentei usar um backend [**Flask**](https://flask.palletsprojects.com/) com um frontend que usava templates Jinja2 para renderizar o HTML, e para imitar o comportamento do React, eu usava [**HTMX**](https://htmx.org/) com [**AlpineJS**](https://alpinejs.dev/).

Mais tarde, troquei o Flask pelo [**FastAPI**](https://fastapi.tiangolo.com/), e reescrevi todo o backend para usar [**SQLModel**](https://sqlmodel.tiangolo.com/), que é uma mistura de [**Pydantic**](https://pydantic-docs.helpmanual.io/) e [**SQLAlchemy**](https://www.sqlalchemy.org/). Para fornecer o estilo, usei [**Tailwindcss**](https://tailwindcss.com/).

A cereja do bolo, para fornecer a experiência desktop que eu queria, eu usava [**Pywebview**](https://pywebview.flowrl.com/), e precisava usar [**uvicorn**](https://www.uvicorn.org/) para fornecer o servidor web para o FastAPI se conectar com o Pywebview.

Acontece que essa solução Frankenstein não era nada fácil de trabalhar. Percebi que estava caindo numa armadilha que eu mesmo criei, ao invés de facilitar as coisas para mim. Era realmente difícil ter uma boa performance com Pywebview, e empacotar este app como uma solução desktop é algo que eu nem sei como resolveria. Eu estava prestes a simplesmente dizer às pessoas para iniciar o servidor, abrir o jogo no navegador e pronto.

Eu também tentei fazer Python funcionar com React, mas não foi uma boa experiência, tanto para desenvolvimento quanto para UX.

## Rust ao resgate

Eu programo em Rust há bastante tempo. É uma linguagem muito poderosa, porém pedante. Eu gosto de usá-la, apesar de ser difícil acertar algumas coisas no início. Mas ela entrega uma performance incomparável, e tem uma comunidade muito dedicada para os propósitos que eu estava buscando.

[**Tauri**](https://tauri.app/) é um dos projetos que mais me interessava. Se eu queria evitar usar tecnologias relacionadas a JS, como **Electron**, parecia que esse seria o caminho.

Minha ideia inicial era usar **Tauri** com [**Leptos**](https://leptos.dev/) para o frontend. Uma stack completamente baseada em **Rust**. Mas foi muito mais difícil do que eu esperava. Rust para o frontend é poderoso, mas não agradável.

Então, decidi ir pelo caminho mais fácil: manter o poder e a performance do Rust para o backend, preservando o Tauri, e usar **React** para o frontend. Desta vez, eu não precisaria mexer tanto no código React. A IA tem ajudado muito na programação de frontends ultimamente, e cortando caminho nesse aspecto. E funciona muito bem para estilização e para fazer todo o boilerplate que eu detesto.

Foi simplesmente a combinação perfeita.

## O que ganhamos com isso

A essa altura, é bem óbvio que a jornada foi muito árdua. Eu tentei ao máximo fazer Python funcionar, por amor à linguagem, mas simplesmente não deu certo. Um dia ainda quero escrever algo sólido assim em Python.

No final, trocamos uma solução monstruosa de FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn, por algo que era apenas Tauri + Rust + React. Muito mais simples, robusto e testado em batalha.

Não só recuperei minha sanidade, mas também ganhei muito mais estabilidade, performance, e uma experiência geral melhor para o usuário final. Desenvolvedores também poderão contribuir e entender o projeto facilmente.

Na stack anterior, você tinha que usar [**uv**](https://docs.astral.sh/uv/) para configurar o projeto e instalar as dependências, e rodar alguns scripts que eu tinha preparado para iniciar o servidor e o frontend.

Com a nova stack, você ainda precisa de Rust e NodeJS instalados, mas apenas rodando `npm run tauri dev`, você inicia tudo que precisa para desenvolver o projeto, com hot-reloading habilitado (que não estava disponível na stack anterior). Simplesmente uma experiência de desenvolvedor maravilhosa.

## Olhando para o futuro

A reescrita em Rust não foi apenas uma atualização técnica: foi a base para tudo que queremos construir. Muito mais sólido, com performance estável, uma melhor experiência de desenvolvedor e uma interface bonita para o usuário final.

O jogo ainda está em desenvolvimento inicial, mas a base é sólida. Estamos empolgados com o que vem a seguir.
