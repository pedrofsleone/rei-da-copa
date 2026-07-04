# Rei da Copa - Handoff para Claude Code

Ultima atualizacao: 2026-07-03 (multiplayer online: Fase 0-Firebase concluida e Fase 1-lobby feita e validada). Sessao tambem entregou: 8 formacoes iguais as do 7a0, correcao do 3-5-2, e penaltis escolhidos na hora da disputa. Detalhes nas secoes abaixo; roadmap atual no fim do arquivo.

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

FALTA:
- Fase 0-hospedagem: publicar no GitHub Pages pra abrir em qualquer celular (tambem resolve o "nao abre no telefone"). Ainda nao feito.
- Fase 2: draft 1x1 (cada um monta o XI e envia resumo pra `/rooms/{cod}/drafts/{clientId}`). O botao Comecar hoje so mostra toast de "Fase 2 em breve".
- Fase 3: Final 1x1 autoritativa pelo host (seed) + reproducao nos 2 + card do confronto.

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
- Botao para trocar time.
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
- Base provisoria embutida no HTML.
- Selecoes/anos de exemplo: Brasil 2002, Brasil 1970, Franca 1998, Franca 2018, Argentina 1986, Argentina 2022, Alemanha 2014, Espanha 2010.
- Os dados sao para prototipo de jogabilidade, nao base definitiva.

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
- **Fase A (Home)** feita e validada: tela inicial `homeView` (screen `home`, agora e a tela de abertura) com opcoes **Contra CPU** (-> draft solo) e **Multiplayer** (-> multiHome). Botao `← Inicio` no draft; back do multiHome volta pra home. Barra de acao e pills escondidas fora de draft/match (via regra CSS `[hidden]{display:none!important}` pra o atributo hidden funcionar em flex/grid). Navegacao, solo e multiplayer intactos, sem erro de console.

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
   - AJUSTES posteriores (pedido do Pedro, feitos e validados): (a) **tempo por ESCOLHA**, nao pelo turno de 3 — cada pick reseta `draft.deadline` (`tdPlacePick`), e o timeout do host pega SO 1 por vez (`hostTimeoutPick`, substituiu `hostAutoCompleteTurn`) e reseta o prazo. (b) **escolher a posicao** do jogador entre as que ele joga: tocar num jogador chama `tdSelectPlayer` que calcula as opcoes (posicoes com vaga aberta + Banco); se tem 1 coloca direto, se tem varias mostra um seletor (`state.tdPick`) e `tdPlacePick` coloca na escolhida. Validado: seletor MEI/PE/Banco funciona; timeout pega 1; prazo reseta.
4. **Fase D — Torneio ASSISTIR (PROXIMA):** host monta grupos/bracket (com regra `spread`) e resolve placares (autoritativo); tabela/chaveamento ao vivo; playback cosmetico dos jogos do jogador; campeao. Hoje `tourneyWait` mostra "Fase D em breve" quando `status` vira "running".
4. **Fase D — Torneio modo ASSISTIR:** host monta grupos/bracket e resolve placares; tabela/chaveamento ao vivo; playback dos seus jogos; campeao. (1o torneio jogavel ponta a ponta.)
5. **Fase E — modo INTERATIVO;** **Fase F — Personalizado + regras definitivas do Firebase (expira ~2026-08-02) + polimento.**
6. PWA depois.

O lobby 1x1 atual e o caso minimo (bracket de 2). Nao e descartado — vira a base do lobby de torneio.

## Perguntas pendentes (produto)

- Tema/foco: comecamos com **selecoes da Copa** (base atual). Confirmar se vai ter clubes/Brasil x Mundo depois.
- Dados: hoje base ficticia/curada de exemplo embutida no HTML. Definir se vai pra base real e mais completa.
- Estilo/Modo/Dificuldade do 7a0 (Defensivo/Equilibrado/Ofensivo, Classico/De almanaque): ainda nao implementados no Rei da Copa. Decidir se entram.

## Observacao legal/produto

Evitar clonagem direta do 7a0. O projeto deve ser inspirado no genero de mecanica, mas ter:
- Nome proprio.
- Visual proprio.
- Textos proprios.
- Regras proprias onde possivel.
- Dados proprios ou cuidadosamente curados.
