# Rei da Copa - Handoff para Claude Code

Ultima atualizacao: 2026-07-05. NO AR em https://pedrofsleone.github.io/rei-da-copa/ (deploy automatico via git push; ver secao DEPLOY). Ja entregue e deployado antes deste ajuste: Home (Contra CPU / Multiplayer), lobby de torneio configuravel, DRAFT POR TURNOS ao vivo com cartas Bloqueio/Troca e layout de ABAS estilo 7a0 (item 3j), e FASE D.1 = transmissao progressiva sincronizada do torneio (host controla, sem spoiler, campeao so no fim; item 4b). Ajuste local mais recente: pagina inicial voltou a ser apenas uma tela, com poster mobile estilo arte/grafite enviado pelo Pedro, usando `assets/home-poster.jpg` recortado sem a barra preta superior de status do celular, e botoes invisiveis por cima das caixas SOLO/MULTIPLAYER (ver Fase A). Base: 16 selecoes com regua propria (RATING_GUIDE.md), 8 formacoes iguais as do 7a0, penaltis na hora. FALTA validar com 2 humanos reais (2 celulares) o draft+transmissao ao vivo; depois: modo Interativo, regras definitivas do Firebase (~2026-08-02), expandir base (COVERAGE_TARGETS.md). Detalhes: roadmap no fim do arquivo (itens numerados ate 3j/4b).

Este arquivo existe para outro agente continuar o projeto sem perder contexto. Manter atualizado a cada decisao, teste visual, implementacao ou mudanca de rumo.

## Resumo curto

Estamos criando um jogo mobile-first chamado **Rei da Copa**, inspirado no loop de draft/simulacao do 7a0, mas com identidade propria, experiencia otimizada para telefone e simulacao mais visual/interativa.

O usuario quer:
- Site e app para telefone, com foco inicial em web mobile/PWA.
- Jogo otimizado primeiro para celular, depois adaptado para desktop.
- Tudo documentado em Markdown para continuidade.
- Exemplos visuais antes de fechar a direcao estetica.

## Decisoes confirmadas

- Nome do jogo: **Rei da Copa**.
- Plataforma inicial: **site mobile-first**.
- Evolucao desejada: transformar em **PWA instalavel** e, depois, app nas lojas se fizer sentido.
- Prioridade de tela: telefone comum, alvo mental em torno de **390 x 844**.
- O jogo deve abrir direto na experiencia jogavel, sem uma landing page grande no MVP.
- O desktop sera adaptacao posterior, nao a fonte do layout.
- O diferencial desejado e deixar a competicao/simulacao mais visual e interativa do que uma lista de resultados.
- **Multiplayer ONLINE entre celulares** (nao so local), igual ao 7a0. Comecando pelo **Final 1x1 por codigo de sala**. Stack: **Firebase Realtime Database** + **GitHub Pages**. Ver secao "Multijogador online" e o roadmap no fim do arquivo.

## Analise do 7a0 feita ate agora

Site analisado: https://7a0.com.br/

Fluxo observado:
1. Home explica: rolar dado, montar selecao dos sonhos, simular.
2. Tela de jogo tem configuracao, campo e box score.
3. Usuario escolhe formacao, estilo e modo.
4. Botao "Rolar" sorteia selecao + Copa.
5. Aparecem botoes "Outra selecao" e "Outra Copa".
6. Texto observado: "Nao curtiu? Re-sorteie · 3 restantes".
7. Jogador escolhe atleta de uma lista com numero, nome, posicao e nota.
8. Depois escolhe vaga compativel no campo.
9. Goleiros/posicoes ja preenchidas ficam desabilitados.
10. Ao completar 11/11, aparece "Simular a Copa".
11. Simulacao mostra campanha jogo a jogo, com modo manual/automatico e velocidade.
12. Resultado final mostra campanha, gols, sofridos, vitorias e card compartilhavel.
13. Existe Desafio do Dia com seed unica, contador e leaderboard.
14. Existe multiplayer com local, final direta, mata-mata e salas.
15. Perfil funciona como "carteirinha", com apelido/e-mail e historico.
16. Ajustes incluem tema claro/escuro, idioma e modo streamer.

Mecanica importante:
- A troca de time/ano parece usar um limite compartilhado de 3 re-sorteios por rodada. Isso foi observado visualmente, mas nao foi testado ate zerar.

## MVP proposto

Versao 1 deve ter:
- Abrir direto no jogo.
- Botao "Rolar".
- Sorteio de time + ano.
- 3 fichas de troca por rodada.
- Lista de jogadores.
- Campo interativo vertical.
- Completar 11 jogadores.
- Simular competicao.
- Resultado/campanha.
- Card final compartilhavel.

Nao incluir no MVP inicial:
- Login.
- Ranking real.
- Multiplayer real.
- App Store/Play Store.
- Base completa de todos os jogadores.

## UX mobile-first proposta

Principio: um gesto por vez.

Tela de draft:
- Topo fixo pequeno com nome, progresso 3/11, overall.
- Card do sorteio com pais/time, ano e fichas de troca.
- Lista de jogadores em cards tocaveis.
- Ao tocar em jogador, campo sobe/abre com posicoes compativeis brilhando.
- Toque na posicao confirma.
- Botao principal sempre no alcance do polegar.

Campo:
- Vertical, ocupando quase a tela toda.
- Bolinhas grandes.
- Nome curto do jogador.
- Posicoes vazias bem legiveis.
- Jogador tocavel para mover/trocar.

Simulacao:
- Nao deve ser apenas tabela.
- Usar "Central da Partida":
  - Placar grande.
  - Mini campo/pressao.
  - Barra de momento.
  - Linha do tempo de lances.
  - Botao "Avancar lance".
  - Modo automatico.
  - Decisao rapida no intervalo: atacar, equilibrar, segurar.

## Ideias de mecanica

Draft:
- Fichas de troca visuais: tres pontos ou moedas.
- Trocar time e trocar ano gastam a mesma reserva.
- Possivel melhoria: travar time ou travar ano.
- Modo dificil: esconder nota.
- Quimica por pais, decada, continente, clube ou estilo.
- Tags especiais: Craque, Capitao, Muralha, Artilheiro, Lenda.

Competicao:
- Antes do jogo: comparar ataque/defesa/estrela do adversario.
- Durante o jogo: lances, gols, defesas, cartoes, penaltis.
- Intervalo: pequena escolha tatica.
- Pos-jogo: homem do jogo, momento decisivo, estatisticas simples.
- Mata-mata em chave/bracket visual.

