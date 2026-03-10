---
title: "Lançamento do Openfoot Manager v0.1.1-alpha"
description: "Chegou uma nova versão, desta vez com correções de bugs, algumas funcionalidades novas e vários retoques para polir as arestas."
pubDate: 2026-03-10T16:51:00.000Z
author: "Sturdy Robot"
tags: ["lançamento", "anúncio", "patch", "correções de bugs"]
image: "/images/features/manage_squad.png"
lang: "pt-pt"
---

Passou pouco mais de uma semana desde o nosso primeiro lançamento público, e já temos um novo patch! Nada mau, hein?

Desta vez trazemos correções de bugs, algumas alterações importantes no código e aquele tipo de melhorias de interface de que gostamos sempre. Vamos começar pelas mudanças maiores, pode ser?

E antes de avançarmos: **ciao ragazzi, benvenuti su Openfoot Manager! Speriamo che vi divertiate un sacco**.

## Suporte ao idioma italiano

Esta versão também adiciona suporte ao idioma italiano no jogo.

Se estás a jogar em italiano, bem-vindo a bordo. Estamos mesmo muito felizes por te ter aqui.

Como sempre, se encontrares formulações estranhas, textos em falta ou qualquer outra coisa que pareça fora do sítio, diz-nos. O feedback sobre traduções ajuda imenso, especialmente tão cedo no desenvolvimento.

## Reformulação do sistema de saves

O nosso sistema inicial de saves era mau: era apenas um ficheiro `saves.db` que continha todos os teus saves, com todos os dados enfiados numa única coluna em estilo BLOB JSON.

