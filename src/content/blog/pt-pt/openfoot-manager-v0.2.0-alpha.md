---
title: "Lançamento do Openfoot Manager v0.2.0-alpha"
description: "Esta versão é um salto enorme: contratos, transferências, finanças, empregos, formação, notícias do mundo e muito polimento conquistado com esforço."
pubDate: 2026-05-18T18:00:00.000Z
author: "Sturdy Robot"
tags: ["lançamento", "anúncio", "alpha", "jogabilidade", "correções de bugs"]
image: "/images/020-new-features/020releasenotes.jpg"
lang: "pt-pt"
---

Depois de cerca de dois meses de trabalho, 350+ commits, 517 ficheiros alterados, 1600+ testes unitários automatizados e uma boa quantidade de correções de bugs, **Openfoot Manager v0.2.0-alpha** finalmente chegou.

Há imensa coisa aqui, e sinceramente foi difícil acompanhar tudo, por isso vamos aos principais destaques.

## Contratos, transferências e finanças

Passámos bastante tempo a fazer com que o lado financeiro do jogo tivesse muito mais peso desta vez.

<table>
<tr>
<td>
<img src="/images/020-new-features/renew-contract.PNG" alt="Renovar contrato" width="100%">
</td>
<td>
<img src="/images/020-new-features/transfer-bid.PNG" alt="Oferta de transferência" width="100%">
</td>
</tr>
</table>

Agora existe um sistema de contratos e transferências bem mais completo, onde as negociações podem correr bem, emperrar ou cair por terra.

Renovações, rescisões e fim de contrato passam agora a fazer parte do jogo, por isso manter os teus jogadores mais importantes exige mais atenção do que antes.

<img src="/images/020-new-features/finances-screen.PNG" alt="Contratos, transferências e finanças" width="95%">

Os sistemas financeiros também foram reformulados. Agora podes fechar patrocínios, recuperar de dívidas e investir nas instalações do clube para apoiar o progresso a longo prazo, mas tudo isso tem um custo real, por isso gerir o orçamento finalmente importa.

## Ficar desempregado agora faz parte do jogo

Esta versão também traz mais risco para a carreira: desemprego. Agora podes ser despedido se a direção não estiver satisfeita com o teu trabalho.

Mas isto não é game over. O desemprego é jogável, tem tratamento próprio no dashboard e vem com um verdadeiro mercado de trabalho à volta dele. Enquanto estiveres sem clube, podes receber ofertas passivas, candidatar-te manualmente, acompanhar vagas, receber respostas na caixa de entrada e ver o resultado dos processos.

Este sistema também se liga à simulação mais ampla. O mundo do jogo agora mostra melhor a rotatividade de treinadores, a lógica de substituição de vagas, as movimentações no final da época e atualizações mais claras sobre nomeações e vagas em aberto. Isto faz muita diferença, porque faz o mundo parecer menos congelado à volta do jogador.

## O mundo agora parece mais vivo

Um dos principais objetivos da 0.2.0 foi fazer o mundo parecer mais vivo: rumores de transferências, calendário de pré-época, notícias de lesões e mais atividade no geral.

<img src="/images/020-new-features/preseason-status.PNG" alt="Estado da pré-época" width="95%">

Agora podes jogar amigáveis de pré-época, e o jogo também passa a ter uma janela de transferências ativa em que os clubes controlados pela IA também participam nas negociações.

Outros clubes podem contratar ou despedir treinadores, seguir com a sua própria vida e, além disso, agora consegues ver resultados de outros jogos no ecrã pós-jogo.

A geração do mundo e os dados do save agora suportam profundidade configurável de histórico com ficheiros persistentes da história do mundo. O jogo consegue agora gerar até 24 épocas passadas, para poderes ver quem foram os campeões anteriores, os jogadores mais importantes, os treinadores com mais sucesso e muito mais.

## Jogadores, plantel e evolução a longo prazo avançaram

Os perfis de jogadores e equipas receberam uma melhoria bem séria nesta versão. Agora podes explorar estatísticas avançadas, histórico recente de jogos e detalhe estatístico muito mais rico.

A academia de formação já não é apenas um espaço reservado. Agora podes observar jovens jogadores, promovê-los à equipa principal ou mover jogadores elegíveis de volta para a equipa jovem. O jogo também avisa quando encontrares um potencial **Prodígio**.

### Novas posições dos jogadores

<img src="/images/020-new-features/player-positions.PNG" alt="Posições dos jogadores" width="95%">

Também vale a pena mencionar que as posições são agora muito mais granulares. Em vez de apenas rótulos gerais como defesa, médio e avançado, os jogadores podem agora ser identificados com mais precisão como laterais-direitos, centrais, laterais-esquerdos, alas, médios defensivos, médios-centro, médios ofensivos, médios de faixa, extremos e pontas de lança.

