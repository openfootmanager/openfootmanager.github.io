---
title: "Openfoot Manager v0.1.2-alpha - Consertando uma baita mancada"
description: "Ops, a gente cometeu uma baita mancada na versão anterior. Aqui está a correção."
pubDate: 2026-03-10T21:04:00.000Z
author: "Sturdy Robot"
tags: ["lançamento", "anúncio", "patch", "correções de bugs"]
image: "/images/features/manage_squad.png"
lang: "pt-br"
---

Antes de lançar a v0.1.1-alpha, eu estava testando algumas coisas para ter certeza de que tudo estava funcionando como esperado. Encontrei alguns problemas, corrigi, e lançamos a v0.1.1. Mas aquilo que eu achava que estava resolvido aparentemente tinha uma causa mais profunda, e no fim a v0.1.1-alpha saiu com um bug crítico que impedia você de começar um novo jogo.

Existe uma gambiarra para esse problema, mas ela não é o ideal. Eu sei que a galera vai reclamar disso, então prefiro corrigir agora. Eu pensei em lançar um hotfix, tirar os downloads antigos do ar e republicar tudo como se nada tivesse acontecido. Mas isso não seria certo. Eu preciso assumir meus erros e lidar com as consequências. Então subi a versão para 0.1.2-alpha. Tecnicamente eu poderia chamar de 0.1.1.1, mas de acordo com o [SemVer](https://semver.org/), isso não estaria correto.

Bom, foi isso que aconteceu:

- A nova combobox de nacionalidade que a gente adicionou estava se comportando de um jeito bem estranho. Às vezes ela deixava você selecionar um país, e às vezes não.
- Eu achei que sabia como corrigir, e escrevi alguns testes para impedir que isso acontecesse de novo. Parei de conseguir reproduzir o problema, então dei o assunto por encerrado.
- Mas o buraco era mais embaixo. No fim das contas, existia uma interação esquisita entre a combobox do mês e a combobox de nacionalidade. Se você abrisse primeiro a combobox do mês, a de nacionalidade não deixava mais selecionar nenhum país. Quando eu entendi qual era o problema de verdade, finalmente consegui corrigir, mas a v0.1.1 já tinha saído.
- Depois disso, resolvi testar o jogo no Windows e levei outra surpresa desagradável: as bandeiras dos países não eram suportadas lá. Um saco. Funcionava no Linux e no macOS, mas eu esqueci de testar justamente na maior plataforma de todas. Então tive que adicionar dependências de terceiros para mostrar as bandeiras dos países em todas as plataformas. Espero que isso resolva.

Sim, é uma versão pequena, mas se você não consegue selecionar sua nacionalidade, não consegue começar um novo jogo. E se você não souber que abrir a combobox do mês primeiro é o que quebra tudo, vai acabar travado e frustrado porque eu cometi a besteira de não verificar isso direito.

Acontece.

Mas agora está corrigido! (Eu espero.)

Desculpa pelo transtorno. Você já pode baixar a nova versão na [página de download](/pt-br/download).

Muito obrigado pelo seu apoio!

Até a próxima!
