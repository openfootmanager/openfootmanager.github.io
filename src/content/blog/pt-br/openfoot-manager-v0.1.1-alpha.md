---
title: "Lançamento do Openfoot Manager v0.1.1-alpha"
description: "Uma nova versão chegou, desta vez com correções de bugs, alguns recursos novos e vários ajustes para polir as arestas."
pubDate: 2026-03-10T16:51:00.000Z
author: "Sturdy Robot"
tags: ["lançamento", "anúncio", "patch", "correções de bugs"]
image: "/images/features/manage_squad.png"
lang: "pt-br"
---

Passou pouco mais de uma semana desde o nosso primeiro lançamento público, e já temos um novo patch! Nada mal, hein?

Desta vez estamos trazendo correções de bugs, algumas mudanças grandes no código e aquele tipo de melhoria de interface que a gente sempre gosta de ver. Vamos começar pelas mudanças mais importantes, pode ser?

E antes de começar: **ciao ragazzi, benvenuti su Openfoot Manager! Speriamo che vi divertiate un sacco**.

## Suporte ao idioma italiano

Esta versão também adiciona suporte ao idioma italiano no jogo.

Se você está jogando em italiano, seja muito bem-vindo. Estamos muito felizes por ter você aqui.

Como sempre, se você perceber alguma frase estranha, texto faltando ou qualquer outra coisa que pareça fora do lugar, avise a gente. Feedback de tradução ajuda muito, especialmente tão cedo no desenvolvimento.

## Reformulação do sistema de save

Nosso sistema inicial de save era ruim: era só um arquivo `saves.db` que continha todos os seus saves, com todos os dados enfiados em uma única coluna no estilo BLOB JSON.