Reescrevemos este sistema por completo. Os teus ficheiros de save são agora bases de dados independentes, e suportam [migrações de base de dados](https://en.wikipedia.org/wiki/Schema_migration), o que significa que estamos a preparar o terreno para compatibilidade retroativa com os dados de save.

Os teus dados de save atuais não se perdem, no entanto. O jogo vai migrar todos os teus saves para o sistema atual e renomear o teu antigo ficheiro `saves.db`. Este formato antigo de save deixará de ser suportado daqui para a frente.

Mesmo assim, não podemos garantir que todos os teus saves continuem a ser suportados à medida que adicionamos novas funcionalidades ao jogo, mesmo com as migrações em vigor. Continua a ser uma versão alpha, por isso não te apegues demasiado aos teus ficheiros de save.

## Alterações internas no código

O nosso código anterior era suficientemente bom para aquilo para que foi construído. Mas era uma confusão: uma massa enorme de funções e coisas sem testes. Até tínhamos alguns testes (mais de 80) a cobrir as partes mais importantes, mas qualquer pessoa que trabalhe com software sabe que isso não chega para um projeto como o nosso.

Metemo-nos a fundo numa grande refatoração, dividimos as coisas nos seus próprios módulos e funções, e cobrimos tudo com testes. Passámos de uns míseros ~10% de cobertura com 80 testes para uns impressionantes 84% de cobertura com mais de 700 testes (e a contar), tanto no frontend como no backend.

É um salto enorme para manter a estabilidade e a performance.

O código está agora muito mais organizado, modular e fácil de trabalhar. Ainda há bastante margem para melhorar, mas já está suficientemente bom para quem quiser começar a contribuir.

## Menu principal e ecrã de novo jogo

- Foi adicionado um botão de sair ao menu principal.
- O nome e o apelido têm agora limite de caracteres.
- O seletor de data foi redesenhado. O antigo calendário não funcionava bem em todos os sistemas operativos.
- O seletor de nacionalidade está agora muito mais completo, com muitos mais países à escolha.

## Gestão de jogadores e plantel

- Os jogadores têm agora posições alternativas em que podem jogar. Já não ficam limitados a uma única posição, o que te permite tomar decisões mais estratégicas nos jogos. Isto só está disponível se começares um novo jogo.
- A tabela do plantel e a tabela de listas de jogadores agora suportam ordenação por coluna.
- Estas tabelas mostram agora a bandeira do país do jogador e o seu país de origem. Também podes ver isso na página de perfil do jogador.
- Reduzimos a frequência com que os jogadores te falam. Agora devem ser bem mais reservados em vez de encherem a tua caixa de entrada.
- O moral foi ajustado, e já não deverá ser assim tão fácil deixar os jogadores felizes (espero eu).

## Sistema de treino

Introduzimos grupos de treino, caso queiras focar-te em áreas específicas com determinados jogadores. Esta funcionalidade ainda é muito experimental e precisa de muitas melhorias.

## Sistema de observação

- Os relatórios dos olheiros agora revelam progressivamente os atributos dos jogadores.
- Os relatórios dos olheiros agora mostram um cartão do jogador em vez de texto simples, levando-te para a página de perfil do jogador.
- Alguns relatórios de observação não tinham tradução, e agora devem estar totalmente traduzidos.

## Relatórios do staff

- Reduzimos a frequência com que o treinador-adjunto te fala sobre o humor geral do plantel. Às vezes podias receber mais de 3 relatórios por dia a dizer exatamente a mesma coisa. Agora só te falam do humor uma vez por semana, à segunda-feira.
- Estamos a redesenhar os relatórios do staff para serem mais úteis no geral.
- Alguns relatórios do staff não tinham tradução, e agora devem estar totalmente traduzidos.

## Alterações na interface

- A barra lateral agora tem rolagem, tornando a navegação mais fácil.
- A barra lateral agora pode ser recolhida, tornando mais fácil concentrares-te no jogo.
- Removemos o separador "Manager" e tornámos clicável a informação "Your manager", para que possas aceder ao perfil do treinador a partir daí.
- Os separadores "News" e "Schedule" agora estão na primeira secção da barra lateral.
- O botão "Start Match" agora está centrado em vez de ficar no canto inferior direito.
- O painel de substituições está agora um pouco maior, tornando-o mais fácil de ver.
- Agora podes selecionar mensagens para apagar da tua caixa de entrada e ordená-las por data.
- As páginas Tactics e Squad foram completamente redesenhadas:
  - Só podes ver a tua equipa completa na página Squad.
  - Na página Tactics, agora podes configurar corretamente a formação da tua equipa com um ecrã de arrastar e largar e comparar jogadores do teu plantel.
  - Todas as alterações relacionadas com a formação e as táticas foram movidas para a página Tactics.
  - As bolas paradas e os papéis dos jogadores agora podem ser encontrados na página Tactics.

## Correções de bugs

- Foi corrigido o aviso "Invalid Starting XI" no início do jogo, mesmo quando o teu plantel era totalmente válido.
- Foi corrigido o problema de o menu "Getting Started" não desaparecer depois de verificares tudo o que havia para verificar.
- Foi corrigida a ordenação dos jogadores na tabela do plantel e nas tabelas do dia de jogo.
- Foi corrigido o comportamento errático da lista de formação ao tentar fazer substituições durante um jogo.
- Foram corrigidas as cores de fundo das combo boxes em sistemas Linux.
- Foi corrigido um erro que impedia o jogo de arrancar em sistemas Linux que usam drivers proprietários da NVIDIA no Wayland.
- Foi corrigido um erro que não te deixava substituir o guarda-redes.
- Foi corrigido um erro que permitia substituir jogadores inválidos (expulsos ou já substituídos).
- Foi corrigido um erro em que a formação 4-3-2-1 mostrava 2 guarda-redes na formação dos jogadores.
- Se tentares sair do jogo com alterações não guardadas, agora será pedida confirmação.
- Foram corrigidas traduções PT-BR que não estavam precisas.

Se encontrares mais problemas ou regressões, avisa-nos na secção de [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Problemas conhecidos

- Se usas um driver proprietário da NVIDIA no Wayland, o jogo agora vai arrancar, mas a performance pode ser fraca. Este é um problema conhecido no [WebKitGTK](https://gitlab.gnome.org/GNOME/gnome-build-meta/-/issues/749), que o [Tauri](https://github.com/tauri-apps/tauri/issues/10702) usa para renderizar o ecrã. Infelizmente, até isto ser corrigido, não há nada que possamos fazer para melhorar.
- A mitigação que aplicámos para fazer o jogo arrancar em GPUs NVIDIA pode afetar a performance noutros sistemas sem drivers NVIDIA. Se encontrares problemas de performance por causa disso, avisa-nos na secção de [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Notas finais

Este é um grande passo rumo a uma release estável! Sabemos que ainda há muito caminho a percorrer, mas já estamos a atingir um grande marco no ciclo de vida deste projeto!

É incrível poder finalmente partilhar isto contigo e colocar este jogo no mundo! Se gostaste do jogo, por favor considera apoiar-nos:

- Partilha-o nas redes sociais.
- Fala de nós aos teus amigos.
- [Dá-nos uma estrela no GitHub](https://github.com/openfootmanager/openfootmanager).
- [Envia as tuas contribuições de código ou tradução](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).
- Publica um vídeo no YouTube.

Tudo isto ajuda imenso!

## Transfere o jogo

Vai à [página de transferências](/pt-pt/download) para obter o jogo para Windows, macOS ou Linux.

Nas próximas releases, assim que alcançarmos um loop de gameplay estável, vamos adicionar novas funcionalidades, como novas ligas, novos torneios, mais equipas, uma janela de transferências, mais interação com jogadores e tudo o resto que vocês acharem que este jogo merece!

Muito obrigado pelo teu apoio!

Até à próxima!