Card final:
- Resultado da campanha.
- Escudo/nome do time criado.
- Melhor jogador.
- Artilheiro.
- Jogo mais dificil.
- Momento da campanha.
- Frase gerada: "Caiu nas quartas, mas botou medo."

## Temas discutidos

Opcoes apresentadas ao usuario:
1. Selecoes da Copa.
2. Clubes historicos.
3. Futebol brasileiro.
4. Champions League.
5. Copa + clubes.
6. Brasil x Mundo.
7. Futebol de rua / pelada suprema.
8. Cartinhas de lendas.
9. Copa alternativa com times inventados.
10. Reis do Mundo com adversarios "chefes".

Recomendacao inicial do assistente:
- Selecoes da Copa + visual de transmissao esportiva moderna com cartas de jogador.

O usuario pediu exemplos visuais antes de escolher.

## Arquivos criados

- `CLAUDE_HANDOFF.md`: este arquivo.
- `visual-examples.html`: painel visual com quatro mockups mobile de direcoes esteticas.
- `PRODUCT.md`: contexto estrategico do produto.
- `DESIGN.md`: direcao visual e componentes base.
- `index.html`: primeiro prototipo jogavel mobile-first.

Local dos arquivos no Windows:
- `C:\Users\pedro\Desktop\Rei-da-Copa\CLAUDE_HANDOFF.md`
- `C:\Users\pedro\Desktop\Rei-da-Copa\visual-examples.html`
- `C:\Users\pedro\Desktop\Rei-da-Copa\PRODUCT.md`
- `C:\Users\pedro\Desktop\Rei-da-Copa\DESIGN.md`
- `C:\Users\pedro\Desktop\Rei-da-Copa\index.html`

URL local usada na validacao:
- `http://127.0.0.1:8622/visual-examples.html`
- `http://127.0.0.1:8622/index.html`

Observacao: a pagina tambem pode ser aberta diretamente pelo arquivo HTML no navegador do usuario. O servidor local foi usado apenas para a validacao dentro do Codex.

## Multijogador online (EM ANDAMENTO)

O usuario quer multijogador online entre celulares, igual ao 7a0. Plano aprovado e salvo em `C:\Users\pedro\.claude\plans\serene-frolicking-sphinx.md`.

Analise do 7a0 (/multi): 3 modos — LOCAL (2 no mesmo aparelho), FINAL DE COPA (1x1, cada um monta e joga so a Final), MATA-MATA DE COPA (bracket 4/8/16, humanos + CPU; numero de times = "Tamanho da chave"). Draft no multi tem MODO DO DRAFT (Por turnos / Todos juntos) + Tempo por jogada (20/30/45s) + Revelacao (juntos / cada um no seu ritmo). Vagas da sala = lugares pra humanos; resto vira CPU.

Arquitetura decidida: online precisa de backend + hospedagem publica. Stack: **Firebase Realtime Database** (SDK via CDN, sem servidor) + **GitHub Pages** (tambem resolve o "nao abre no telefone", pois vira URL publica). Comeca pelo laco minimo: **Final 1x1 online por codigo de sala**. Determinismo: host simula com seed e grava; convidado so reproduz.

Fases: 0-Setup Firebase+Pages (tarefa manual do Pedro, guiada) | 1-Lobby online (dois entram na mesma sala por codigo e se veem) | 2-Draft 1x1 | 3-Final 1x1 | 4-(futuro) Mata-mata com CPU.

Firebase (Fase 0 CONCLUIDA): projeto `rei-da-copa-78002`, Realtime Database em `https://rei-da-copa-78002-default-rtdb.firebaseio.com` (us-central1, modo de teste, expira ~2026-08-02 — trocar por regras definitivas antes disso). App web `rei-da-copa-web`. A `firebaseConfig` esta embutida no `<script type="module">` no fim do index.html.

Estado atual do codigo (index.html):
- FASE 1 (LOBBY ONLINE) FEITA E VALIDADA. Rede via **Firebase Realtime Database**, SDK modular v10.12.2 importado num `<script type="module">` separado no fim do arquivo, que expoe `window.RC_NET` (createRoom, joinRoom, subscribe, unsubscribe, setReady, setStatus, leave). O jogo (script classico) fala com a rede so por `window.RC_NET`; a rede avisa mudancas chamando `window.onRoomUpdate(room)`.
- Telas: botao `Jogar com amigos` (`#openMultiBtn`) no topo do draft; `multiHomeView` (screen `multiHome`) com apelido + Criar sala + Entrar com codigo; `multiLobbyView` (screen `multiLobby`) com codigo grande, lista de jogadores (presenca + pronto), botao Pronto, botao Comecar (so host, habilita com os 2 prontos) e Sair. `state.net = { code, role, room }`. `clientId` persistido em `localStorage` (`rc_client_id`); apelido em `rc_nickname`.
- Modelo no RTDB: `/rooms/{CODIGO}` = { status, mode:"final1x1", host, createdAt, players/{clientId}:{apelido,ready,connected} }. Codigo de 4 letras (sem I/O/0/1). Presenca via `onDisconnect(connected=false)`. Ao sair (`leave`): CANCELA o onDisconnect (senao ressuscita a sala), remove o player e apaga a sala inteira se ficar vazia.
- Validado no preview contra o banco real: Firebase conecta (`RC_NET.ready=true`), criar sala, 2o jogador entra e aparece em tempo real no lobby do 1o, prontos sincronizam, Comecar habilita com os 2 prontos, sair apaga a sala sem ressuscitar. Solo intacto. Sem erro de console.
- CUIDADO ao testar 2 abas no MESMO navegador: compartilham `localStorage` => mesmo `clientId` => contam como 1 jogador so. Testar com 1 aba normal + 1 anonima (ou 2 dispositivos).

FALTA / OBS desta secao historica:
- Esta parte nasceu no plano 1x1 inicial. O estado mais atual do produto esta no roadmap "Estado atual e proximos passos" no fim do arquivo.
- GitHub Pages ja foi publicado, lobby de torneio ja existe, draft por turnos ja existe e a base da Fase D/Assistir ja foi implementada localmente.
- Ainda falta validar a Fase D em 2 celulares reais pelo GitHub Pages, fazer deploy do patch atual, criar playback cosmetico lance-a-lance dos jogos do jogador e depois partir para modo Interativo/regras definitivas do Firebase.

## Estado atual do prototipo jogavel

Arquivo principal: `index.html`.

