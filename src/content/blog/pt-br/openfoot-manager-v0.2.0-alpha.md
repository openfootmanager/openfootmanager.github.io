---
title: "Lançamento do Openfoot Manager v0.2.0-alpha"
description: "Esta versão é um salto enorme: contratos, transferências, finanças, empregos, categorias de base, notícias do mundo e muito polimento conquistado com esforço."
pubDate: 2026-05-18T18:00:00.000Z
author: "Sturdy Robot"
tags: ["lançamento", "anúncio", "alpha", "jogabilidade", "correções de bugs"]
image: "/images/020-new-features/020releasenotes.jpg"
lang: "pt-br"
---

Depois de cerca de dois meses de trabalho, 350+ commits, 517 arquivos alterados, 1600+ testes unitários automatizados e um monte de correções de bugs, **Openfoot Manager v0.2.0-alpha** finalmente chegou.

Tem coisa demais aqui, e sinceramente foi difícil acompanhar tudo, então vamos direto para os principais destaques.

## Contratos, transferências e finanças

Passamos bastante tempo fazendo o lado financeiro do jogo importar muito mais desta vez.

<table>
<tr>
<td>
<img src="/images/020-new-features/renew-contract.PNG" alt="Renovando contrato" width="100%">
</td>
<td>
<img src="/images/020-new-features/transfer-bid.PNG" alt="Oferta de transferência" width="100%">
</td>
</tr>
</table>

Agora existe um sistema de contratos e transferências muito mais completo, em que as negociações podem dar certo, emperrar ou desandar.

Renovações, rescisões e vencimentos de contrato agora fazem parte do jogo, então segurar seus jogadores mais importantes exige um pouco mais de atenção do que antes.

<img src="/images/020-new-features/finances-screen.PNG" alt="Contratos, transferências e finanças" width="95%">

Os sistemas financeiros também foram reformulados. Agora você pode fechar patrocínios, sair das dívidas e investir nas instalações do clube para ajudar no progresso a longo prazo, mas tudo isso tem um custo real, então o controle do orçamento finalmente importa.

## Ficar desempregado agora faz parte do jogo

Esta versão também traz mais peso para a carreira: desemprego. Agora você pode ser demitido se a diretoria não estiver satisfeita com o seu trabalho.

Mas isso não é game over. O desemprego agora é jogável, tem tratamento próprio no dashboard e vem com um mercado de trabalho de verdade ao redor dele. Enquanto você estiver sem clube, pode receber ofertas passivas, se candidatar manualmente, acompanhar vagas, receber respostas na caixa de entrada e ver o resultado dos processos.

Esse sistema também conversa com a simulação do mundo. Agora existe uma rotatividade de técnicos mais visível, lógica de reposição de vagas, movimentação no fim da temporada e atualizações mais claras sobre nomeações e vagas abertas. Isso faz diferença, porque deixa o mundo menos congelado ao redor do jogador.

## O mundo agora parece mais vivo

Um dos principais objetivos da 0.2.0 foi fazer o mundo parecer mais vivo: rumores de transferência, calendário de pré-temporada, notícias de lesão e mais atividade no geral.

<img src="/images/020-new-features/preseason-status.PNG" alt="Status da pré-temporada" width="95%">

Agora você pode disputar amistosos de pré-temporada, e o jogo também conta com uma janela de transferências ativa em que clubes controlados pela IA também participam das negociações.

Outros clubes podem contratar ou demitir técnicos, seguir tocando a própria vida e, além disso, você agora consegue ver resultados de outras partidas na tela de pós-jogo.

A geração de mundo e os dados do save agora suportam profundidade configurável de histórico com arquivos persistidos de história do mundo. O jogo agora consegue gerar até 24 temporadas passadas, para você ver quem foram os campeões anteriores, os jogadores mais importantes, os técnicos mais bem-sucedidos e muito mais.

## Jogadores, elenco e evolução de longo prazo avançaram

Os perfis de jogadores e times receberam uma melhora bem relevante nesta versão. Agora dá para explorar estatísticas avançadas, histórico recente de partidas e dados estatísticos bem mais ricos.

A categoria de base deixou de ser só um recurso provisório. Agora você pode observar jovens jogadores, promovê-los ao time principal ou mandar jogadores elegíveis de volta para a base. O jogo também vai avisar quando você encontrar um possível **Prodígio**.

### Novas posições de jogadores

<img src="/images/020-new-features/player-positions.PNG" alt="Posições dos jogadores" width="95%">

Também vale mencionar que as posições agora são muito mais granulares. Em vez de apenas rótulos amplos como defensor, meio-campista e atacante, os jogadores agora podem ser identificados com mais precisão como laterais-direitos, zagueiros, laterais-esquerdos, alas, volantes, meio-campistas centrais, meias ofensivos, jogadores de lado e centroavantes.

