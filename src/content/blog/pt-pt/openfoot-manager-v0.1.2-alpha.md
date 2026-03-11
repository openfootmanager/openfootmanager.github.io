---
title: "Openfoot Manager v0.1.2-alpha - A corrigir uma grande asneira"
description: "Ups, cometemos uma grande asneira na versão anterior. Aqui está a correção."
pubDate: 2026-03-10T21:04:00.000Z
author: "Sturdy Robot"
tags: ["lançamento", "anúncio", "patch", "correções de bugs"]
image: "/images/features/manage_squad.png"
lang: "pt-pt"
---

Antes de lançarmos a v0.1.1-alpha, estive a testar algumas coisas para garantir que tudo estava a funcionar como esperado. Encontrei alguns problemas, corrigi-os, e lançámos a v0.1.1. Mas aquilo que eu achava que estava resolvido aparentemente tinha uma causa mais profunda, e no fim a v0.1.1-alpha saiu com um bug crítico que te impedia de começar um novo jogo.

Existe um desenrascanço para este problema, mas não é o ideal. Eu sei que o pessoal se vai queixar disso, por isso prefiro corrigir já. Pensei em lançar um hotfix, tirar os downloads antigos do ar e republicar tudo como se nada tivesse acontecido. Mas isso não estaria certo. Tenho de assumir os meus erros e lidar com as consequências. Por isso, passei a versão para 0.1.2-alpha. Tecnicamente podia chamar-lhe 0.1.1.1, mas segundo o [SemVer](https://semver.org/), isso não estaria correto.

Bom, foi isto que aconteceu:

- A nova combobox de nacionalidade que adicionámos estava a comportar-se de forma muito estranha. Às vezes deixava-te selecionar um país, e às vezes não.
- Achei que sabia como corrigir aquilo, e escrevi alguns testes para impedir que voltasse a acontecer. Deixei de conseguir reproduzir o problema, por isso dei o assunto por encerrado.
- Mas o problema era bem mais fundo do que isso. No fim, descobriu-se que havia uma interação estranha entre a combobox do mês e a combobox de nacionalidade. Se abrisses primeiro a combobox do mês, a de nacionalidade deixava de te permitir selecionar qualquer país. Quando percebi qual era o problema real, finalmente consegui corrigi-lo, mas a v0.1.1 já tinha saído.
- Depois disso, decidi testar o jogo em Windows e tive outra surpresa desagradável: as bandeiras dos países não eram suportadas lá. Grande chatice. Funcionava em Linux e macOS, mas esqueci-me de testar precisamente na maior plataforma de todas. Por isso, tive de adicionar dependências de terceiros para mostrar bandeiras de países em todas as plataformas. Espero que isso resolva.

Sim, é uma release pequena, mas se não conseguires selecionar a tua nacionalidade, não consegues começar um novo jogo. E se não souberes que abrir primeiro a combobox do mês é o que parte tudo, vais simplesmente ficar bloqueado e frustrado porque eu cometi a asneira de não verificar isso como devia.

Acontece.

Mas agora está corrigido! (Espero eu.)

Desculpa pelo incómodo. Já podes descarregar a nova versão na [página de transferências](/pt-pt/download).

Muito obrigado pelo teu apoio!

Até à próxima!