Atualizacao em andamento pedida pelo usuario:
- Nome do time editavel.
- Escolha de formacao.
- 2 reservas no elenco.
- Substituicao 1x por jogo em paradas: hidratacao, intervalo, fim dos 90, intervalo/fim da prorrogacao.
- Escolha de batedores de penaltis (APENAS na hora da disputa, depois da prorrogacao; nao mais na montagem).
- Sincronia: mesmo pais/selecao no XI da bonus +3; mesmo ano da bonus +2.
- Capitao escolhido ganha +5.

Estado tecnico dessa atualizacao:
- `index.html` ja recebeu painel `Meu time` com input de nome e botoes de formacao.
- Foram criadas 8 formacoes em JS, as mesmas do 7a0 e na mesma ordem: `4-3-3`, `4-4-2`, `4-2-3-1`, `4-2-4`, `3-5-2`, `5-3-2`, `4-5-1`, `3-4-3`. Regra fixa: toda formacao tem sempre exatamente 1 LE e 1 LD (alem de 1 GOL e 11 slots). Formacoes com 3 zagueiros (3-5-2, 3-4-3) colocam LE/LD como alas na linha do meio; as demais mantem LE/LD na linha de defesa. O painel de formacao usa grid de 3 colunas (`.segmented`), entao os 8 botoes quebram em 3 linhas. O `renderField` agora deriva as faixas dinamicamente (`[...new Set(slots.map(s=>s.row))]`) e ajusta `grid-template-rows` inline, suportando ate 5 faixas (ex: 4-2-3-1). Validado no preview mobile: todas as 8 renderizam 11 slots com 1 LE + 1 LD, draft completa 11+2/13 sem travar e sem overflow, sem erros de console.
- O draft agora trabalha com `11 titulares + 2 reservas`, mostrando progresso `titulares+reservas/13`.
- Reservas ficam no painel `Banco e lideranca`.
- O capitao fica no painel `Banco e lideranca`, com botoes compactos por jogador.
- Calculo de overall/linhas usa `effectiveRating(player)`, somando sincronia e bonus de capitao.
- Eventos de parada foram adicionados na simulacao.
- Quando a partida para, o painel `coachPanel` mostra trocas compativeis e opcao `Manter time`.
- PENALTIS AGORA SAO ESCOLHIDOS NA HORA (pedido do usuario): removida a secao "Penaltis" da tela de montagem (nao ha mais escolha "agora"). A disputa e decidida AO VIVO. Fluxo: no mata-mata, empate no tempo normal vira `shootout` (marcado em `generateCampaign`, sem decidir resultado). A campanha nao e mais truncada na geracao (gera sempre os 7 jogos); a eliminacao passou a ser AO VIVO (`advanceMatchStep` para em jogo de mata-mata perdido: `match.knockout && match.lost`). Ao chegar na parada `extra-end` ("Fim da prorrogacao. Escolha os batedores."), o `coachPanel` mostra o SELETOR DE BATEDORES (`renderPenaltyPanel`): pilulas dos 11 em campo + 5 posicoes de ordem + botao "Bater penaltis". `resolveShootout(match)` calcula o resultado com os batedores escolhidos (completa com os mais fortes se faltar), grava `penalties/won/lost/resolved` e injeta o lance da serie. `currentBreakEvent` foi ajustado para a parada de penaltis aparecer sempre (mesmo se a troca ja foi usada) ate resolver. `Pular` auto-resolve com os mais fortes; `Auto` para na parada e nao pula. Botao principal vira "Bater penaltis" na parada; dica do topo "Escolha os batedores". `calculateFinal` conta so os jogos disputados (`campaign.slice(0, matchIndex+1)`). Validado no preview: seletor aparece pos-prorrogacao, vitoria na disputa avanca (ate Campeao), derrota elimina na fase certa, 6 campanhas completas sem erro de console.

Pendencias desta atualizacao:
- [OK] Validar visualmente no navegador mobile depois do patch completo. Validado em 375x812 (preview mobile), sem overflow horizontal (scrollWidth 375 = innerWidth 375), sem erros de console em toda a sessao.
- [OK] Testar fluxo real ate 13/13. Fluxo completo passou: Rolar -> escolher 1 jogador por sorteio -> encaixar -> re-rolar, ate 11+2/13, OVR 94. Card final gerado (CAMPEAO 7-0, 31 gols pro, 18 sofridos, craque, escalacao completa). Compartilhar e Jogar de novo (reset volta a 0+0/13 OVR --) funcionam.
- [OK] Testar se trocar formacao antes do draft funciona e se trava depois do primeiro jogador. Confirmado: troca livre antes do 1o jogador; apos encaixar 1, os outros botoes de formacao ficam `disabled` e nao trocam mais.
- [OK] Testar parada/substituicao em partida. Confirmado: aos 30' surge "Parada para hidratacao - 1 troca disponivel" com opcoes compativeis (ex: "MUL entra em CA por KLO") e botao "Manter time". A substituicao persiste ate o card final (CA apareceu como Muller apos trocar KLO).
- [OK] A formacao `3-5-2` foi corrigida. Regra do usuario: TODA formacao tem sempre 1 LE e 1 LD. Novos slots do 3-5-2: CA,CA (row 0) / LE,MC,VOL,MC,LD (row 1, alas abertas nas pontas) / ZAG,ZAG,ZAG (row 2) / GOL (row 3) = 2-5-3. Validado no preview: campo renderiza o formato certo, draft completa 11+2/13 sem travar nem rerolls, sem overflow horizontal. (4-3-3 e 4-4-2 ja tinham LE e LD.)

Esclarecimento importante de design (nao era bug):
- Ao encaixar um jogador, `placePlayer` zera `state.draw` e reseta `state.rerolls = 3` (index.html ~1549). Isso e intencional: a mecanica e rolar uma selecao, pegar SO 1 jogador dela, encaixar, e rolar de novo para o proximo. O usuario monta um XI all-star de eras/paises misturados, dai o bonus de sincronia. A lista voltar para "A lista aparece depois do sorteio" apos cada encaixe e comportamento esperado, nao bug.

Observacao de teste (ferramenta, nao jogo):
- No preview, `preview_click` em `#primaryAction` nao disparou o handler de forma confiavel numa das tentativas; `element.click()` via eval funcionou. Toques reais no navegador funcionam normalmente. Nao e bug do jogo.