Nós reescrevemos esse sistema completamente. Agora seus arquivos de save são bancos de dados independentes e suportam [migrações de banco de dados](https://en.wikipedia.org/wiki/Schema_migration), o que significa que estamos preparando a base para compatibilidade retroativa com os dados de save.

Seus dados de save atuais não serão perdidos, porém. O jogo vai migrar todos os seus saves para o sistema atual e renomear o seu arquivo antigo `saves.db`. Esse formato antigo de save não será mais suportado daqui para frente.

Mesmo assim, não podemos garantir que todos os seus saves continuarão sendo suportados à medida que adicionarmos novos recursos ao jogo, mesmo com as migrações em vigor. Ainda é uma versão alpha, então não se apegue demais aos seus arquivos de save.

## Mudanças internas no código

Nosso código anterior era bom o suficiente para aquilo para que ele foi feito. Mas era uma bagunça: uma massa enorme de funções e coisas sem teste. Nós até tínhamos alguns testes (mais de 80) cobrindo as partes mais importantes, mas qualquer pessoa que trabalhe com software sabe que isso não é suficiente para um projeto como o nosso.

Nós arregaçamos as mangas para fazer uma grande refatoração, dividimos as coisas em seus próprios módulos e funções e cobrimos tudo com testes. Saímos de uma cobertura tímida de cerca de 10% com 80 testes para impressionantes 84% de cobertura com mais de 700 testes (e contando), tanto no frontend quanto no backend.

Esse é um salto enorme para manter estabilidade e performance.

Agora o código está muito mais organizado, modular e fácil de trabalhar. Ainda há muito espaço para melhorar, mas ele já está bom o bastante para quem quiser começar a contribuir.

## Menu principal e tela de novo jogo

- Foi adicionado um botão de sair no menu principal.
- O nome e o sobrenome agora têm limite de caracteres.
- O seletor de data foi redesenhado. O calendário antigo não funcionava bem em todos os sistemas operacionais.
- O seletor de nacionalidade agora está muito mais completo, com muito mais países para escolher.

## Gerenciamento de jogadores e elenco

- Os jogadores agora têm posições alternativas em que podem atuar. Eles não ficam mais limitados a uma única posição, o que permite decisões mais estratégicas nas partidas. Isso só está disponível se você começar um novo jogo.
- A tabela do elenco e a tabela de listas de jogadores agora suportam ordenação por coluna.
- Essas tabelas agora exibem a bandeira do país do jogador e seu país de origem. Você também pode ver isso na página de perfil do jogador.
- Nós reduzimos a frequência com que os jogadores falam com você. Agora eles devem ser bem mais reservados, em vez de lotarem a sua caixa de entrada.
- A moral foi ajustada, e agora não deve ser tão fácil deixar os jogadores felizes assim (eu espero).

## Sistema de treino

Nós introduzimos grupos de treino, caso você queira focar em áreas específicas com certos jogadores. Esse recurso ainda é bem experimental e precisa de muitas melhorias.

## Sistema de observação

- Os relatórios dos olheiros agora revelam os atributos dos jogadores de forma progressiva.
- Os relatórios dos olheiros agora mostram um card do jogador em vez de texto simples, levando você para a página de perfil do jogador.
- Alguns relatórios de observação não tinham tradução, e agora devem estar totalmente traduzidos.

## Relatórios da comissão técnica

- Nós reduzimos a frequência com que o auxiliar técnico fala sobre o humor geral do elenco. Às vezes você podia receber mais de 3 relatórios por dia dizendo exatamente a mesma coisa. Agora eles só vão informar o humor uma vez por semana, na segunda-feira.
- Estamos redesenhando os relatórios da comissão técnica para que sejam mais úteis no geral.
- Alguns relatórios da comissão não tinham tradução, e agora devem estar totalmente traduzidos.

## Mudanças na interface

- A barra lateral agora tem rolagem, tornando a navegação mais fácil.
- A barra lateral agora pode ser recolhida, facilitando o foco no jogo.
- Removemos a aba "Manager" e tornamos clicável a informação "Your manager", para que você possa acessar o perfil do técnico por ali.
- As abas "News" e "Schedule" agora ficam na primeira seção da barra lateral.
- O botão "Start Match" agora fica centralizado em vez de no canto inferior direito.
- O painel de substituições agora está um pouco maior, o que facilita a visualização.
- Agora você pode selecionar mensagens para apagar da sua caixa de entrada e ordená-las por data.
- As páginas de Tactics e Squad foram completamente redesenhadas:
  - Você só pode ver o seu time inteiro na página de Squad.
  - Na página de Tactics, agora você pode configurar corretamente a formação do seu time com uma tela de arrastar e soltar e comparar jogadores do seu elenco.
  - Todas as mudanças relacionadas à formação e às táticas foram movidas para a página de Tactics.
  - Bolas paradas e funções dos jogadores agora podem ser encontradas na página de Tactics.

## Correções de bugs

- Corrigido o aviso "Invalid Starting XI" no começo do jogo, mesmo quando seu elenco estava totalmente válido.
- Corrigido o problema do menu "Getting Started" não desaparecer depois que você verificava tudo o que havia para verificar.
- Corrigida a ordenação dos jogadores na tabela do elenco e nas tabelas do dia da partida.
- Corrigido o comportamento errático da lista de formação ao tentar fazer substituições durante uma partida.
- Corrigidas as cores de fundo das combo boxes em sistemas Linux.
- Corrigido um erro que impedia o jogo de iniciar em sistemas Linux que usam drivers proprietários da NVIDIA no Wayland.
- Corrigido um erro que não deixava você substituir o goleiro.
- Corrigido um erro que permitia substituir jogadores inválidos (expulsos ou já substituídos).
- Corrigido um erro em que a formação 4-3-2-1 mostrava 2 goleiros na formação dos jogadores.
- Se você tentar sair do jogo com alterações não salvas, agora será pedida uma confirmação.
- Corrigidas traduções em PT-BR que não estavam precisas.

Se você encontrar mais problemas ou regressões, avise a gente na seção de [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Problemas conhecidos

- Se você usa um driver proprietário da NVIDIA no Wayland, o jogo agora vai iniciar, mas a performance pode ser ruim. Esse é um problema conhecido no [WebKitGTK](https://gitlab.gnome.org/GNOME/gnome-build-meta/-/issues/749), que o [Tauri](https://github.com/tauri-apps/tauri/issues/10702) usa para renderizar a tela. Infelizmente, até isso ser corrigido, não há nada que possamos fazer para melhorar.
- A mitigação que aplicamos para fazer o jogo iniciar em GPUs da NVIDIA pode afetar a performance em outros sistemas sem drivers da NVIDIA. Se você notar problemas de performance por causa disso, avise a gente na seção de [Issues](https://github.com/openfootmanager/openfootmanager/issues).

## Considerações finais

Esse é um grande passo rumo a uma versão estável! A gente sabe que ainda tem muito chão pela frente, mas já estamos alcançando um grande marco no ciclo de vida deste projeto!

É incrível finalmente poder compartilhar isso com você e colocar esse jogo no mundo! Se você curtiu o jogo, por favor considere nos apoiar:

- Compartilhe nas redes sociais.
- Conte sobre nós para seus amigos.
- [Dê uma estrela no GitHub](https://github.com/openfootmanager/openfootmanager).
- [Envie contribuições de código ou tradução](https://github.com/openfootmanager/openfootmanager/blob/develop/CONTRIBUTING.md).
- Publique um vídeo no YouTube.

Tudo isso ajuda demais!

## Baixe o jogo

Vá até a [página de download](/pt-br/download) para baixar o jogo para Windows, macOS ou Linux.

Nas próximas versões, assim que alcançarmos um loop de gameplay estável, vamos adicionar novos recursos como novas ligas, novos torneios, mais times, uma janela de transferências, mais interação com jogadores e qualquer outra coisa que vocês acharem que esse jogo merece!

Muito obrigado pelo seu apoio!

Até a próxima!
