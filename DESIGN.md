# Design

## System

Direcao escolhida: **Transmissao Real**. O produto deve parecer um app esportivo moderno com cara de placar ao vivo, campo vertical e cards compactos de jogadores.

## Color

Usar OKLCH em CSS.

- Background: preto/azul quase neutro para dar clima de transmissao noturna.
- Surface: paineis azul-marinho escuros.
- Primary: verde de campo/acao para botoes principais.
- Accent: ciano/azul de placar para status e progresso.
- Warning/energy: amarelo ou vermelho apenas para eventos de jogo.

## Typography

Usar uma fonte de sistema para UI e uma fonte display condensada para marca, placares e numeros grandes. Evitar texto pequeno demais dentro de bolinhas no campo.

## Components

- Topo fixo com marca, progresso e overall.
- Card de sorteio com selecao, ano, fichas de troca e acoes de troca.
- Lista de jogadores com numero, nome, posicao, tag e nota.
- Campo vertical com bolinhas grandes e nomes abreviados.
- Barra de acao fixa no fim da tela.
- Tela de simulacao com placar, pressao, linha do tempo e botoes de avancar/auto.
- Card final compartilhavel.

## Mobile Layout

Alvo principal: 390 x 844. O conteudo deve usar largura maxima de 430px e funcionar bem como PWA. Nao depender de hover. Evitar overflow horizontal.

## Motion

Motion curto e funcional: feedback ao rolar, escolher jogador, preencher posicao, marcar gol e encerrar partida. Respeitar `prefers-reduced-motion`.