O que ja funciona:
- Abre direto na tela de draft, sem landing page.
- Layout mobile-first com largura alvo 390 x 844.
- Topo fixo com marca, progresso `0/11` e overall.
- Botao `Rolar`.
- Sorteio de selecao + ano.
- 3 fichas de troca por rodada.
- Botao para trocar selecao.
- Botao para trocar ano.
- Lista de jogadores com numero, nome, posicoes, tag e nota.
- Jogador escolhido destaca posicoes compativeis.
- Campo vertical com bolinhas grandes.
- Bolinhas preenchidas mostram nomes abreviados dos jogadores.
- Progresso ate `11/11`.
- Overall, ataque e defesa calculados.
- Botao `Simular Copa`.
- Tela de simulacao com placar, rival, fase, pressao e lances.
- Botao `Lance`: avanca manualmente um lance por toque.
- Botao `Auto`: passa lance a lance em intervalo curto e muda para `Pausar` enquanto roda.
- Botao `Pular`: revela direto o resultado da partida atual; se a partida ja terminou, avanca para a proxima etapa.
- Card final com campanha, gols, sofridos, overall, craque e escalacao.
- Botao `Compartilhar` com Web Share API ou clipboard.
- Botao `Jogar de novo`.

Dados:
- Base provisoria embutida no HTML, hoje com 16 elencos de Copa.
- Selecoes/anos de exemplo: Brasil 2002, Brasil 1970, Franca 1998, Franca 2018, Argentina 1986, Argentina 2022, Alemanha 2014, Espanha 2010, Alemanha 2002, Italia 1970, Brasil 1998, Croacia 2018, Inglaterra 1986, Franca 2022, Argentina 2014 e Holanda 2010.
- Alvo de cobertura inspirado no arquivo publico do 7a0 documentado em `COVERAGE_TARGETS.md`: 20 Copas (1950-2026), 263 elencos e 52 paises. Este arquivo e checklist de ano+selecao; nao inclui jogadores nem ratings copiados.
- Regua de overall propria do Rei da Copa documentada em `RATING_GUIDE.md`: nota mede o nivel naquela Copa especifica, nao carreira inteira; 99 = pico historico absoluto; 95-98 = lenda de Copa; 90-94 = elite; 85-89 = peca-chave; 80-84 = bom titular; 75-79 = util; 68-74 = reserva/fraco. Os dados atuais foram recalibrados por essa regua.
- Os dados sao para prototipo de jogabilidade e expansao curada, nao copia de base/overall de outro produto.

Validacao feita:
- Carregamento inicial em viewport 390 x 844.
- Sem overflow horizontal.
- Fluxo testado: rolar -> escolher jogador -> encaixar no campo.
- Fluxo testado ate completar 11/11.
- Simulacao testada com lances.
- Campanha avancada ate o card final.
- Sem erros de console detectados no teste final.
- Atualizacao dos controles da partida testada em 390 x 844:
  - Rodape com 3 botoes visiveis: `Auto`, `Pular`, `Lance`.
  - `Auto` nao despeja tudo de uma vez: apos ativar, manteve 0 eventos imediatamente e revelou 1 lance depois do intervalo.
  - `Pausar` interrompeu o modo automatico e voltou o texto para `Auto`.
  - `Pular` levou a partida de 3 lances visiveis para 6 lances e marcou a partida como encerrada.
  - Sem overflow horizontal e sem erros de console.

## Direcoes visuais no arquivo HTML

O arquivo `visual-examples.html` contem quatro exemplos:

1. **Transmissao Real**
   - Foco: jogo com cara de app esportivo moderno.
   - Melhor para: selecoes da Copa.
   - Sensacao: placa de TV, placar ao vivo, cards compactos.
   - Decisao do usuario: esta e a direcao visual preferida para seguir.
   - Ajuste pedido: no campo, as bolinhas devem mostrar nomes abreviados dos jogadores, nao apenas posicoes ou notas.

2. **Cartas de Campeao**
   - Foco: jogadores como cartas premium.
   - Melhor para: colecionavel/videogame.
   - Sensacao: ouro, raridade, impacto visual.

3. **Brasil contra o Mundo**
   - Foco: campanha com energia de torcida brasileira.
   - Melhor para: narrativa Brasil x adversarios internacionais.
   - Sensacao: verde/amarelo/azul sem virar fantasia infantil.

4. **Noite de Mata-Mata**
   - Foco: tensao de Libertadores/Champions.
   - Melhor para: clubes historicos, fases eliminatorias.
   - Sensacao: escuro, placar forte, clima de decisao.

## Validacao visual feita

Arquivo verificado no navegador em:
- Desktop: 1280 x 720 aproximado.
- Mobile: 390 x 844.

Resultado:
- 4 mockups renderizados.
- Sem overflow horizontal no desktop.
- Sem overflow horizontal no mobile.
- O detector do Impeccable apontou inicialmente uso de fonte unica.
- Ajuste feito: adicionada fonte de display separada para titulos, marca, numeros e placares, mantendo fonte de sistema para corpo/legendas.
- Apos ajuste, o detector nao encontrou problemas deterministicos.

## Regras de design acordadas/assumidas

- Mobile-first.
- Botoes grandes, acionaveis com o polegar.
- Sem interface lotada.
- Evitar copiar visual, marca, textos ou layout exato do 7a0.
- Usar logica inspirada, mas identidade propria.
- Simulacao deve ser mais viva e visual que no 7a0.
- Para app UI, consistencia e clareza vencem decoracao.

## Estado atual e proximos passos (ATUALIZADO nesta sessao)

O prototipo single-player ja esta completo e validado (draft -> simulacao "Central da Partida" -> card final). O foco agora e um **multiplayer de TORNEIO com varias pessoas + CPU** (o escopo cresceu do 1x1 pra torneios). Plano completo e atual em `C:\Users\pedro\.claude\plans\serene-frolicking-sphinx.md` (titulo "Multijogador com torneios").

Requisitos do torneio (definidos pelo Pedro): Home com **Contra CPU** e **Multiplayer**; no multiplayer o criador da sala escolhe formato (**Mata-mata** / **Fase de grupos** grupos de 4 com 2 passando / **Personalizado**), tamanho (**8/16/32** times), preenchimento (**CPU** ou **so humanos**), e experiencia (**Assistir** ou **Interativo** — os dois modos). Decisao tecnica: **host autoritativo nos placares/classificacao**; lances sao encenacao cosmetica gerada do placar.

