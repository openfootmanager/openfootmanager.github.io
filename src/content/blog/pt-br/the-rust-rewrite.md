---
title: "Por Que Reescrevemos Tudo em Rust"
description: "A história por trás da nossa decisão de reescrever o Openfoot Manager de Python para Rust e o que isso significa para o futuro do projeto."
pubDate: 2026-03-01T00:00:00.000Z
author: "Sturdy Robot"
tags: ["notas-dev", "rust"]
image: "/trophycrowd.jpg"
lang: "pt-br"
---

Uma das decisões mais importantes na história do Openfoot Manager foi reescrever completamente o motor do jogo, migrando de Python para Rust, e usar React no frontend. Aqui explico por que tomamos essa decisão, o que ganhamos com ela e para onde estamos indo.

## O início do projeto

O Openfoot Manager começou em 2020 como um projeto em Python. Python foi uma escolha natural para mim: é uma linguagem acessível, com um ecossistema muito rico, e era a linguagem com a qual eu tinha mais familiaridade na época. Além disso, gosto muito de escrever em Python e valorizo bastante a sua comunidade.

Os primeiros protótipos surgiram quando eu ainda não sabia exatamente o que estava fazendo. Testei muitas ideias para construir uma simulação de partidas sólida. Elas funcionavam, mas transformar isso em um projeto completo e bem estruturado foi um grande desafio.

Quando comecei a trabalhar no primeiro MVP, eu tinha várias opções de GUI disponíveis. Eu não queria usar frameworks de frontend em JavaScript (já tinha tido experiências ruins no passado), então acabei escolhendo o [**ttkbootstrap**](https://ttkbootstrap.readthedocs.io/en/latest/) para a primeira versão do projeto.

Em outro projeto, eu utilizava [**PySimpleGUI**](https://docs.pysimplegui.com/en/latest/) e, dessa vez, queria experimentar algo diferente.

Rapidamente ficou claro que trabalhar com widgets ttk era bastante frustrante. Precisei escrever alguns widgets do zero e, ainda assim, tive muita dificuldade para implementar coisas simples. O backend foi mais tranquilo: com o tempo, consegui construir um motor capaz de gerar os dados necessários para a simulação das partidas. Depois de muitas tentativas, cheguei a um motor de simulação bom o suficiente.

A GUI, no entanto, continuava sendo um problema, e eu queria resolvê-la sem recorrer ao JavaScript. Tentei de tudo. Também experimentei [**Qt**](https://www.qt.io/), mas não me agradou. No fim, acabei criando uma solução bastante ousada: um backend com [**Flask**](https://flask.palletsprojects.com/), um frontend usando templates Jinja2 para renderizar o HTML e, para imitar o comportamento do React, o uso de [**HTMX**](https://htmx.org/) em conjunto com [**AlpineJS**](https://alpinejs.dev/).

Mais tarde, substituí o Flask pelo [**FastAPI**](https://fastapi.tiangolo.com/) e reescrevi todo o backend usando [**SQLModel**](https://sqlmodel.tiangolo.com/), que combina [**Pydantic**](https://pydantic-docs.helpmanual.io/) e [**SQLAlchemy**](https://www.sqlalchemy.org/). Para o visual, utilizei [**Tailwindcss**](https://tailwindcss.com/).

Para entregar a experiência desktop que eu desejava, integrei o [**Pywebview**](https://pywebview.flowrl.com/) e utilizei o [**uvicorn**](https://www.uvicorn.org/) como servidor web para permitir a comunicação entre o FastAPI e o Pywebview.

Essa solução Frankenstein acabou sendo extremamente difícil de manter. Percebi que estava complicando as coisas em vez de simplificá-las. Conseguir uma boa performance com Pywebview era difícil, e empacotar a aplicação como um software desktop continuava sendo um problema sem solução clara. Eu estava quase dizendo aos usuários para simplesmente iniciar o servidor e abrir o jogo no navegador.

Também tentei integrar Python com React, mas a experiência não foi boa, nem para desenvolvimento nem para UX.

## Rust ao resgate

Eu programo em Rust há bastante tempo. É uma linguagem muito poderosa, mas também bastante exigente. Não é fácil acertar tudo de primeira, mas em troca ela oferece desempenho excelente e alta confiabilidade. Além disso, a comunidade é extremamente engajada e alinhada com o tipo de projeto que eu queria construir.

[**Tauri**](https://tauri.app/) foi um dos projetos que mais me chamou a atenção. Se a ideia era evitar tecnologias muito dependentes de JavaScript, como o **Electron**, o Tauri parecia o caminho certo.

Minha ideia inicial era usar **Tauri** com [**Leptos**](https://leptos.dev/) no frontend, criando uma stack totalmente baseada em **Rust**. Na prática, isso se mostrou muito mais complexo do que eu esperava. Rust no frontend é poderoso, mas pouco agradável de trabalhar.

Então, optei por uma abordagem mais pragmática: manter Rust no backend, continuar usando o Tauri e adotar **React** no frontend. Dessa vez, precisei mexer muito pouco no código React. As ferramentas de IA têm ajudado bastante no desenvolvimento frontend, especialmente com estilização e todo o boilerplate que eu não gosto de escrever.

No fim das contas, foi a combinação perfeita.

## O que ganhamos com essa mudança

Olhando para trás, fica claro o quão difícil foi essa jornada. Eu realmente tentei fazer Python funcionar, por amor à linguagem, mas simplesmente não era a melhor escolha para esse projeto. Ainda assim, espero poder construir algo desse porte em Python no futuro.

No final, trocamos uma solução extremamente complexa baseada em FastAPI + SQLModel + Pywebview + HTMX + Jinja2 + AlpineJS + uvicorn por algo muito mais simples: Tauri + Rust + React. Mais simples, mais robusto e já bem testado.

Além de recuperar minha sanidade, ganhamos muito mais estabilidade, desempenho e uma experiência muito melhor para o usuário final. O projeto também se tornou muito mais fácil de entender e de receber contribuições de outros desenvolvedores.

Na stack antiga, era necessário usar [**uv**](https://docs.astral.sh/uv/) para instalar dependências e executar vários scripts para iniciar o backend e o frontend.

Com a nova stack, basta ter Rust e NodeJS instalados e rodar `npm run tauri dev` para iniciar todo o ambiente de desenvolvimento, com hot-reloading ativado — algo que não existia antes. Uma experiência de desenvolvimento simplesmente excelente.

## Olhando para o futuro

A reescrita em Rust não foi apenas uma melhoria técnica. Ela representa a base de tudo o que queremos construir daqui para frente: mais estabilidade, melhor desempenho, uma ótima experiência para desenvolvedores e uma interface bonita para os usuários.

O jogo ainda está em desenvolvimento inicial, mas a base é sólida. Estamos muito empolgados com o que vem a seguir.