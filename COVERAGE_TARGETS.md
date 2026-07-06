# Rei da Copa - Cobertura de Elencos

Ultima atualizacao: 2026-07-06

STATUS: COBERTURA COMPLETA E INTEGRADA. A base do jogo (`squads.js`) agora usa a
base real recuperada do 7a0 (`base_7a0_recuperada.xlsx`), gerada por
`7a0-estudo/gen_squads.py`: 263 elencos, 5911 jogadores, 52 paises, 20 Copas
(1950-2026), com nomes, notas e flags de lenda do proprio acervo 7a0. Este
arquivo permanece como checklist historico da cobertura alvo.

Resumo: 20 Copas, 263 elencos e 52 paises (100% presentes em `squads.js`).

## Por Copa

- 2026 (10): Franca, Argentina, Brasil, Espanha, Portugal, Inglaterra, Alemanha, Holanda, Belgica, Equador.
- 2022 (13): Brasil, Croacia, Franca, Argentina, Portugal, Senegal, Coreia do Sul, Servia, Equador, Japao, Marrocos, Costa Rica, Australia.
- 2018 (17): Espanha, Brasil, Franca, Argentina, Belgica, Croacia, Colombia, Uruguai, Inglaterra, Marrocos, Portugal, Suica, Suecia, Japao, Russia, Egito, Coreia do Sul.
- 2014 (17): Alemanha, Brasil, Holanda, Franca, Uruguai, Argentina, Belgica, Mexico, Colombia, Argelia, Chile, Costa do Marfim, Gana, Grecia, Suica, Nigeria, Costa Rica.
- 2010 (16): Espanha, Brasil, Argentina, Inglaterra, Holanda, Alemanha, Chile, Costa do Marfim, Coreia do Sul, Portugal, Grecia, Japao, Mexico, Uruguai, Paraguai, Gana.
- 2006 (15): Brasil, Argentina, Inglaterra, Franca, Alemanha, Italia, Portugal, Holanda, Republica Tcheca, Suecia, Costa do Marfim, Ucrania, Equador, Suica, Australia.
- 2002 (18): Franca, Argentina, Brasil, Italia, Alemanha, Inglaterra, Portugal, Dinamarca, Espanha, Irlanda, Mexico, Nigeria, Turquia, Japao, Estados Unidos, Coreia do Sul, Camaroes, Senegal.
- 1998 (14): Franca, Argentina, Inglaterra, Italia, Holanda, Brasil, Alemanha, Iugoslavia, Croacia, Nigeria, Dinamarca, Chile, Colombia, Paraguai.
- 1994 (12): Alemanha, Holanda, Brasil, Argentina, Italia, Mexico, Romenia, Suecia, Bulgaria, Colombia, Nigeria, Estados Unidos.
- 1990 (13): Alemanha, Italia, Brasil, Holanda, Iugoslavia, Inglaterra, Argentina, Republica Tcheca, Romenia, Colombia, Irlanda, Egito, Camaroes.
- 1986 (15): Alemanha, Italia, Brasil, Inglaterra, Franca, Argentina, Dinamarca, Espanha, Uruguai, Belgica, Bulgaria, Marrocos, Mexico, Polonia, Paraguai.
- 1982 (12): Inglaterra, Argentina, Franca, Alemanha, Italia, Brasil, Escocia, Belgica, Austria, Polonia, Argelia, Camaroes.
- 1978 (11): Argentina, Brasil, Italia, Espanha, Holanda, Polonia, Escocia, Austria, Franca, Peru, Mexico.
- 1974 (10): Alemanha, Brasil, Italia, Holanda, Argentina, Escocia, Chile, Polonia, Suecia, Uruguai.
- 1970 (10): Inglaterra, Alemanha, Brasil, Italia, Bulgaria, Peru, Romenia, Belgica, Mexico, Uruguai.
- 1966 (11): Inglaterra, Espanha, Brasil, Italia, Argentina, Alemanha, Hungria, Uniao Sovietica, Portugal, Franca, Mexico.
- 1962 (12): Brasil, Espanha, Inglaterra, Italia, Uniao Sovietica, Tchecoslovaquia, Chile, Alemanha, Hungria, Argentina, Iugoslavia, Mexico.
- 1958 (12): Brasil, Alemanha, Inglaterra, Franca, Suecia, Uniao Sovietica, Iugoslavia, Argentina, Hungria, Irlanda do Norte, Paraguai, Pais de Gales.
- 1954 (13): Hungria, Austria, Brasil, Alemanha, Uruguai, Iugoslavia, Inglaterra, Franca, Italia, Suica, Escocia, Tchecoslovaquia, Turquia.
- 1950 (12): Inglaterra, Brasil, Espanha, Italia, Uruguai, Iugoslavia, Suecia, Chile, Mexico, Suica, Paraguai, Estados Unidos.

## Paises Unicos

Alemanha, Argelia, Argentina, Australia, Austria, Belgica, Brasil, Bulgaria, Camaroes, Chile, Colombia, Coreia do Sul, Costa Rica, Costa do Marfim, Croacia, Dinamarca, Egito, Equador, Escocia, Espanha, Estados Unidos, Franca, Gana, Grecia, Holanda, Hungria, Inglaterra, Irlanda, Irlanda do Norte, Italia, Iugoslavia, Japao, Marrocos, Mexico, Nigeria, Paraguai, Pais de Gales, Peru, Polonia, Portugal, Republica Tcheca, Romenia, Russia, Senegal, Servia, Suecia, Suica, Tchecoslovaquia, Turquia, Ucrania, Uniao Sovietica, Uruguai.

## Historico

- Base migrada do `index.html` para `squads.js` (`window.SQUADS`, carregado antes do script principal).
- Base preenchida com os 263 elencos usando a base real recuperada do 7a0
  (`base_7a0_recuperada.xlsx`), via `7a0-estudo/gen_squads.py`. O gerador mapeia
  posicoes (Goalkeeper->GOL, Centre-back->ZAG, Left-back->LE, Right-back->LD,
  Defensive midfielder->VOL, Midfielder->MC, Attacking midfielder->MEI,
  Left/Right winger->PE/PD, Centre-forward->CA), traduz paises para portugues,
  remove acentos e gera siglas (`short`) unicas dentro de cada elenco.
- Para regenerar apos atualizar a planilha: rodar `python 7a0-estudo/gen_squads.py`.