Feito nesta sessao:
- Validacao mobile do patch de time/formacao/reservas/substituicao/capitao.
- **8 formacoes** iguais as do 7a0, toda formacao com 1 LE + 1 LD.
- **Penaltis escolhidos na hora** da disputa.
- Multiplayer **Fase 0** (Firebase) e **Fase 1** (lobby online por codigo, hoje 1x1) feitas e validadas.
- **Fase A (Home)** feita e validada originalmente: tela inicial `homeView` (screen `home`, agora e a tela de abertura) com opcoes **Contra CPU** (-> draft solo) e **Multiplayer** (-> multiHome). Botao `← Inicio` no draft; back do multiHome volta pra home. Barra de acao e pills escondidas fora de draft/match (via regra CSS `[hidden]{display:none!important}` pra o atributo hidden funcionar em flex/grid). Navegacao, solo e multiplayer intactos, sem erro de console.
- **Ajuste Fase A - Home poster mobile (2026-07-05)**: Pedro pediu para retornar e deixar apenas a tela inicial. Estado atual: uma unica tela `homeView` com o poster branco/grunge/grafite, titulo "REI DA COPA", "TEMPORADA 2026", botao verde **SOLO CPU/Offline** e botao amarelo **MULTIPLAYER Jogue com os amigos**. Implementacao local em `index.html`: `body.is-home-screen` esconde a topbar apenas na home; `homeView` contem uma unica `.home-poster.is-home`; os botoes SOLO/MULTIPLAYER mantem IDs originais `homeCpuBtn` e `openMultiBtn` como hotspots transparentes. Asset local usado: `assets/home-poster.jpg`, recortado em 2026-07-05 para remover a barra preta superior da imagem (sinal/hora/bateria); hotspots reajustados para a nova altura da arte. A galeria vertical com posters de draft/tutorial foi revertida; `assets/draft-poster.jpg` e `assets/tutorial-poster.jpg` foram removidos.

DEPLOY (Fase H CONCLUIDA): repo GitHub **https://github.com/pedrofsleone/rei-da-copa** (usuario `pedrofsleone`), publicado via **GitHub Pages** em **https://pedrofsleone.github.io/rei-da-copa/** (no ar, mobile-friendly). IMPORTANTE: tem um arquivo **`.nojekyll`** na raiz — sem ele o build do Pages FALHA (Jekyll se engasga com o HTML/JS); nao remover. Deploy de novas versoes: so `git add/commit/push` na pasta `C:\Users\pedro\Desktop\Rei-da-Copa` que o Pages reconstroi sozinho em ~1min. Git config: repo local com `safe.directory` marcada (a pasta pertence a outro SID no Windows), identidade Pedro Leone/gmail, remote `origin` = o repo acima, credencial via Git Credential Manager (helper `manager`, ja logado). `gh` CLI NAO instalado.

Proximos passos (roadmap do plano de torneios):
1. ~~Fase H — GitHub Pages~~ FEITO (ver acima).
2. ~~Fase B — Lobby de torneio~~ FEITO E VALIDADO (config revisada com o Pedro). Config em `/rooms/{cod}/config`; `setConfig(code, patch)` faz merge; `createRoom` default `{format:"grupos", knockoutPhase:16, size:16, groupSize:4, advance:2, rounds:3, fill:"cpu", experience:"assistir", spread:true}`. Total de times = `teamCount(c)`: no mata-mata e `knockoutPhase`; nos grupos e `size`. `joinRoom` limita ao `teamCount`. So DOIS formatos (Personalizado removido):
   - **Mata-mata** (eliminatoria direta pura): Fase do chaveamento `knockoutPhase` (16avos=32 / Oitavas=16 / Quartas=8 / Semi=4 / Final=2 times) + Vagas + Experiencia + Espalhar humanos.
   - **Fase de grupos:** Times (8/16/32) + Tamanho do grupo (3-6) + Quantos passam (1-3) + Rodadas no grupo (3/5/7/9/11/13/15) + Mata-mata final (`knockoutPhase`) + Vagas + Experiencia + Espalhar humanos. Mostra resumo derivado "N grupos de X · Y se classificam".
   - **Vagas:** `fill` cpu (completa com CPU) / humanos (espera encher). **Experiencia:** `experience` assistir/interativo. **Espalhar humanos:** `spread` (bool, botao liga/desliga) — LIGADO = distribuir humanos o mais separados possivel pelos grupos/lados do chaveamento; DESLIGADO = aleatorio. Regra a implementar na montagem (Fase D).
   Lobby (`renderMultiLobby`): `lobbyConfigPanel` editavel so pro host (segmented controls conforme o formato) e somente-leitura pros convidados; lista com contador `X/teamCount` e marca de anfitriao; Comecar (host) habilita com todos prontos e (cpu: >=1 / humanos: == teamCount). Sincroniza ao vivo. `startMatch` ainda so mostra toast "Montar os times (Fase C)". Validado no preview (ambos formatos, controles, spread, sem overflow, console limpo).
