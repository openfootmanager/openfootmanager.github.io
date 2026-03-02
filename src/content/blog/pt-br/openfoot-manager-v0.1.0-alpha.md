---
title: "Openfoot Manager v0.1.0-alpha Chegou"
description: "A primeira versão alfa pública do Openfoot Manager finalmente está disponível. Veja o que esperar, o que tem no jogo e o que ainda está faltando."
pubDate: 2026-03-02T16:54:00.000Z
author: "Sturdy Robot"
tags: ["lançamento", "anúncio"]
image: "/crowd.jpg"
lang: "pt-br"
---

Eu não acredito que estou escrevendo isso.

Depois de anos mexendo, reescrevendo, jogando coisas fora e recomeçando, o **Openfoot Manager v0.1.0-alpha** finalmente está no ar para as pessoas baixarem e jogarem. Não está perfeito — longe disso, na verdade — mas é real, funciona, e dá pra gerenciar um clube de futebol nele. Só isso já parece um pequeno milagre pra mim.

## Um pouco de contexto

Se você acompanha esse projeto, já conhece a história: tudo começou em 2020 como um projeto hobby em Python. Eu só queria criar um jogo de gerenciamento de futebol que fosse gratuito, de código aberto e divertido. Algo que não exigisse gastar dinheiro, não precisasse de conexão com a internet e que você pudesse modificar do jeito que quisesse.

Foram muitos desvios até chegar aqui. Protótipos em Python, pesadelos com frameworks de interface, uma reescrita completa em Rust, aprender React pelo caminho... foi uma jornada. Mas aqui estamos.

## O que dá pra fazer no jogo?

Deixa eu te mostrar o que está funcionando agora:

- **Escolha um clube e gerencie.** Você começa o jogo, escolhe um time e é o técnico. Simples assim.
- **Monte seu elenco.** Escolha a formação, escale os titulares, defina os batedores de falta e escanteio, e configure seu estilo tático (ofensivo, defensivo, equilibrado, contra-ataque, posse de bola).
- **Assista às partidas acontecerem.** O motor de partidas simula jogos minuto a minuto com uma interface estilo transmissão de TV. Você vai ver gols, cartões, substituições, lesões e todo o drama esperado. Dá pra acelerar ou diminuir a velocidade.
- **Treine seus jogadores.** São 6 focos de treinamento e 3 níveis de intensidade. Jogadores jovens evoluem mais rápido, jogadores mais velhos declinam. Sua comissão técnica influencia a efetividade do treinamento.
- **Contrate e gerencie o staff.** Treinadores, fisioterapeutas, olheiros — cada um com suas especializações e níveis de habilidade. Eles fazem diferença.
- **Cuide das finanças.** Você tem um orçamento, salários pra pagar e precisa manter as coisas sustentáveis. Quebre e... bom, não quebre.
- **Compre e venda jogadores.** O mercado de transferências está lá. Você pode comprar jogadores, vendê-los, emprestá-los. Clubes controlados pela IA também fazem suas jogadas.
- **Acompanhe a liga.** Uma liga de 16 times com formato de turno e returno. Classificação, tabela de jogos, resultados — está tudo lá.
- **Leia as notícias.** O jogo gera relatórios de partida, rumores de transferência, atualizações de lesões e outras notícias pra te manter imerso.
- **Modifique o jogo.** Todos os dados do jogo ficam em arquivos JSON externos. Quer criar sua própria liga com seus próprios times e jogadores? Vai fundo.

E o jogo todo é **totalmente traduzido em 6 idiomas**: inglês, português brasileiro, português de Portugal, espanhol, francês e alemão.

## O que NÃO tem no jogo (ainda)

Vou ser honesto sobre o que está faltando. Isso é uma versão alfa, e dá pra notar:

- **Sem copas.** É só a liga por enquanto.
- **Sem categorias de base.** Ainda não dá pra desenvolver jovens talentos através de um sistema de base.
- **Sem interações com jogadores.** Os jogadores não vêm até você com reclamações ou pedidos.
- **Sem sistema de olheiros detalhado.** Olheiros existem, mas o sistema é bem básico. Ainda não dá pra enviar olheiros para observar jogadores ou ligas específicas.
- **Sem visualização 3D.** As partidas são baseadas em texto com uma interface de transmissão. Sem visualização do campo ainda.
- **Sem tutoriais.** Você vai precisar descobrir as coisas por conta própria por um tempo. Desculpa por isso.

Também provavelmente vai ter bugs. Provavelmente bastante. Arquivos de save dessa versão podem não funcionar com versões futuras também. Essa é a realidade de uma versão alfa.

## Por que lançar agora?

Porque se eu ficasse esperando ficar "pronto", nunca lançaria. Em algum momento você só precisa colocar no mundo e deixar as pessoas experimentarem. O ciclo principal de gameplay funciona: você gerencia um clube, joga partidas, toma decisões, e essas decisões têm consequências. Isso é suficiente pra começar.

Eu também quero muito feedback. Eu venho olhando pra isso há tanto tempo que não consigo mais enxergar com clareza. Olhos frescos vão perceber coisas que eu perdi e me ajudar a entender no que focar a seguir.

## O que vem a seguir?

O plano é continuar iterando. Competições de copa provavelmente são a próxima grande funcionalidade. Também quero melhorar os técnicos da IA, adicionar mais profundidade ao sistema de olheiros e, no geral, polir tudo.

Se quiser acompanhar, dê uma estrela no [repositório do GitHub](https://github.com/openfootmanager/openfootmanager). Se encontrar bugs — e vai encontrar — por favor [abra uma issue](https://github.com/openfootmanager/openfootmanager/issues). Se quiser contribuir com código, traduções, bases de dados personalizadas ou qualquer outra coisa, confira o [guia de contribuição](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).

## Baixe o jogo

Vá até a [página de download](/pt-br/download) para baixar o jogo para Windows, macOS ou Linux.

Obrigado por estar aqui. De verdade. Mesmo que você só tenha baixado pra experimentar por cinco minutos, isso significa muito pra mim. Vamos ver onde isso vai dar.