Isso também conversa com a lógica atualizada de **OVR**, que agora pesa o papel do jogador de forma mais adequada e facilita identificar craques de primeira linha de relance.

Jogadores livres também podem ser contratados agora, e existe uma tela dedicada para lidar com esse mercado.

Os sistemas de condicionamento físico e departamento médico também foram ampliados com um atributo próprio de fitness, progressão de recuperação de lesões, efeitos de recuperação no treino com base em idade, moral e condição, além de ajustes no comportamento de stamina e recuperação.

## Novo idioma suportado

<img src="/images/020-new-features/simplified-chinese.PNG" alt="Chinês Simplificado" width="45%">

O Chinês Simplificado (ZH-CN) foi adicionado à lista de idiomas suportados.

Outros idiomas serão adicionados nas próximas versões (russo e turco estão na lista).

## Muita coisa de UX também foi polida

### Modo claro na Simulação da Partida

<img src="/images/020-new-features/light-mode-match-sim.PNG" alt="Modo claro na simulação da partida" width="70%">

A tela de simulação da partida agora suporta modo claro para quem prefere uma interface mais clara.

### **Hall da Fama** e **Central de Transferências**

<table>
<tr>
<td>
<img src="/images/020-new-features/hall-of-fame.PNG" alt="Hall da Fama" width="80%">
</td>
<td>
<img src="/images/020-new-features/transfer-centre.PNG" alt="Central de Transferências" width="80%">
</td>
</tr>
</table>

O jogo agora também tem páginas de **Hall da Fama** e **Central de Transferências**, dando um jeito melhor de acompanhar a história passada e os rumores de transferência ao redor do mundo.

### Escolha a sua temporada inicial

<table>
<tr>
<td>
<img src="/images/020-new-features/new-manager-starting-season.PNG" alt="Nova carreira começando na temporada" width="70%">
</td>
<td>
<img src="/images/020-new-features/new-manager-starting-season2.PNG" alt="Nova carreira começando no meio da temporada" width="60%">
</td>
</tr>
</table>

Ao criar um novo jogo, agora você também pode escolher o ano e o ponto da temporada em que quer começar, seja do início ou do meio da temporada.

### Problemas de tradução

Outro foco foi limpar o máximo possível dos problemas de tradução que encontramos.

Muitas strings que estavam sem tradução agora foram devidamente traduzidas. E se você encontrar algo que não foi traduzido para o seu idioma (ou foi traduzido de forma errada), por favor envie isso como issue no [repositório do GitHub](https://github.com/openfootmanager/openfootmanager/issues).

## Correções, polimento e muita limpeza importante

Esta versão não é só sobre adicionar sistemas novos e chamativos. Também tem muita limpeza importante aqui.

Algumas das correções e melhorias mais relevantes incluem:

- Os dias restantes de recuperação de lesão agora diminuem corretamente no avanço diário do tempo.
- A simulação de partidas está mais robusta contra snapshots nulos.
- A ordem do onze inicial agora é normalizada corretamente ao salvar e migrar dados.
- A persistência das ligas foi reforçada para limpar dados obsoletos durante upserts.
- A validação de propostas de transferência agora considera corretamente as taxas da oferta.
- As mensagens de confiança da diretoria agora usam o identificador correto baseado na data da derrota.
- As visões de elenco na home não mostram mais jogadores da base onde eles não deveriam aparecer.
- As heurísticas de notícias e jogadores notáveis agora usam o contexto correto do time.
- O mapeamento de variantes de localidade e o comportamento de fallback para strings sem tradução foram melhorados.
- O menu principal recebeu correções de overflow, correções no dropdown de nacionalidade e melhor validação de idade do técnico.
- A lógica de exibição da próxima partida agora usa de forma consistente o ID do time do usuário.
- O tratamento de datas no início da temporada e no fim da temporada foi ajustado.
- O feedback de moral e os deltas de moral agora são exibidos com mais precisão.
- O desgaste de stamina e a recuperação foram ajustados para refletir melhor a carga de jogo.
- A localização de partidas e notícias melhorou em relatórios, classificação, substituições, fases de eventos, prêmios e mensagens de gerenciamento de jogadores.

Essas não são as notas mais chamativas do mundo, mas importam bastante. É esse tipo de limpeza que impede uma grande versão cheia de recursos de desabar pelo próprio peso.

## Notas finais

v0.2.0-alpha é um passo enorme para o projeto. Ainda existe bastante coisa para melhorar, claro, e vamos seguir fazendo isso.

Se você quiser testar, é só passar na [página de download](/pt-br/download).

Muito obrigado pelo apoio.

Até a próxima!