3. ~~Fase C — Draft de todos~~ FEITO E VALIDADO. Host clica Comecar (`startTournament`): grava `status:"drafting"` e cria `/rooms/{cod}/teams/{teamId}` — slots dos humanos (`submitted:false`) + times de CPU (`autoBuildTeam`, ja `submitted:true`) pra completar `teamCount` quando `fill:"cpu"`. `autoBuildTeam` monta 4-3-3 do acervo com um "tier" alvo (76-92) + jitter, pra os CPUs terem FORCAS VARIADAS (senao saem todos identicos). Nomes de CPU = selecoes ficticias (Holanda, Nigeria...). `routeTournament(room)` roteia por `room.status`: lobby->multiLobby; drafting-> se meu time submetido (ou nao sou player) vai pra `tourneyWait`, senao `enterTournamentDraft()` (reseta elenco, screen `draft` em modo torneio uma vez). O draft solo e REUSADO: em modo torneio (`state.tourney`) o botao final vira "Enviar time" (`submitTournamentTeam` -> grava resumo em teams/{clientId} com overall/attack/defense/lineup/captainId) e o voltar vira "Sair do torneio" (`leaveTournament`). Tela `tourneyWaitView` (`renderTourneyWait`) lista todos os times (humano/CPU, overall, pronto/montando) e o status "X/Y humanos prontos" / "Todos prontos". Validado no preview: mata-mata Quartas (1 humano + 7 CPU variados 81-92), draft->enviar->espera, lineups gravados, sem overflow, console limpo.
3b. ~~Draft POR TURNOS ao vivo~~ FEITO E VALIDADO (substituiu o draft simultaneo da Fase C; plano detalhado no arquivo de plano). Config ganhou `turnTime` (20/30/45/60, host escolhe). `startTournament` agora so cria slots humanos + estado `draft` (order embaralhada snake, deadline, taken, seq, pickInTurn). Nova tela `tourneyDraftView` (screen `tourneyDraft`): banner de vez + cronometro, SEU campo (do RTDB), painel de rolar/pegar so na sua vez (indisponiveis apagados = ja pegos OU sem vaga), e "Draft ao vivo" (board) com todos os times; a ULTIMA escolha de cada OUTRO time aparece "???" ate ele escolher de novo. Regras: snake (A,B,C->C,B,A), 3 por turno (ultima rodada 1; total 13), pool compartilhado (`draft.taken`). **Host e autoridade**: unico a avancar a vez (`hostDraftTick`/`hostAdvance`), controlar o cronometro e fazer auto-pick no timeout/desconexao (`hostAutoCompleteTurn`), e resolver a Troca (`hostResolveTroca`). Fim do draft (todos com 13, round>4): `finishDraft` monta CPUs com `autoBuildTeam(name, taken)` do RESTANTE e poe `status:"running"` -> `tourneyWait`.
   - **Cartas** (1 de cada por humano, na sua vez, via o board): **Bloqueio** = protege secretamente 1 jogador seu (`teams/{me}/protectedId`, so voce ve o escudo). **Troca** = acao EXTRA (nao gasta pick): da 1 seu, rouba 1 visivel do adversario; se o alvo estiver protegido, FALHA e voce PERDE a carta. Fluxo por `state.tdCard` (bloqueio / {step:give} / {step:take}); `tdUseBloqueio`/`tdUseTroca` escrevem, host resolve via `pendingTroca`; `surfaceTrocaResult` avisa ladrao/alvo. RESSALVA: `protectedId` fica no RTDB aberto (secret so na UI) — anti-trapaca real so com backend.
   - Validado no preview: draft solo-humano ate 13 + CPU do restante; snake correto (A B C C B A...); picks 3/3/3/3/1; bloqueio; troca com sucesso; troca bloqueada (nada muda + perde carta); sem overflow; console limpo. FALTA validar 2 humanos ao vivo (2 dispositivos) — o Pedro testa no GitHub Pages.
   - AJUSTES posteriores (pedido do Pedro, feitos e validados): (a) **tempo por ESCOLHA**, nao pelo turno de 3 — cada pick reseta `draft.deadline` (`tdPlacePick`), e o timeout do host pega SO 1 por vez (`hostTimeoutPick`, substituiu `hostAutoCompleteTurn`) e reseta o prazo. (b) **escolher a posicao TOCANDO NO MINI CAMPO**: tocar num jogador (`tdSelectPlayer`) marca `state.tdSelected`; no `renderTdField` as vagas abertas compativeis (posicoes que ele joga + os 2 slots de Banco) acendem como `.slot.is-compatible` tocaveis; tocar na vaga chama `tdPlacePick(player, {group,slotId,pos})`. O campo do draft passou a mostrar tambem a linha do banco (`td-bench-row`). Validado: selecionar Maradona/Pele acende so as vagas certas (ex: PE/MEI/Banco), tocar coloca ali; timeout pega 1; prazo reseta por escolha; sem overflow.
