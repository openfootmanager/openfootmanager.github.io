---
title: "Openfoot Manager v0.1.0-alpha Chegou"
description: "A primeira versão alfa pública do Openfoot Manager está finalmente disponível. Eis o que podes esperar, o que está incluído e o que ainda falta."
pubDate: 2026-03-02T16:54:00.000Z
author: "Sturdy Robot"
tags: ["lançamento", "anúncio"]
image: "/crowd.jpg"
lang: "pt-pt"
---

Não acredito que estou a escrever isto.

Depois de anos a mexer, reescrever, deitar coisas fora e recomeçar, o **Openfoot Manager v0.1.0-alpha** está finalmente disponível para as pessoas transferirem e jogarem. Não está perfeito — longe disso, na verdade — mas é real, funciona, e dá para gerir um clube de futebol nele. Só isso já me parece um pequeno milagre.

## Um pouco de contexto

Se tens acompanhado este projeto, já conheces a história: tudo começou em 2020 como um projeto hobby em Python. Eu só queria criar um jogo de gestão de futebol que fosse gratuito, de código aberto e divertido. Algo que não exigisse gastar dinheiro, não precisasse de ligação à internet e que pudesses modificar como quisesses.

Foram muitos desvios até chegar aqui. Protótipos em Python, pesadelos com frameworks de interface, uma reescrita completa em Rust, aprender React pelo caminho... foi uma jornada. Mas aqui estamos.

## O que se pode fazer no jogo?

Deixa-me mostrar-te o que está a funcionar agora:

- **Escolhe um clube e gere-o.** Começas o jogo, escolhes uma equipa e és o treinador. Simples assim.
- **Monta o teu plantel.** Escolhe a formação, escala os titulares, define os batedores de bolas paradas e configura o teu estilo tático (ofensivo, defensivo, equilibrado, contra-ataque, posse de bola).
- **Assiste aos jogos a desenrolarem-se.** O motor de jogo simula partidas minuto a minuto com uma interface estilo transmissão televisiva. Vais ver golos, cartões, substituições, lesões e todo o drama esperado. Podes acelerar ou abrandar a velocidade.
- **Treina os teus jogadores.** São 6 focos de treino e 3 níveis de intensidade. Jogadores jovens evoluem mais rápido, jogadores mais velhos declinam. A tua equipa técnica influencia a eficácia do treino.
- **Contrata e gere o staff.** Treinadores, fisioterapeutas, olheiros — cada um com as suas especializações e níveis de competência. Fazem diferença.
- **Cuida das finanças.** Tens um orçamento, salários para pagar e precisas de manter as coisas sustentáveis. Vai à falência e... bom, não vás à falência.
- **Compra e vende jogadores.** O mercado de transferências está lá. Podes comprar jogadores, vendê-los, emprestá-los. Clubes controlados pela IA também fazem os seus movimentos.
- **Acompanha a liga.** Uma liga de 16 equipas com formato de duas voltas. Classificação, calendário de jogos, resultados — está tudo lá.
- **Lê as notícias.** O jogo gera relatórios de jogo, rumores de transferências, atualizações de lesões e outras notícias para te manter imerso.
- **Modifica o jogo.** Todos os dados do jogo ficam em ficheiros JSON externos. Queres criar a tua própria liga com as tuas próprias equipas e jogadores? Força.

E o jogo todo está **totalmente traduzido em 6 idiomas**: inglês, português do Brasil, português de Portugal, espanhol, francês e alemão.

## O que NÃO tem no jogo (ainda)

Vou ser honesto sobre o que está a faltar. Isto é uma versão alfa, e nota-se:

- **Sem taças.** É só a liga por agora.
- **Sem formação de jovens.** Ainda não dá para desenvolver jovens talentos através de um sistema de formação.
- **Sem interações com jogadores.** Os jogadores não vêm ter contigo com queixas ou pedidos.
- **Sem sistema de olheiros detalhado.** Olheiros existem, mas o sistema é bastante básico. Ainda não dá para enviar olheiros para observar jogadores ou ligas específicas.
- **Sem visualização 3D.** Os jogos são baseados em texto com uma interface de transmissão. Sem visualização do campo ainda.
- **Sem tutoriais.** Vais precisar de descobrir as coisas por conta própria durante um tempo. Desculpa por isso.

Também provavelmente vai haver bugs. Provavelmente bastantes. Ficheiros de save desta versão podem não funcionar com versões futuras também. Esta é a realidade de uma versão alfa.

## Porquê lançar agora?

Porque se ficasse à espera de estar "pronto", nunca lançaria. A certa altura, é preciso simplesmente pôr cá fora e deixar as pessoas experimentarem. O ciclo principal de gameplay funciona: geres um clube, jogas partidas, tomas decisões, e essas decisões têm consequências. Isso é suficiente para começar.

Também quero muito feedback. Tenho estado a olhar para isto há tanto tempo que já não consigo ver com clareza. Olhos frescos vão notar coisas que eu perdi e ajudar-me a perceber no que me devo focar a seguir.

## O que vem a seguir?

O plano é continuar a iterar. Competições de taça provavelmente são a próxima grande funcionalidade. Também quero melhorar os treinadores da IA, adicionar mais profundidade ao sistema de olheiros e, no geral, polir tudo.

Se quiseres acompanhar, dá uma estrela ao [repositório do GitHub](https://github.com/openfootmanager/openfootmanager). Se encontrares bugs — e vais encontrar — por favor [abre um issue](https://github.com/openfootmanager/openfootmanager/issues). Se quiseres contribuir com código, traduções, bases de dados personalizadas ou qualquer outra coisa, consulta o [guia de contribuição](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).

## Transfere o jogo

Vai à [página de transferências](/pt-pt/download) para obter o jogo para Windows, macOS ou Linux.

Obrigado por estares aqui. A sério. Mesmo que só tenhas transferido para experimentar durante cinco minutos, isso significa muito para mim. Vamos ver onde isto vai dar.