Isto também se liga à lógica atualizada de **OVR**, que agora avalia o papel do jogador de forma mais adequada e torna mais fácil identificar jogadores de topo à primeira vista.

Os jogadores livres também podem agora ser contratados, e existe um ecrã dedicado para esse mercado.

Os sistemas de condição física e departamento médico também foram expandidos com um atributo próprio de fitness, progressão na recuperação de lesões, efeitos de recuperação no treino com base em idade, moral e condição, além de ajustes ao comportamento de stamina e recuperação.

## Novo idioma suportado

<img src="/images/020-new-features/simplified-chinese.PNG" alt="Chinês Simplificado" width="45%">

O Chinês Simplificado (ZH-CN) foi adicionado à lista de idiomas suportados.

Outros idiomas serão adicionados nas próximas versões (russo e turco estão na lista).

## Também houve muita limpeza de UX

### Modo claro na Simulação da Partida

<img src="/images/020-new-features/light-mode-match-sim.PNG" alt="Modo claro na simulação da partida" width="70%">

O ecrã de simulação da partida agora suporta modo claro para quem prefere uma interface mais luminosa.

### **Galeria da Fama** e **Centro de Transferências**

<table>
<tr>
<td>
<img src="/images/020-new-features/hall-of-fame.PNG" alt="Galeria da Fama" width="80%">
</td>
<td>
<img src="/images/020-new-features/transfer-centre.PNG" alt="Centro de Transferências" width="80%">
</td>
</tr>
</table>

O jogo agora também tem páginas de **Galeria da Fama** e **Centro de Transferências**, dando-te uma forma melhor de acompanhar a história passada e os rumores atuais de transferências à volta do mundo.

### Escolhe a tua época inicial

<table>
<tr>
<td>
<img src="/images/020-new-features/new-manager-starting-season.PNG" alt="Nova carreira a começar na época" width="70%">
</td>
<td>
<img src="/images/020-new-features/new-manager-starting-season2.PNG" alt="Nova carreira a começar a meio da época" width="60%">
</td>
</tr>
</table>

Ao criar um novo jogo, agora também podes escolher o ano e o ponto da época em que queres começar, seja desde o arranque ou a meio da época.

### Problemas de tradução

Outro foco foi limpar o máximo possível dos problemas de tradução que encontrámos.

Muitas strings que estavam sem tradução foram agora devidamente traduzidas. E se encontrares algo que não foi traduzido para o teu idioma (ou foi traduzido de forma incorreta), por favor envia isso como issue no [repositório do GitHub](https://github.com/openfootmanager/openfootmanager/issues).

## Correções, polimento e muita limpeza importante

Esta versão não serve apenas para adicionar sistemas novos e vistosos. Também há muita limpeza importante aqui.

Algumas das correções e melhorias mais relevantes incluem:

- Os dias restantes de recuperação de lesão agora diminuem corretamente no avanço diário do tempo.
- A simulação de partidas está mais robusta contra snapshots nulos.
- A ordem do onze inicial agora é normalizada corretamente ao guardar e migrar dados.
- A persistência das ligas foi reforçada para limpar dados obsoletos durante upserts.
- A validação de propostas de transferência agora considera corretamente as taxas da oferta.
- As mensagens de confiança da direção agora usam o identificador correto com base na data da derrota.
- As vistas de plantel na home já não mostram jogadores da formação onde eles não deviam aparecer.
- As heurísticas de notícias e de jogadores em destaque usam agora o contexto correto da equipa.
- O mapeamento de variantes de localidade e o comportamento de fallback para strings sem tradução foram melhorados.
- O menu principal recebeu correções de overflow, correções no dropdown de nacionalidade e melhor validação da idade do treinador.
- A lógica de apresentação do próximo jogo agora usa de forma consistente o ID da equipa do utilizador.
- O tratamento de datas no início e no fim da época foi ajustado.
- O feedback de moral e os deltas de moral agora são apresentados com mais precisão.
- O desgaste de stamina e a recuperação foram ajustados para refletir melhor a carga de jogo.
- A localização de partidas e notícias melhorou em relatórios, classificações, substituições, fases de eventos, prémios e mensagens de gestão de jogadores.

Estas não são as notas mais chamativas do mundo, mas importam bastante. É este tipo de limpeza que impede uma grande versão cheia de funcionalidades de desabar pelo próprio peso.

## Notas finais

v0.2.0-alpha é um passo enorme para o projeto. Ainda há muita coisa para melhorar, claro, e vamos continuar a fazê-lo.

Se quiseres experimentar, passa pela [página de download](/pt-pt/download).

Muito obrigado pelo apoio.

Até à próxima!