3c. CORRECAO 2026-07-04 (pedido: "nao consigo dar pronto depois de escolher o time"): no draft por turnos nao existe mais botao manual de pronto depois do 13/13. Ao pegar a ultima peca, `tdPlacePick` marca automaticamente `teams/{id}/submitted=true` e grava `overall`, `attack`, `defense` e `captainId` via `onlineTeamSummary`/`applyOnlineTeamSummary`. Se o host completar uma escolha por timeout, `hostTimeoutPick` faz o mesmo. A tela `renderTourneyDraft` mostra "Time pronto" e esconde o painel de escolha quando `count >= 13` ou `submitted=true`. `finishDraft` tambem reforca o resumo de todos os humanos antes de criar o `tournament`. Validado localmente: `JS_OK`, detector `[]`, teste VM confirmou `submitted:true` e resumo gravado.
3d. Protecao para sala ja travada: `routeTournament(room)` chama `ensureMyTournamentTeamReady(room)` durante `status:"drafting"`. Se o jogador ja tem `count >= 13` mas ainda nao tem `submitted`, o cliente grava o resumo automaticamente ao recarregar/receber update, destravando a tela sem precisar de nova escolha.
3e. CORRECAO 2026-07-04 (pedido: botoes separados para mudar selecao e ano): no draft solo e no draft online por turnos agora existem dois botoes visiveis no card do sorteio: `Trocar selecao` e `Trocar ano`. Ambos consomem as 3 trocas da rodada. `rerollSquadFor(current,type)` garante que `type:"year"` mantem a mesma selecao/pais e so troca o ano; se nao existir outro ano daquela selecao, mostra aviso e NAO gasta troca. `type:"team"` agora troca para outra selecao do MESMO ANO. A base provisoria foi ampliada de 8 para 16 selecoes para todo ano atual ter pelo menos duas opcoes: Alemanha 2002, Italia 1970, Brasil 1998, Croacia 2018, Inglaterra 1986, Franca 2022, Argentina 2014 e Holanda 2010. A barra fixa do draft nao mostra mais o antigo `Trocar time` quando ha sorteio aberto, evitando duplicidade; o botao principal ocupa largura inteira com `.action-bar.is-single`. Validado localmente: `JS_OK`, detector `[]`, teste VM confirmou 16 selecoes, 8 anos, nenhum ano sem par, e `Trocar selecao` sempre mantendo o ano e mudando o pais.
3f. AJUSTE 2026-07-04 (pedido: notas no draft e campo publico): os chips do `Draft ao vivo` agora mostram abreviacao + nota (`PEL 99`). O time ativo no draft tambem exibe um mini campo publico dentro do card dele (`renderTdPublicField`), para todos acompanharem as vagas/jogadores. Regra de suspense: para outros jogadores, o ultimo pick daquele time fica oculto (`???` nos chips e vazio no mini campo) ate a proxima escolha; para o proprio jogador, tudo aparece. Helpers: `draftPlayerLabel`, `tdTeamEntries`, `tdHiddenSeq`, `renderTdPublicField`. Validado localmente: `JS_OK`, detector `[]`, teste VM confirmou label `PEL 99`, ultimo oculto para outros e visivel para o dono.
3g. AJUSTE 2026-07-04 (pedido: draft ao vivo como abas estilo 7x0): a parte publica do draft nao abre mais um campo dentro de cada card. `renderTdBoard` agora deixa os cards compactos como abas/lista e adiciona UM campo publico abaixo, via `renderTdActiveField`, sempre do time que esta escolhendo (`tdActive(d)`). A regra de suspense tambem mudou: `tdHiddenSeq` so esconde a ultima escolha de um turno COMPLETO do adversario (`count % 3 === 0` ou `count === 13`). Assim, a 1a e 2a escolha da rodada aparecem imediatamente quando o adversario clica; apenas a 3a fica escondida ate ele iniciar a proxima rodada. O dono do time continua vendo tudo. Validado localmente: `JS_OK`; teste VM confirmou hidden `[null,null,3,null]`, campo unico (`td-public-field` = 1), `PEL 99`/`MAR 98` visiveis e `ZID 97` oculto quando e a ultima escolha fechada do adversario. OBS: este item substitui a parte visual/suspense descrita em 3f.
3h. AJUSTE 2026-07-04 (pedido: fazer a regua de overall nessa linha): criado `RATING_GUIDE.md` com a regua oficial do Rei da Copa. `index.html` ganhou comentario antes de `squads` e os 16 elencos atuais foram recalibrados para uma escala de desempenho naquela Copa, nao carreira inteira. Picos 99 atuais: Pele 1970, Maradona 1986 e Messi 2022. Faixa 95-98 ficou para campanhas lendarias como Ronaldo 2002 e Mbappe 2022. Validacao parcial ja feita: `JS_OK`; medias atuais por elenco ficam aprox. entre 82 e 89, mantendo campeoes historicos fortes sem transformar todo nome famoso em 90+.
3i. AJUSTE 2026-07-04 (pedido: todos os anos e selecoes que o 7x0 tem): criado `COVERAGE_TARGETS.md` com a cobertura completa de ano+selecao vista no arquivo publico do 7a0: 1950-2026, 263 elencos e 52 paises. Nao foram importados jogadores nem overalls. Proximo passo recomendado antes de preencher tudo: separar `squads` do `index.html` para arquivo de dados proprio e criar os jogadores/notas com curadoria Rei da Copa.
4. ~~Fase D - Torneio ASSISTIR (base)~~ FEITO como base inicial e depois evoluido pela Fase D.1 (ver 4b). Quando o draft termina, `finishDraft(room)` monta os CPUs restantes, cria `allTeams` e grava `tournament` na raiz da sala junto com `status:"running"`. Se uma sala antiga/instavel chegar em `running` sem `tournament`, o host chama `hostEnsureTournament(room)` e cria o torneio por fallback.
   - Geracao: `buildTournament(teams, cfg)` suporta `format:"matamata"` e `format:"grupos"`. Mata-mata cria chave direta com `buildKnockout`. Grupos cria grupos por `groupSize` usando `Math.ceil`, respeita `spread` para separar humanos, simula rodadas com `roundRobin`, monta `group.table` com pontos/saldo/gols/overall e classifica `advance` por grupo. Depois pega classificados, limita a maior potencia de 2 ate `knockoutPhase` e cria o mata-mata final. O campeao fica em `tournament.champion`.
   - Simulacao: `simulateTournamentMatch` resolve placar e penaltis em mata-mata quando empata; host e autoritativo porque grava o objeto `tournament` no Firebase.
   - Tela: `renderTourneyWait()` agora vira tela do torneio quando `room.status` e `running/done` e existe `room.tournament`. Nova UI mostra resumo (times/jogos/campeao), "Seus jogos", grupos com classificacao, lista de partidas e chave. Destaques: jogos do jogador (`.match-row.is-mine`) e classificados (`.standing-row.is-qualified`).
   - CSS novo: `.tourney-summary`, `.tourney-section`, `.tourney-title-row`, `.standings-table`, `.match-list`, `.bracket-list`, `.standing-row`, `.match-row`, `.match-score`, `.bracket-round`.
   - Validacao local: sintaxe do script `JS_OK`; detector Impeccable `[]`; teste Node/VM gerou torneio de grupos com 4 grupos, 4 times por grupo, 8 classificados, campeao, 31 jogos totais; mata-mata de 16 gerou 4 fases, campeao e 15 jogos. FALTA validar em Firebase/2 celulares e fazer commit/push para Pages.
4a. DECISAO/PLANO 2026-07-04 (pedido: resultado nao pode aparecer todo): o torneio nao deve revelar tabela/chave/resultados futuros de uma vez. Precisa virar uma transmissao progressiva. O pedido inicial falava em criar 2 opcoes de exibicao no lobby/config:
   - `Ver todos os jogos`: todos os jogos entram na fila de transmissao, inclusive CPU x CPU.
   - `Ver so jogos com jogadores`: entram na fila de transmissao apenas partidas com pelo menos 1 humano; jogos CPU x CPU sao simulados/revelados sem playback quando necessario para atualizar tabela/chave.
   - Em ambos os modos, TODOS os participantes veem o mesmo jogo que esta sendo transmitido, mesmo quando o jogo e de outro jogador. Ou seja, nao e tela individual; e uma sala sincronizada.
   - O resultado final de cada partida so deve aparecer quando aquele jogo acabar. Tabela, grupos, chave, classificados e campeao devem atualizar aos poucos, sem spoiler de jogos futuros.
   - Modelagem pensada na hora: `config.watchScope = "all" | "humans"`; `room.broadcast = { matchQueue, currentIndex, revealedMatchIds, phase }`; host controla/autoriza avancos e grava progresso no Firebase para todos os celulares reproduzirem.
   - Video de referencia enviado: `C:\Users\pedro\OneDrive\Documentos\REI_DA_COPA\WhatsApp Video 2026-07-04 at 15.02.09.mp4`. Nesta sessao nao foi possivel extrair frames: navegador bloqueou `file://` para video local, nao havia `ffmpeg/cv2/imageio/moviepy`, e a API nativa do Windows nao gerou frames uteis. Depois Claude registrou que o video parecia ser tela de draft do 7a0 e a implementacao seguiu por decisao textual (ver 4b).
   - AUDITORIA 2026-07-04: esta opcao `watchScope` ainda NAO existe no `index.html` atual. O que foi implementado depois (ver 4b) e um modo fixo/hibrido: todos os jogos entram na fila, jogos com humano tem playback, CPUxCPU revela rapido. Se Pedro ainda quiser escolher entre `Ver todos os jogos` e `Ver so jogos com jogadores`, precisa implementar no lobby/config e filtrar/alterar a fila.
4b. ~~Fase D.1 - Transmissao progressiva sincronizada~~ FEITO E VALIDADO (local, host+auto). O video de referencia era so a tela de DRAFT do 7a0 (nao ajudou no layout). Decisoes do Pedro interpretadas na implementacao: todos os jogos entram na fila; so jogos com HUMANOS tem playback lance-a-lance; CPUxCPU revela rapido; sala SINCRONIZADA, so o ANFITRIAO controla; sem spoiler (resultado so quando o jogo acaba, tabela/chave progressivas, campeao so no fim). Implementacao em `index.html`: modelo `room.broadcast = {index, openedIndex, evIndex, events, auto, done}` (host unico escritor). Ordem dos jogos = `broadcastOrder`(=`tournamentMatches`, deterministico em todos). Host dirige via `hostBroadcastDrive` (chamado no `routeTournament` running + no `broadcastTick` a cada 900ms): abre o jogo atual (`buildBroadcastEvents` gera lances cosmeticos dos golsPro/contra pra jogo humano; CPUxCPU sem eventos e auto-avanca ~2.2s), avanca no Auto, e no fim do jogo humano em Auto vai pro proximo. `renderBroadcastCentral` mostra a "Central da Partida" (AO VIVO/RAPIDO, placar revelado ate evIndex, timeline) e os controles Auto/Pular/Lance/Proximo SO pro host; `bcLance/bcAuto/bcPular/bcProximo` escrevem em broadcast. `renderTournamentView` reescrita: `bcReveal(order,b,match)` = done/live/hidden; `renderMatchRow` mostra placar so em 'done', 'ao vivo' em 'live', 'vs' e times '?' em 'hidden'; grupos recalculam `rankGroup` so com jogos revelados (qualificado so quando o grupo fecha); chave nao spoila; campeao so quando `broadcast.done`. CSS `.bc-central/.bc-live/.bc-score/.bc-goals/.bc-timeline/.bc-controls/.bc-livechip`. Validado no preview: mata-mata 8 (1 humano+7 CPU), draft ate 13, torneio roda em Auto ate o campeao (Pedro FC), placares progressivos, "? vs ?" pros futuros, penaltis (3-3 pen 5-4), sem overflow, console limpo. FALTA validar 2 humanos ao vivo (guest ve a transmissao sincronizada controlada pelo host) em 2 dispositivos.
3j. AJUSTE 2026-07-04 (pedido: draft com layout de ABAS estilo 7a0, com prints). A tela `tourneyDraft` foi reorganizada: topo = "ESCALACOES AO VIVO" com abas (`renderTdTabs`, `#tdTabs`), uma por humano do `draft.order`, com apelido + `count/13` + selo "NA VEZ" no ativo. A VIEW SEGUE AUTOMATICAMENTE o jogador da vez (`tdActive`), sem fixar (decisao do Pedro). Ordem de cima pra baixo: abas -> painel de escolha/assistir -> CAMPO no fim. Na SUA vez (`iAmPicking`): `renderTdPick` (sorteio Trocar selecao/ano + lista de jogadores estilo 7a0, selecionado em VERMELHO `.player-card.is-selected`) + `renderTdCards` + `renderTdField` (SEU campo, toque no jogador -> vagas acendem -> toque pra encaixar). Assistindo adversario: `renderTdWatch` (lista dos jogadores dele com ??? na ultima escolha) + `fillWatchField` (campo dele read-only). Carta Troca: ao ativar, `renderTdSteal` mostra os jogadores VISIVEIS dos adversarios pra tocar (o campo do board antigo foi removido). Cartas Bloqueio/Troca-give agora agem tocando no jogador do SEU campo (`renderTdField` trata `data-tdcard`). Removidas as funcoes mortas `renderTdBoard/renderTdActiveField/renderTdPublicField`. CSS `.td-tabs/.td-tab/.td-navez/.slot.is-target/.watch-row`. Validado no preview: abas seguem a vez, lista vermelha, campo embaixo, aba do adversario com campo+lista, bloqueio no campo, sem overflow, console limpo.
5. **(historico) Perguntas Fase D.1 - parcialmente respondidas pelo Pedro (ver 4b).** Mantidas so por referencia; a escolha explicita `Ver todos os jogos` vs `Ver so jogos com jogadores` ainda nao foi implementada no lobby:
   - A escolha `Ver todos os jogos` vs `Ver so jogos com jogadores` fica no lobby e so o anfitriao altera?
   - Quem controla `Auto`, `Pular`, `Lance`: so anfitriao para todos, ou cada celular apenas assiste sem controle?
   - Em CPU x CPU no modo `Ver todos os jogos`, o playback deve ser lance-a-lance igual jogo humano ou automatico mais rapido?
   - No modo `Ver so jogos com jogadores`, jogos CPU x CPU aparecem como resultado automatico entre transmissos, ou ficam ocultos ate a tabela precisar deles?
   - Layout desejado pelo video: confirmar se tem placar grande, minuto, campo com bolinhas, timeline/narracao, estatisticas e fila de proximos jogos.
6. **Fase E - modo INTERATIVO;** **Fase F - Personalizado + regras definitivas do Firebase (expira ~2026-08-02) + polimento.**
7. PWA depois.

O lobby 1x1 atual e o caso minimo (bracket de 2). Nao e descartado — vira a base do lobby de torneio.

## Perguntas pendentes (produto)

- Tema/foco: comecamos com **selecoes da Copa** (base atual). Confirmar se vai ter clubes/Brasil x Mundo depois.
- Dados: hoje base ficticia/curada de exemplo embutida no HTML. Definir se vai pra base real e mais completa.
- Transmissao do torneio: validar 4b em 2 celulares reais. Decidir se ainda quer implementar a escolha explicita do pedido original (`Ver todos os jogos` vs `Ver so jogos com jogadores`); hoje nao ha `config.watchScope`, o modo e fixo/hibrido: todos os jogos na fila, humanos com playback, CPUxCPU rapido.
- Estilo/Modo/Dificuldade do 7a0 (Defensivo/Equilibrado/Ofensivo, Classico/De almanaque): ainda nao implementados no Rei da Copa. Decidir se entram.

## Observacao legal/produto

Evitar clonagem direta do 7a0. O projeto deve ser inspirado no genero de mecanica, mas ter:
- Nome proprio.
- Visual proprio.
- Textos proprios.
- Regras proprias onde possivel.
- Dados proprios ou cuidadosamente curados.
