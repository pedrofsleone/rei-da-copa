/*
 * Rei da Copa - base de selecoes (squads)
 * Cobertura alvo documentada em COVERAGE_TARGETS.md (20 Copas / 263 elencos).
 * Jogadores e notas curados pelo Rei da Copa com a regua do RATING_GUIDE.md
 * (nota = nivel naquela Copa, nao carreira). Cobertura ano+pais e factual;
 * dados de jogador nao sao copiados de nenhum outro produto.
 *
 * Cada elenco: { key, country, code, year, style, players: [ 11x p(...) ] }
 * p(id, num, name, short, positions[], rating, tag)
 * Posicoes: GOL ZAG LE LD VOL MC MEI PE PD CA
 */
(function () {
  function p(id, num, name, short, positions, rating, tag) {
    return { id, num, name, short, positions, rating, tag };
  }

  window.SQUADS = [
      {
        key: "br-2002",
        country: "Brasil",
        code: "BR",
        year: 2002,
        style: "Pentacampeao",
        players: [
          p("br02-ron", 9, "Ronaldo", "RON", ["CA"], 97, "Craque"),
          p("br02-riv", 10, "Rivaldo", "RIV", ["MEI", "PE"], 93, "Lenda"),
          p("br02-r10", 11, "Ronaldinho", "R10", ["PD", "MEI"], 89, "Magia"),
          p("br02-caf", 2, "Cafu", "CAF", ["LD"], 88, "Capitao"),
          p("br02-rc", 6, "R. Carlos", "R.C", ["LE"], 89, "Foguete"),
          p("br02-gil", 8, "Gilberto", "GIL", ["VOL", "MC"], 82, "Motor"),
          p("br02-jun", 19, "Juninho", "JUN", ["MC", "MEI"], 82, "Bola parada"),
          p("br02-luc", 3, "Lucio", "LUC", ["ZAG"], 86, "Muralha"),
          p("br02-edm", 4, "Edmilson", "EDM", ["ZAG", "VOL"], 82, "Tatico"),
          p("br02-mar", 1, "Marcos", "MAR", ["GOL"], 85, "Milagre"),
          p("br02-kle", 15, "Kleberson", "KLE", ["MC", "VOL"], 79, "Surpresa")
        ]
      },
      {
        key: "br-1970",
        country: "Brasil",
        code: "BR",
        year: 1970,
        style: "Time arte",
        players: [
          p("br70-pele", 10, "Pele", "PEL", ["CA", "MEI"], 99, "Rei"),
          p("br70-jar", 7, "Jairzinho", "JAI", ["PD", "CA"], 95, "Furacao"),
          p("br70-riv", 11, "Rivelino", "RIV", ["MEI", "PE"], 90, "Canhao"),
          p("br70-tos", 9, "Tostao", "TOS", ["CA", "MEI"], 87, "Cerebro"),
          p("br70-ger", 8, "Gerson", "GER", ["MC", "VOL"], 89, "Maestro"),
          p("br70-clo", 5, "Clodoaldo", "CLO", ["VOL"], 86, "Pulmao"),
          p("br70-car", 4, "C. Alberto", "CAP", ["LD"], 90, "Capitao"),
          p("br70-bri", 2, "Brito", "BRI", ["ZAG"], 80, "Firme"),
          p("br70-pia", 3, "Piazza", "PIA", ["ZAG", "VOL"], 82, "Classe"),
          p("br70-eve", 16, "Everaldo", "EVE", ["LE"], 77, "Apoio"),
          p("br70-fel", 1, "Felix", "FEL", ["GOL"], 76, "Seguro")
        ]
      },
      {
        key: "fr-1998",
        country: "Franca",
        code: "FR",
        year: 1998,
        style: "Muralha azul",
        players: [
          p("fr98-zid", 10, "Zidane", "ZID", ["MEI", "MC"], 97, "Lenda"),
          p("fr98-hen", 12, "Henry", "HEN", ["PE", "CA"], 84, "Arranque"),
          p("fr98-djo", 6, "Djorkaeff", "DJO", ["MEI", "PD"], 85, "Tecnico"),
          p("fr98-pet", 18, "Petit", "PET", ["MC", "VOL"], 84, "Motor"),
          p("fr98-des", 7, "Deschamps", "DES", ["VOL"], 86, "Capitao"),
          p("fr98-thu", 15, "Thuram", "THU", ["LD", "ZAG"], 91, "Muralha"),
          p("fr98-bla", 5, "Blanc", "BLA", ["ZAG"], 88, "Classe"),
          p("fr98-desai", 8, "Desailly", "DSA", ["ZAG", "VOL"], 90, "Forca"),
          p("fr98-liz", 3, "Lizarazu", "LIZ", ["LE"], 86, "Apoio"),
          p("fr98-bar", 16, "Barthez", "BAR", ["GOL"], 86, "Reflexo"),
          p("fr98-gui", 9, "Guivarc'h", "GUI", ["CA"], 76, "Area")
        ]
      },
      {
        key: "fr-2018",
        country: "Franca",
        code: "FR",
        year: 2018,
        style: "Transicao",
        players: [
          p("fr18-mba", 10, "Mbappe", "MBA", ["PD", "CA"], 94, "Raio"),
          p("fr18-gri", 7, "Griezmann", "GRI", ["MEI", "CA"], 91, "Frio"),
          p("fr18-gir", 9, "Giroud", "GIR", ["CA"], 83, "Pivo"),
          p("fr18-pog", 6, "Pogba", "POG", ["MC"], 88, "Classe"),
          p("fr18-kan", 13, "Kante", "KAN", ["VOL", "MC"], 91, "Pulmao"),
          p("fr18-mat", 14, "Matuidi", "MAT", ["MC", "PE"], 82, "Equilibrio"),
          p("fr18-var", 4, "Varane", "VAR", ["ZAG"], 89, "Elegante"),
          p("fr18-umt", 5, "Umtiti", "UMT", ["ZAG"], 85, "Forca"),
          p("fr18-pav", 2, "Pavard", "PAV", ["LD"], 80, "Apoio"),
          p("fr18-luc", 21, "Lucas H.", "L.H", ["LE"], 82, "Intenso"),
          p("fr18-llo", 1, "Lloris", "LLO", ["GOL"], 86, "Capitao")
        ]
      },
      {
        key: "ar-1986",
        country: "Argentina",
        code: "AR",
        year: 1986,
        style: "Camisa 10",
        players: [
          p("ar86-mar", 10, "Maradona", "MAR", ["MEI", "PE"], 99, "Genio"),
          p("ar86-val", 11, "Valdano", "VAL", ["CA", "PE"], 85, "Classe"),
          p("ar86-bur", 7, "Burruchaga", "BUR", ["MC", "MEI"], 85, "Decisivo"),
          p("ar86-bat", 2, "Batista", "BAT", ["VOL"], 82, "Marcador"),
          p("ar86-giu", 14, "Giusti", "GIU", ["MC", "VOL"], 80, "Motor"),
          p("ar86-olu", 19, "Olarticoechea", "OLA", ["LE"], 78, "Entrega"),
          p("ar86-cuc", 9, "Cuciuffo", "CUC", ["LD", "ZAG"], 76, "Firme"),
          p("ar86-rug", 19, "Ruggeri", "RUG", ["ZAG"], 83, "Lider"),
          p("ar86-bro", 5, "Brown", "BRO", ["ZAG"], 80, "Area"),
          p("ar86-pum", 18, "Pasculli", "PAS", ["PD", "CA"], 76, "Oportuno"),
          p("ar86-pum2", 1, "Pumpido", "PUM", ["GOL"], 81, "Seguro")
        ]
      },
      {
        key: "ar-2022",
        country: "Argentina",
        code: "AR",
        year: 2022,
        style: "Ultima danca",
        players: [
          p("ar22-mes", 10, "Messi", "MES", ["MEI", "PD"], 99, "Genio"),
          p("ar22-jul", 9, "J. Alvarez", "JUL", ["CA", "PD"], 85, "Pressao"),
          p("ar22-dim", 11, "Di Maria", "DIM", ["PE", "PD"], 87, "Final"),
          p("ar22-mac", 20, "Mac Allister", "MAC", ["MC", "MEI"], 82, "Passe"),
          p("ar22-enzo", 24, "Enzo", "ENZ", ["MC", "VOL"], 83, "Ritmo"),
          p("ar22-dep", 7, "De Paul", "DEP", ["MC", "VOL"], 82, "Motor"),
          p("ar22-mol", 26, "Molina", "MOL", ["LD"], 79, "Apoio"),
          p("ar22-ota", 19, "Otamendi", "OTA", ["ZAG"], 82, "Casca"),
          p("ar22-rom", 13, "Romero", "ROM", ["ZAG"], 84, "Choque"),
          p("ar22-tag", 3, "Tagliafico", "TAG", ["LE"], 78, "Entrega"),
          p("ar22-dib", 23, "Dibu", "DIB", ["GOL"], 87, "Penalti")
        ]
      },
      {
        key: "de-2014",
        country: "Alemanha",
        code: "DE",
        year: 2014,
        style: "Maquina",
        players: [
          p("de14-klo", 11, "Klose", "KLO", ["CA"], 88, "Historico"),
          p("de14-mul", 13, "Muller", "MUL", ["PD", "CA"], 91, "Instinto"),
          p("de14-ozil", 8, "Ozil", "OZI", ["MEI"], 87, "Passe"),
          p("de14-kro", 18, "Kroos", "KRO", ["MC"], 90, "Regua"),
          p("de14-sch", 7, "Schweinsteiger", "SCH", ["VOL", "MC"], 89, "Comando"),
          p("de14-khe", 6, "Khedira", "KHE", ["MC", "VOL"], 82, "Forca"),
          p("de14-lah", 16, "Lahm", "LAH", ["LD", "VOL"], 91, "Capitao"),
          p("de14-hum", 5, "Hummels", "HUM", ["ZAG"], 88, "Passe"),
          p("de14-boa", 20, "Boateng", "BOA", ["ZAG"], 87, "Fisico"),
          p("de14-how", 4, "Howedes", "HOW", ["LE", "ZAG"], 80, "Seguro"),
          p("de14-neu", 1, "Neuer", "NEU", ["GOL"], 94, "Muralha")
        ]
      },
      {
        key: "es-2010",
        country: "Espanha",
        code: "ES",
        year: 2010,
        style: "Posse",
        players: [
          p("es10-vil", 7, "Villa", "VIL", ["CA", "PE"], 92, "Gol"),
          p("es10-ini", 6, "Iniesta", "INI", ["MEI", "MC"], 94, "Final"),
          p("es10-xav", 8, "Xavi", "XAV", ["MC"], 95, "Maestro"),
          p("es10-xab", 14, "X. Alonso", "XAL", ["VOL", "MC"], 88, "Passe"),
          p("es10-bus", 16, "Busquets", "BUS", ["VOL"], 86, "Base"),
          p("es10-ped", 18, "Pedro", "PED", ["PD", "PE"], 82, "Movel"),
          p("es10-ram", 15, "S. Ramos", "RAM", ["LD", "ZAG"], 88, "Forca"),
          p("es10-puy", 5, "Puyol", "PUY", ["ZAG"], 89, "Raiz"),
          p("es10-piq", 3, "Pique", "PIQ", ["ZAG"], 87, "Classe"),
          p("es10-cap", 11, "Capdevila", "CAP", ["LE"], 80, "Apoio"),
          p("es10-cas", 1, "Casillas", "CAS", ["GOL"], 93, "Santo")
        ]
      },
      {
        key: "de-2002",
        country: "Alemanha",
        code: "DE",
        year: 2002,
        style: "Finalista",
        players: [
          p("de02-klo", 11, "Klose", "KLO", ["CA"], 85, "Area"),
          p("de02-bie", 20, "Bierhoff", "BIE", ["CA"], 80, "Pivo"),
          p("de02-neu", 7, "Neuville", "NEU", ["PD", "CA"], 79, "Movel"),
          p("de02-bal", 13, "Ballack", "BAL", ["MC", "MEI"], 89, "Motor"),
          p("de02-ham", 8, "Hamann", "HAM", ["VOL"], 82, "Marcador"),
          p("de02-sch", 19, "Schneider", "SND", ["MC", "PD"], 81, "Passe"),
          p("de02-lin", 2, "Linke", "LIN", ["ZAG"], 80, "Firme"),
          p("de02-met", 21, "Metzelder", "MET", ["ZAG"], 79, "Jovem"),
          p("de02-ram", 5, "Ramelow", "RAM", ["ZAG", "VOL"], 79, "Seguro"),
          p("de02-zie", 6, "Ziege", "ZIE", ["LE"], 78, "Apoio"),
          p("de02-kah", 1, "Kahn", "KAH", ["GOL"], 94, "Muralha")
        ]
      },
      {
        key: "it-1970",
        country: "Italia",
        code: "IT",
        year: 1970,
        style: "Finalista",
        players: [
          p("it70-riv", 11, "Riva", "RVA", ["CA"], 90, "Canhao"),
          p("it70-bon", 20, "Boninsegna", "BON", ["CA"], 85, "Area"),
          p("it70-dom", 7, "Domenghini", "DOM", ["PD"], 81, "Trabalho"),
          p("it70-rve", 14, "Rivera", "RIV", ["MEI"], 89, "Classe"),
          p("it70-maz", 10, "Mazzola", "MAZ", ["MEI", "MC"], 87, "Tecnico"),
          p("it70-ber", 8, "Bertini", "BER", ["MC", "VOL"], 80, "Motor"),
          p("it70-fac", 3, "Facchetti", "FAC", ["LE"], 89, "Capitao"),
          p("it70-bur", 2, "Burgnich", "BUR", ["LD", "ZAG"], 84, "Firme"),
          p("it70-ros", 5, "Rosato", "ROS", ["ZAG"], 81, "Raiz"),
          p("it70-cer", 6, "Cera", "CER", ["ZAG", "VOL"], 80, "Leitura"),
          p("it70-alb", 1, "Albertosi", "ALB", ["GOL"], 84, "Seguro")
        ]
      },
      {
        key: "br-1998",
        country: "Brasil",
        code: "BR",
        year: 1998,
        style: "Finalista",
        players: [
          p("br98-ron", 9, "Ronaldo", "RON", ["CA"], 96, "Fenomeno"),
          p("br98-beb", 20, "Bebeto", "BEB", ["CA"], 85, "Frio"),
          p("br98-riv", 10, "Rivaldo", "RIV", ["MEI", "PE"], 90, "Classe"),
          p("br98-den", 18, "Denilson", "DEN", ["PE"], 82, "Drible"),
          p("br98-leo", 7, "Leonardo", "LEO", ["MC", "MEI"], 84, "Passe"),
          p("br98-dun", 8, "Dunga", "DUN", ["VOL"], 84, "Capitao"),
          p("br98-caf", 2, "Cafu", "CAF", ["LD"], 88, "Motor"),
          p("br98-ald", 4, "Aldair", "ALD", ["ZAG"], 84, "Classe"),
          p("br98-jrb", 3, "Junior B.", "JRB", ["ZAG"], 81, "Forca"),
          p("br98-rc", 6, "R. Carlos", "R.C", ["LE"], 89, "Foguete"),
          p("br98-taf", 1, "Taffarel", "TAF", ["GOL"], 86, "Penalti")
        ]
      },
      {
        key: "hr-2018",
        country: "Croacia",
        code: "HR",
        year: 2018,
        style: "Finalista",
        players: [
          p("hr18-man", 17, "Mandzukic", "MAN", ["CA"], 86, "Garra"),
          p("hr18-per", 4, "Perisic", "PER", ["PE", "PD"], 86, "Decisivo"),
          p("hr18-reb", 18, "Rebic", "REB", ["PD", "CA"], 80, "Pressao"),
          p("hr18-mod", 10, "Modric", "MOD", ["MC", "MEI"], 94, "Maestro"),
          p("hr18-rak", 7, "Rakitic", "RAK", ["MC", "VOL"], 87, "Passe"),
          p("hr18-bro", 11, "Brozovic", "BRO", ["VOL"], 84, "Base"),
          p("hr18-vrs", 2, "Vrsaljko", "VRS", ["LD"], 80, "Apoio"),
          p("hr18-lov", 6, "Lovren", "LOV", ["ZAG"], 80, "Casca"),
          p("hr18-vid", 21, "Vida", "VID", ["ZAG"], 80, "Firme"),
          p("hr18-str", 3, "Strinic", "STR", ["LE"], 77, "Seguro"),
          p("hr18-sub", 23, "Subasic", "SUB", ["GOL"], 84, "Penalti")
        ]
      },
      {
        key: "eng-1986",
        country: "Inglaterra",
        code: "EN",
        year: 1986,
        style: "Artilharia",
        players: [
          p("eng86-lin", 10, "Lineker", "LIN", ["CA"], 90, "Artilheiro"),
          p("eng86-bea", 19, "Beardsley", "BEA", ["CA", "MEI"], 82, "Movel"),
          p("eng86-wad", 11, "Waddle", "WAD", ["PE", "PD"], 82, "Drible"),
          p("eng86-hod", 8, "Hoddle", "HOD", ["MC", "MEI"], 85, "Passe"),
          p("eng86-rob", 7, "Robson", "ROB", ["MC"], 86, "Capitao"),
          p("eng86-wil", 4, "Wilkins", "WIL", ["VOL", "MC"], 80, "Ritmo"),
          p("eng86-ste", 2, "Stevens", "STE", ["LD"], 79, "Apoio"),
          p("eng86-but", 6, "Butcher", "BUT", ["ZAG"], 83, "Raiz"),
          p("eng86-fen", 5, "Fenwick", "FEN", ["ZAG"], 76, "Firme"),
          p("eng86-san", 3, "Sansom", "SAN", ["LE"], 80, "Seguro"),
          p("eng86-shi", 1, "Shilton", "SHI", ["GOL"], 87, "Lenda")
        ]
      },
      {
        key: "fr-2022",
        country: "Franca",
        code: "FR",
        year: 2022,
        style: "Finalista",
        players: [
          p("fr22-mba", 10, "Mbappe", "MBA", ["PE", "CA"], 97, "Raio"),
          p("fr22-gir", 9, "Giroud", "GIR", ["CA"], 84, "Pivo"),
          p("fr22-dem", 11, "Dembele", "DEM", ["PD"], 82, "Arranque"),
          p("fr22-gri", 7, "Griezmann", "GRI", ["MEI", "MC"], 90, "Cerebro"),
          p("fr22-tch", 8, "Tchouameni", "TCH", ["VOL", "MC"], 84, "Base"),
          p("fr22-rab", 14, "Rabiot", "RAB", ["MC"], 82, "Equilibrio"),
          p("fr22-kou", 5, "Kounde", "KOU", ["LD", "ZAG"], 82, "Versatil"),
          p("fr22-var", 4, "Varane", "VAR", ["ZAG"], 86, "Classe"),
          p("fr22-upa", 18, "Upamecano", "UPA", ["ZAG"], 84, "Forca"),
          p("fr22-the", 22, "Theo H.", "THE", ["LE"], 85, "Apoio"),
          p("fr22-llo", 1, "Lloris", "LLO", ["GOL"], 85, "Capitao")
        ]
      },
      {
        key: "ar-2014",
        country: "Argentina",
        code: "AR",
        year: 2014,
        style: "Finalista",
        players: [
          p("ar14-mes", 10, "Messi", "MES", ["PD", "MEI"], 97, "Genio"),
          p("ar14-hig", 9, "Higuain", "HIG", ["CA"], 86, "Area"),
          p("ar14-agu", 20, "Aguero", "AGU", ["CA"], 87, "Explosao"),
          p("ar14-dim", 7, "Di Maria", "DIM", ["PE", "MC"], 88, "Motor"),
          p("ar14-mas", 14, "Mascherano", "MAS", ["VOL"], 89, "Lider"),
          p("ar14-big", 6, "Biglia", "BIG", ["MC", "VOL"], 80, "Ritmo"),
          p("ar14-zab", 4, "Zabaleta", "ZAB", ["LD"], 82, "Apoio"),
          p("ar14-gar", 2, "Garay", "GAR", ["ZAG"], 82, "Firme"),
          p("ar14-dem", 15, "Demichelis", "DEM", ["ZAG"], 80, "Experiente"),
          p("ar14-roj", 16, "Rojo", "ROJ", ["LE", "ZAG"], 78, "Choque"),
          p("ar14-rom", 1, "Romero", "ROM", ["GOL"], 82, "Penalti")
        ]
      },
      {
        key: "nl-2010",
        country: "Holanda",
        code: "NL",
        year: 2010,
        style: "Finalista",
        players: [
          p("nl10-rob", 11, "Robben", "ROB", ["PD", "PE"], 91, "Corte"),
          p("nl10-van", 9, "Van Persie", "V.P", ["CA"], 87, "Canhoto"),
          p("nl10-kuy", 7, "Kuyt", "KUY", ["PD", "CA"], 82, "Trabalho"),
          p("nl10-sne", 10, "Sneijder", "SNE", ["MEI"], 91, "Passe"),
          p("nl10-vdv", 23, "Van der Vaart", "VDV", ["MC", "MEI"], 84, "Tecnico"),
          p("nl10-vanb", 6, "Van Bommel", "BOM", ["VOL"], 83, "Casca"),
          p("nl10-gre", 2, "Van der Wiel", "VDW", ["LD"], 79, "Apoio"),
          p("nl10-hei", 3, "Heitinga", "HEI", ["ZAG"], 80, "Firme"),
          p("nl10-mat", 4, "Mathijsen", "MAT", ["ZAG"], 80, "Seguro"),
          p("nl10-gio", 5, "Gio", "GIO", ["LE"], 82, "Capitao"),
          p("nl10-ste", 1, "Stekelenburg", "STE", ["GOL"], 83, "Reflexo")
        ]
      },
      {
        key: "fr-2026", country: "Franca", code: "FR", year: 2026, style: "Nova geracao",
        players: [
          p("fr26-mba", 10, "Mbappe", "MBA", ["CA","PE"], 96, "Craque"),
          p("fr26-gri", 7, "Griezmann", "GRI", ["MEI"], 88, "Cerebro"),
          p("fr26-tch", 8, "Tchouameni", "TCH", ["VOL"], 86, "Muralha"),
          p("fr26-cam", 6, "Camavinga", "CAM", ["MC","VOL"], 84, "Motor"),
          p("fr26-sal", 17, "Saliba", "SAL", ["ZAG"], 86, "Seguro"),
          p("fr26-upa", 4, "Upamecano", "UPA", ["ZAG"], 83, "Forte"),
          p("fr26-her", 22, "T. Hernandez", "HER", ["LE"], 85, "Foguete"),
          p("fr26-kou", 5, "Kounde", "KOU", ["LD"], 84, "Solido"),
          p("fr26-dem", 11, "Dembele", "DEM", ["PD"], 86, "Drible"),
          p("fr26-kol", 9, "Kolo Muani", "KOL", ["CA"], 81, "Area"),
          p("fr26-mai", 16, "Maignan", "MAI", ["GOL"], 87, "Paredao")
        ]
      },
      {
        key: "ar-2026", country: "Argentina", code: "AR", year: 2026, style: "Campea vigente",
        players: [
          p("ar26-mes", 10, "Messi", "MES", ["MEI","PD"], 93, "Genio"),
          p("ar26-alv", 9, "J. Alvarez", "ALV", ["CA"], 87, "Faro"),
          p("ar26-mar", 22, "L. Martinez", "LAU", ["CA"], 85, "Matador"),
          p("ar26-mac", 20, "Mac Allister", "MAC", ["MC"], 87, "Classe"),
          p("ar26-dep", 7, "De Paul", "DEP", ["MC"], 83, "Guerreiro"),
          p("ar26-enz", 24, "E. Fernandez", "ENZ", ["VOL"], 84, "Regista"),
          p("ar26-mol", 26, "Molina", "MOL", ["LD"], 80, "Apoio"),
          p("ar26-tag", 3, "Tagliafico", "TAG", ["LE"], 79, "Firme"),
          p("ar26-rom", 13, "C. Romero", "ROM", ["ZAG"], 86, "Xerife"),
          p("ar26-ota", 19, "Otamendi", "OTA", ["ZAG"], 81, "Experiente"),
          p("ar26-dib", 23, "E. Martinez", "DIB", ["GOL"], 88, "Gigante")
        ]
      },
      {
        key: "br-2026", country: "Brasil", code: "BR", year: 2026, style: "Renovacao",
        players: [
          p("br26-vin", 7, "Vinicius Jr", "VIN", ["PE"], 90, "Craque"),
          p("br26-rod", 10, "Rodrygo", "ROD", ["PD","MEI"], 86, "Talento"),
          p("br26-rap", 11, "Raphinha", "RAP", ["PD"], 87, "Explosao"),
          p("br26-end", 9, "Endrick", "END", ["CA"], 81, "Joia"),
          p("br26-bru", 8, "Bruno Guimaraes", "BGM", ["VOL","MC"], 85, "Motor"),
          p("br26-cas", 5, "Casemiro", "CAS", ["VOL"], 81, "Escudo"),
          p("br26-mqs", 4, "Marquinhos", "MQS", ["ZAG"], 87, "Capitao"),
          p("br26-mil", 3, "E. Militao", "MIL", ["ZAG"], 84, "Veloz"),
          p("br26-dan", 2, "Danilo", "DAN", ["LD"], 79, "Lider"),
          p("br26-ara", 6, "Arana", "ARA", ["LE"], 78, "Apoio"),
          p("br26-ali", 1, "Alisson", "ALI", ["GOL"], 88, "Paredao")
        ]
      },
      {
        key: "es-2026", country: "Espanha", code: "ES", year: 2026, style: "Toque",
        players: [
          p("es26-rod", 16, "Rodri", "ROD", ["VOL"], 90, "Maestro"),
          p("es26-ped", 8, "Pedri", "PED", ["MC"], 88, "Batuta"),
          p("es26-gav", 9, "Gavi", "GAV", ["MC"], 83, "Raca"),
          p("es26-yam", 19, "Lamine Yamal", "YAM", ["PD"], 87, "Fenomeno"),
          p("es26-nic", 17, "Nico Williams", "NIC", ["PE"], 85, "Velocidade"),
          p("es26-olm", 10, "Dani Olmo", "OLM", ["MEI"], 84, "Criacao"),
          p("es26-mor", 7, "Morata", "MOR", ["CA"], 81, "Referencia"),
          p("es26-len", 3, "Le Normand", "LEN", ["ZAG"], 82, "Seguro"),
          p("es26-lap", 24, "Laporte", "LAP", ["ZAG"], 82, "Saida"),
          p("es26-car", 2, "Carvajal", "CAR", ["LD"], 83, "Motor"),
          p("es26-uni", 23, "Unai Simon", "UNI", ["GOL"], 84, "Confiavel")
        ]
      },
      {
        key: "pt-2026", country: "Portugal", code: "PT", year: 2026, style: "Geracao de ouro",
        players: [
          p("pt26-bru", 8, "Bruno Fernandes", "BRU", ["MEI"], 88, "Maestro"),
          p("pt26-ber", 20, "Bernardo Silva", "BER", ["MC"], 87, "Magia"),
          p("pt26-vit", 6, "Vitinha", "VIT", ["MC","VOL"], 85, "Motor"),
          p("pt26-rub", 4, "Ruben Dias", "RUB", ["ZAG"], 87, "Muralha"),
          p("pt26-pep", 3, "Pepe", "PEP", ["ZAG"], 79, "Veterano"),
          p("pt26-can", 2, "Cancelo", "CAN", ["LD"], 84, "Ala"),
          p("pt26-nmn", 5, "Nuno Mendes", "NMN", ["LE"], 84, "Foguete"),
          p("pt26-lea", 15, "Leao", "LEA", ["PE"], 85, "Drible"),
          p("pt26-jot", 21, "Diogo Jota", "JOT", ["CA"], 84, "Faro"),
          p("pt26-cr7", 7, "Cristiano Ronaldo", "CR7", ["CA"], 84, "Lenda"),
          p("pt26-cos", 22, "Diogo Costa", "COS", ["GOL"], 84, "Reflexo")
        ]
      },
      {
        key: "en-2026", country: "Inglaterra", code: "EN", year: 2026, style: "Nova onda",
        players: [
          p("en26-bel", 10, "Bellingham", "BEL", ["MEI"], 90, "Craque"),
          p("en26-fod", 11, "Foden", "FOD", ["MEI"], 87, "Talento"),
          p("en26-sak", 7, "Saka", "SAK", ["PD"], 87, "Explosao"),
          p("en26-kan", 9, "Kane", "KAN", ["CA"], 90, "Artilheiro"),
          p("en26-ric", 4, "Rice", "RIC", ["VOL"], 87, "Pulmao"),
          p("en26-pal", 20, "Palmer", "PAL", ["MEI","PE"], 85, "Frieza"),
          p("en26-sto", 5, "Stones", "STO", ["ZAG"], 85, "Elegante"),
          p("en26-mag", 6, "Maguire", "MAG", ["ZAG"], 79, "Forte"),
          p("en26-wal", 2, "Walker", "WAL", ["LD"], 81, "Veloz"),
          p("en26-sha", 3, "Shaw", "SHA", ["LE"], 80, "Apoio"),
          p("en26-pic", 1, "Pickford", "PIC", ["GOL"], 83, "Reflexo")
        ]
      },
      {
        key: "de-2026", country: "Alemanha", code: "DE", year: 2026, style: "Reconstrucao",
        players: [
          p("de26-mus", 10, "Musiala", "MUS", ["MEI"], 88, "Magia"),
          p("de26-wir", 17, "Wirtz", "WIR", ["MEI"], 87, "Talento"),
          p("de26-kim", 6, "Kimmich", "KIM", ["LD","VOL"], 85, "Lider"),
          p("de26-gun", 21, "Gundogan", "GUN", ["MC"], 83, "Classe"),
          p("de26-rud", 2, "Rudiger", "RUD", ["ZAG"], 85, "Duro"),
          p("de26-tah", 4, "Tah", "TAH", ["ZAG"], 82, "Seguro"),
          p("de26-rau", 3, "Raum", "RAU", ["LE"], 78, "Apoio"),
          p("de26-san", 19, "Sane", "SAN", ["PD"], 83, "Velocidade"),
          p("de26-gna", 7, "Gnabry", "GNA", ["PE"], 81, "Movimento"),
          p("de26-hav", 9, "Havertz", "HAV", ["CA"], 83, "Versatil"),
          p("de26-ter", 1, "Ter Stegen", "TER", ["GOL"], 86, "Paredao")
        ]
      },
      {
        key: "nl-2026", country: "Holanda", code: "NL", year: 2026, style: "Laranja jovem",
        players: [
          p("nl26-vdj", 4, "Van Dijk", "VDJ", ["ZAG"], 87, "Capitao"),
          p("nl26-fdj", 21, "F. de Jong", "FDJ", ["MC"], 86, "Elegante"),
          p("nl26-xav", 7, "Xavi Simons", "XAV", ["MEI"], 84, "Talento"),
          p("nl26-gak", 11, "Gakpo", "GAK", ["PE"], 84, "Potencia"),
          p("nl26-rei", 14, "Reijnders", "REI", ["MC"], 82, "Motor"),
          p("nl26-dep", 10, "Depay", "DEP", ["CA"], 82, "Faro"),
          p("nl26-mal", 18, "Malen", "MAL", ["PD"], 80, "Veloz"),
          p("nl26-dli", 3, "De Ligt", "DLI", ["ZAG"], 83, "Forte"),
          p("nl26-dum", 22, "Dumfries", "DUM", ["LD"], 81, "Ala"),
          p("nl26-ake", 5, "Ake", "AKE", ["LE"], 81, "Solido"),
          p("nl26-ver", 1, "Verbruggen", "VER", ["GOL"], 81, "Jovem")
        ]
      },
      {
        key: "be-2026", country: "Belgica", code: "BE", year: 2026, style: "Fim de ciclo",
        players: [
          p("be26-kdb", 7, "De Bruyne", "KDB", ["MEI"], 90, "Genio"),
          p("be26-luk", 9, "Lukaku", "LUK", ["CA"], 85, "Matador"),
          p("be26-dok", 11, "Doku", "DOK", ["PE"], 82, "Drible"),
          p("be26-tro", 17, "Trossard", "TRO", ["PD"], 81, "Faro"),
          p("be26-tie", 8, "Tielemans", "TIE", ["MC"], 82, "Passe"),
          p("be26-ona", 15, "A. Onana", "ONA", ["VOL"], 80, "Musculo"),
          p("be26-wit", 6, "Witsel", "WIT", ["ZAG","VOL"], 78, "Experiente"),
          p("be26-fae", 4, "Faes", "FAE", ["ZAG"], 77, "Firme"),
          p("be26-cas", 21, "Castagne", "CST", ["LD"], 78, "Ala"),
          p("be26-the", 3, "Theate", "THE", ["LE"], 76, "Apoio"),
          p("be26-cou", 1, "Courtois", "COU", ["GOL"], 88, "Gigante")
        ]
      },
      {
        key: "ec-2026", country: "Equador", code: "EC", year: 2026, style: "Estreante forte",
        players: [
          p("ec26-cai", 23, "Caicedo", "CAI", ["VOL"], 85, "Motor"),
          p("ec26-val", 13, "E. Valencia", "VAL", ["CA"], 81, "Artilheiro"),
          p("ec26-est", 7, "Estupinan", "EST", ["LE"], 80, "Ala"),
          p("ec26-hin", 3, "Hincapie", "HIN", ["ZAG"], 80, "Seguro"),
          p("ec26-tor", 4, "F. Torres", "TOR", ["ZAG"], 77, "Firme"),
          p("ec26-pre", 17, "Preciado", "PRE", ["LD"], 76, "Apoio"),
          p("ec26-pla", 11, "Plata", "PLA", ["PD"], 78, "Veloz"),
          p("ec26-pae", 20, "K. Paez", "PAE", ["MEI"], 78, "Joia"),
          p("ec26-sar", 8, "Sarmiento", "SAR", ["MC"], 75, "Trabalho"),
          p("ec26-men", 22, "Mena", "MEN", ["PE"], 74, "Correria"),
          p("ec26-gal", 1, "Galindez", "GAL", ["GOL"], 77, "Seguro")
        ]
      },
      {
        key: "br-2022", country: "Brasil", code: "BR", year: 2022, style: "Selecao dos sonhos",
        players: [
          p("br22-ney", 10, "Neymar", "NEY", ["MEI","PE"], 90, "Craque"),
          p("br22-vin", 20, "Vinicius Jr", "VIN", ["PE"], 86, "Drible"),
          p("br22-ric", 9, "Richarlison", "RIC", ["CA"], 83, "Faro"),
          p("br22-rap", 19, "Raphinha", "RAP", ["PD"], 84, "Explosao"),
          p("br22-cas", 5, "Casemiro", "CAS", ["VOL"], 85, "Escudo"),
          p("br22-paq", 7, "Paqueta", "PAQ", ["MC","MEI"], 82, "Chegada"),
          p("br22-mqs", 4, "Marquinhos", "MQS", ["ZAG"], 87, "Capitao"),
          p("br22-tsi", 3, "Thiago Silva", "TSI", ["ZAG"], 84, "Monstro"),
          p("br22-dan", 2, "Danilo", "DAN", ["LD"], 80, "Versatil"),
          p("br22-asa", 6, "Alex Sandro", "ASA", ["LE"], 80, "Apoio"),
          p("br22-ali", 1, "Alisson", "ALI", ["GOL"], 88, "Paredao")
        ]
      },
      {
        key: "hr-2022", country: "Croacia", code: "HR", year: 2022, style: "Bronze em Doha",
        players: [
          p("hr22-mod", 10, "Modric", "MOD", ["MEI"], 88, "Maestro"),
          p("hr22-kov", 8, "Kovacic", "KOV", ["MC"], 84, "Conducao"),
          p("hr22-bro", 11, "Brozovic", "BRO", ["VOL"], 83, "Pendulo"),
          p("hr22-per", 4, "Perisic", "PER", ["PE"], 83, "Potencia"),
          p("hr22-kra", 9, "Kramaric", "KRA", ["CA"], 81, "Faro"),
          p("hr22-pas", 15, "Pasalic", "PAS", ["MEI"], 78, "Chegada"),
          p("hr22-gva", 20, "Gvardiol", "GVA", ["ZAG"], 84, "Fenomeno"),
          p("hr22-lov", 6, "Lovren", "LOV", ["ZAG"], 78, "Experiente"),
          p("hr22-jur", 22, "Juranovic", "JUR", ["LD"], 78, "Ala"),
          p("hr22-sos", 19, "Sosa", "SOS", ["LE"], 76, "Apoio"),
          p("hr22-liv", 1, "Livakovic", "LIV", ["GOL"], 84, "Herói dos penaltis")
        ]
      },
      {
        key: "pt-2022", country: "Portugal", code: "PT", year: 2022, style: "Talento de sobra",
        players: [
          p("pt22-bru", 8, "Bruno Fernandes", "BRU", ["MEI"], 87, "Maestro"),
          p("pt22-ber", 10, "Bernardo Silva", "BER", ["MC"], 86, "Magia"),
          p("pt22-rne", 18, "Ruben Neves", "RNE", ["VOL"], 80, "Passe"),
          p("pt22-rub", 3, "Ruben Dias", "RUB", ["ZAG"], 86, "Muralha"),
          p("pt22-pep", 6, "Pepe", "PEP", ["ZAG"], 80, "Veterano"),
          p("pt22-can", 20, "Cancelo", "CAN", ["LD"], 84, "Ala"),
          p("pt22-nmn", 5, "Nuno Mendes", "NMN", ["LE"], 82, "Foguete"),
          p("pt22-lea", 15, "Leao", "LEA", ["PE"], 82, "Drible"),
          p("pt22-fel", 11, "Joao Felix", "FEL", ["CA","MEI"], 81, "Talento"),
          p("pt22-cr7", 7, "Cristiano Ronaldo", "CR7", ["CA"], 84, "Lenda"),
          p("pt22-cos", 22, "Diogo Costa", "COS", ["GOL"], 82, "Reflexo")
        ]
      },
      {
        key: "sn-2022", country: "Senegal", code: "SN", year: 2022, style: "Campea africana",
        players: [
          p("sn22-man", 10, "Sadio Mane", "MAN", ["PE","CA"], 85, "Craque"),
          p("sn22-kou", 3, "Koulibaly", "KOU", ["ZAG"], 84, "Capitao"),
          p("sn22-gue", 5, "I. Gueye", "GUE", ["VOL"], 81, "Motor"),
          p("sn22-sar", 18, "I. Sarr", "SAR", ["PD"], 80, "Velocidade"),
          p("sn22-dia", 9, "B. Dia", "DIA", ["CA"], 77, "Area"),
          p("sn22-kyt", 8, "Kouyate", "KYT", ["MC"], 77, "Trabalho"),
          p("sn22-nam", 6, "N. Mendy", "NAM", ["MC"], 75, "Marcacao"),
          p("sn22-pac", 21, "P. A. Cisse", "PAC", ["ZAG"], 75, "Firme"),
          p("sn22-sab", 22, "Sabaly", "SAB", ["LD"], 76, "Ala"),
          p("sn22-jak", 12, "Jakobs", "JAK", ["LE"], 74, "Apoio"),
          p("sn22-men", 16, "E. Mendy", "MEN", ["GOL"], 83, "Paredao")
        ]
      },
      {
        key: "kr-2022", country: "Coreia do Sul", code: "KR", year: 2022, style: "Coracao guerreiro",
        players: [
          p("kr22-son", 7, "Son Heung-min", "SON", ["PE","CA"], 85, "Craque"),
          p("kr22-kmj", 3, "Kim Min-jae", "KMJ", ["ZAG"], 83, "Monstro"),
          p("kr22-lki", 18, "Lee Kang-in", "LKI", ["MEI"], 79, "Talento"),
          p("kr22-hhc", 11, "Hwang Hee-chan", "HHC", ["CA"], 78, "Veloz"),
          p("kr22-hib", 13, "Hwang In-beom", "HIB", ["MC"], 77, "Passe"),
          p("kr22-jwy", 15, "Jung Woo-young", "JWY", ["VOL"], 75, "Escudo"),
          p("kr22-kch", 22, "Kwon Chang-hoon", "KCH", ["MEI"], 74, "Chegada"),
          p("kr22-kyg", 19, "Kim Young-gwon", "KYG", ["ZAG"], 76, "Seguro"),
          p("kr22-kmh", 2, "Kim Moon-hwan", "KMH", ["LD"], 73, "Ala"),
          p("kr22-kjs", 12, "Kim Jin-su", "KJS", ["LE"], 74, "Apoio"),
          p("kr22-ksg", 1, "Kim Seung-gyu", "KSG", ["GOL"], 77, "Reflexo")
        ]
      },
      {
        key: "rs-2022", country: "Servia", code: "RS", year: 2022, style: "Ataque pesado",
        players: [
          p("rs22-sms", 20, "S. Milinkovic-Savic", "SMS", ["MC"], 84, "Completo"),
          p("rs22-tad", 10, "Tadic", "TAD", ["MEI"], 82, "Cerebro"),
          p("rs22-mit", 9, "Mitrovic", "MIT", ["CA"], 82, "Matador"),
          p("rs22-vla", 18, "Vlahovic", "VLA", ["CA"], 82, "Potencia"),
          p("rs22-kos", 11, "Kostic", "KOS", ["LE"], 80, "Cruzamento"),
          p("rs22-gud", 13, "Gudelj", "GUD", ["VOL"], 76, "Equilibrio"),
          p("rs22-mln", 4, "Milenkovic", "MLN", ["ZAG"], 79, "Forte"),
          p("rs22-pav", 5, "Pavlovic", "PAV", ["ZAG"], 76, "Fisico"),
          p("rs22-laz", 17, "Lazovic", "LAZ", ["LD"], 75, "Ala"),
          p("rs22-ziv", 7, "Zivkovic", "ZIV", ["PD"], 76, "Drible"),
          p("rs22-vms", 23, "V. Milinkovic-Savic", "VMS", ["GOL"], 76, "Gigante")
        ]
      },
      {
        key: "ec-2022", country: "Equador", code: "EC", year: 2022, style: "Jovens da altitude",
        players: [
          p("ec22-val", 13, "E. Valencia", "VAL", ["CA"], 82, "Artilheiro"),
          p("ec22-cai", 23, "Caicedo", "CAI", ["VOL"], 82, "Motor"),
          p("ec22-est", 7, "Estupinan", "EST", ["LE"], 79, "Ala"),
          p("ec22-hin", 3, "Hincapie", "HIN", ["ZAG"], 79, "Seguro"),
          p("ec22-tor", 4, "F. Torres", "TOR", ["ZAG"], 77, "Firme"),
          p("ec22-pre", 17, "Preciado", "PRE", ["LD"], 75, "Apoio"),
          p("ec22-pla", 11, "Plata", "PLA", ["PD"], 77, "Veloz"),
          p("ec22-iba", 16, "Ibarra", "IBA", ["MEI"], 75, "Drible"),
          p("ec22-fra", 6, "Franco", "FRA", ["MC"], 75, "Trabalho"),
          p("ec22-men", 22, "Mena", "MEN", ["PE"], 74, "Correria"),
          p("ec22-gal", 1, "Galindez", "GAL", ["GOL"], 76, "Seguro")
        ]
      },
      {
        key: "jp-2022", country: "Japao", code: "JP", year: 2022, style: "Samurais ousados",
        players: [
          p("jp22-kub", 8, "Kubo", "KUB", ["PD"], 80, "Talento"),
          p("jp22-mit", 9, "Mitoma", "MIT", ["PE"], 81, "Drible"),
          p("jp22-kam", 15, "Kamada", "KAM", ["MEI"], 80, "Criacao"),
          p("jp22-end", 6, "W. Endo", "END", ["VOL"], 80, "Escudo"),
          p("jp22-mor", 17, "Morita", "MOR", ["MC"], 77, "Passe"),
          p("jp22-asa", 18, "Asano", "ASA", ["CA"], 76, "Veloz"),
          p("jp22-yos", 22, "Yoshida", "YOS", ["ZAG"], 78, "Capitao"),
          p("jp22-ita", 3, "Itakura", "ITA", ["ZAG"], 78, "Seguro"),
          p("jp22-tom", 16, "Tomiyasu", "TOM", ["LD"], 80, "Versatil"),
          p("jp22-nag", 5, "Nagatomo", "NAG", ["LE"], 74, "Experiente"),
          p("jp22-gon", 12, "Gonda", "GON", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "ma-2022", country: "Marrocos", code: "MA", year: 2022, style: "Semifinalista historica",
        players: [
          p("ma22-hak", 2, "Hakimi", "HAK", ["LD"], 84, "Foguete"),
          p("ma22-ziy", 7, "Ziyech", "ZIY", ["MEI"], 81, "Magia"),
          p("ma22-ame", 4, "S. Amrabat", "AME", ["VOL"], 82, "Pulmao"),
          p("ma22-oun", 8, "Ounahi", "OUN", ["MC"], 78, "Revelacao"),
          p("ma22-bou", 17, "Boufal", "BOU", ["PE"], 78, "Drible"),
          p("ma22-enn", 19, "En-Nesyri", "ENN", ["CA"], 79, "Cabeceio"),
          p("ma22-agu", 6, "Aguerd", "AGU", ["ZAG"], 78, "Solido"),
          p("ma22-sai", 5, "Saiss", "SAI", ["ZAG"], 77, "Capitao"),
          p("ma22-maz", 3, "Mazraoui", "MAZ", ["LE"], 78, "Ala"),
          p("ma22-att", 21, "Attiat-Allah", "ATT", ["LE"], 73, "Apoio"),
          p("ma22-bon", 1, "Bounou", "BON", ["GOL"], 83, "Paredao")
        ]
      },
      {
        key: "cr-2022", country: "Costa Rica", code: "CR", year: 2022, style: "Muralha tica",
        players: [
          p("cr22-nav", 1, "Keylor Navas", "NAV", ["GOL"], 82, "Paredao"),
          p("cr22-cam", 12, "J. Campbell", "CAM", ["MEI"], 76, "Experiente"),
          p("cr22-ful", 21, "Fuller", "FUL", ["PD"], 75, "Veloz"),
          p("cr22-bor", 5, "C. Borges", "BOR", ["MC"], 74, "Passe"),
          p("cr22-tej", 17, "Tejeda", "TEJ", ["VOL"], 74, "Marcacao"),
          p("cr22-var", 9, "K. Vargas", "VAR", ["CA"], 74, "Area"),
          p("cr22-dua", 6, "O. Duarte", "DUA", ["ZAG"], 74, "Firme"),
          p("cr22-was", 19, "Waston", "WAS", ["ZAG"], 73, "Fisico"),
          p("cr22-mar", 15, "F. Calvo", "CAL", ["LD"], 73, "Ala"),
          p("cr22-ovi", 8, "Oviedo", "OVI", ["LE"], 73, "Apoio"),
          p("cr22-con", 3, "Contreras", "CON", ["MC"], 72, "Trabalho")
        ]
      },
      {
        key: "au-2022", country: "Australia", code: "AU", year: 2022, style: "Socceroos raca",
        players: [
          p("au22-goo", 11, "Goodwin", "GOO", ["PE"], 74, "Drible"),
          p("au22-lec", 7, "Leckie", "LEC", ["PD"], 76, "Veloz"),
          p("au22-moo", 13, "Mooy", "MOO", ["MC"], 78, "Cerebro"),
          p("au22-irv", 22, "Irvine", "IRV", ["VOL"], 74, "Motor"),
          p("au22-mcg", 17, "McGree", "MCG", ["MEI"], 74, "Chegada"),
          p("au22-duk", 15, "Duke", "DUK", ["CA"], 74, "Cabeceio"),
          p("au22-sou", 19, "H. Souttar", "SOU", ["ZAG"], 76, "Torre"),
          p("au22-row", 5, "Rowles", "ROW", ["ZAG"], 73, "Firme"),
          p("au22-kar", 2, "Karacic", "KAR", ["LD"], 72, "Ala"),
          p("au22-beh", 3, "Behich", "BEH", ["LE"], 73, "Apoio"),
          p("au22-rya", 1, "M. Ryan", "RYA", ["GOL"], 76, "Capitao")
        ]
      },
      {
        key: "es-2018", country: "Espanha", code: "ES", year: 2018, style: "Tiki-taka tardio",
        players: [
          p("es18-isc", 22, "Isco", "ISC", ["MEI"], 85, "Magia"),
          p("es18-sil", 21, "David Silva", "SIL", ["MEI"], 85, "Criacao"),
          p("es18-bus", 5, "Busquets", "BUS", ["VOL"], 85, "Metronomo"),
          p("es18-kok", 8, "Koke", "KOK", ["MC"], 82, "Motor"),
          p("es18-ase", 20, "Asensio", "ASE", ["PD"], 80, "Talento"),
          p("es18-ram", 15, "Sergio Ramos", "RAM", ["ZAG"], 88, "Capitao"),
          p("es18-piq", 3, "Pique", "PIQ", ["ZAG"], 86, "Saida"),
          p("es18-car", 2, "Carvajal", "CAR", ["LD"], 82, "Ala"),
          p("es18-alb", 18, "Jordi Alba", "ALB", ["LE"], 84, "Foguete"),
          p("es18-cos", 19, "Diego Costa", "COS", ["CA"], 82, "Guerreiro"),
          p("es18-dge", 1, "De Gea", "DGE", ["GOL"], 86, "Reflexo")
        ]
      },
      {
        key: "br-2018", country: "Brasil", code: "BR", year: 2018, style: "Selecao do Tite",
        players: [
          p("br18-ney", 10, "Neymar", "NEY", ["PE"], 90, "Craque"),
          p("br18-cou", 11, "Coutinho", "COU", ["MEI"], 85, "Magia"),
          p("br18-jes", 9, "G. Jesus", "JES", ["CA"], 82, "Movimento"),
          p("br18-wil", 19, "Willian", "WIL", ["PD"], 81, "Drible"),
          p("br18-cas", 5, "Casemiro", "CAS", ["VOL"], 84, "Escudo"),
          p("br18-pau", 15, "Paulinho", "PAU", ["MC"], 80, "Chegada"),
          p("br18-tsi", 3, "Thiago Silva", "TSI", ["ZAG"], 85, "Muralha"),
          p("br18-mir", 2, "Miranda", "MIR", ["ZAG"], 82, "Firme"),
          p("br18-fag", 22, "Fagner", "FAG", ["LD"], 78, "Ala"),
          p("br18-mar", 12, "Marcelo", "MAR", ["LE"], 84, "Apoio"),
          p("br18-ali", 1, "Alisson", "ALI", ["GOL"], 86, "Paredao")
        ]
      },
      {
        key: "ar-2018", country: "Argentina", code: "AR", year: 2018, style: "Messi dependente",
        players: [
          p("ar18-mes", 10, "Messi", "MES", ["MEI"], 94, "Genio"),
          p("ar18-agu", 19, "Aguero", "AGU", ["CA"], 85, "Matador"),
          p("ar18-dim", 11, "Di Maria", "DIM", ["PE"], 83, "Velocidade"),
          p("ar18-hig", 9, "Higuain", "HIG", ["CA"], 81, "Area"),
          p("ar18-ban", 7, "Banega", "BAN", ["MC"], 80, "Passe"),
          p("ar18-mas", 14, "Mascherano", "MAS", ["VOL"], 80, "Lider"),
          p("ar18-ota", 17, "Otamendi", "OTA", ["ZAG"], 82, "Forte"),
          p("ar18-roj", 16, "Rojo", "ROJ", ["ZAG"], 78, "Raca"),
          p("ar18-mer", 4, "Mercado", "MER", ["LD"], 76, "Ala"),
          p("ar18-tag", 3, "Tagliafico", "TAG", ["LE"], 78, "Apoio"),
          p("ar18-arm", 1, "Armani", "ARM", ["GOL"], 78, "Seguro")
        ]
      },
      {
        key: "be-2018", country: "Belgica", code: "BE", year: 2018, style: "Geracao de ouro",
        players: [
          p("be18-haz", 10, "E. Hazard", "HAZ", ["PE"], 89, "Craque"),
          p("be18-kdb", 7, "De Bruyne", "KDB", ["MC"], 89, "Genio"),
          p("be18-luk", 9, "Lukaku", "LUK", ["CA"], 85, "Matador"),
          p("be18-mer", 14, "Mertens", "MER", ["PD"], 82, "Faro"),
          p("be18-wit", 6, "Witsel", "WIT", ["VOL"], 82, "Equilibrio"),
          p("be18-fel", 8, "Fellaini", "FEL", ["MC"], 79, "Chegada"),
          p("be18-ald", 2, "Alderweireld", "ALD", ["ZAG"], 84, "Passe"),
          p("be18-kom", 4, "Kompany", "KOM", ["ZAG"], 83, "Capitao"),
          p("be18-meu", 15, "Meunier", "MEU", ["LD"], 78, "Ala"),
          p("be18-ver", 5, "Vertonghen", "VER", ["LE","ZAG"], 82, "Solido"),
          p("be18-cou", 1, "Courtois", "COU", ["GOL"], 86, "Paredao")
        ]
      },
      {
        key: "co-2018", country: "Colombia", code: "CO", year: 2018, style: "Cafeteros",
        players: [
          p("co18-jam", 10, "James Rodriguez", "JAM", ["MEI"], 85, "Craque"),
          p("co18-fal", 9, "Falcao", "FAL", ["CA"], 81, "Tigre"),
          p("co18-cua", 11, "Cuadrado", "CUA", ["PD"], 80, "Explosao"),
          p("co18-qui", 20, "Quintero", "QUI", ["MEI"], 78, "Passe"),
          p("co18-san", 6, "C. Sanchez", "SAN", ["VOL"], 76, "Escudo"),
          p("co18-agu", 8, "Aguilar", "AGL", ["VOL"], 74, "Marcacao"),
          p("co18-min", 13, "Yerry Mina", "MIN", ["ZAG"], 79, "Cabeceio"),
          p("co18-dvs", 23, "D. Sanchez", "DVS", ["ZAG"], 78, "Firme"),
          p("co18-ari", 4, "S. Arias", "ARI", ["LD"], 76, "Ala"),
          p("co18-moj", 17, "Mojica", "MOJ", ["LE"], 74, "Apoio"),
          p("co18-osp", 1, "Ospina", "OSP", ["GOL"], 80, "Reflexo")
        ]
      },
      {
        key: "uy-2018", country: "Uruguai", code: "UY", year: 2018, style: "Garra charrua",
        players: [
          p("uy18-sua", 9, "Suarez", "SUA", ["CA"], 86, "Matador"),
          p("uy18-cav", 21, "Cavani", "CAV", ["CA"], 85, "Guerreiro"),
          p("uy18-god", 3, "Godin", "GOD", ["ZAG"], 86, "Capitao"),
          p("uy18-gim", 2, "Gimenez", "GIM", ["ZAG"], 82, "Forte"),
          p("uy18-ben", 6, "Bentancur", "BEN", ["MC"], 78, "Conducao"),
          p("uy18-tor", 15, "Torreira", "TOR", ["VOL"], 78, "Pitbull"),
          p("uy18-vec", 5, "Vecino", "VEC", ["MC"], 77, "Chegada"),
          p("uy18-nan", 17, "Nandez", "NAN", ["PD"], 76, "Correria"),
          p("uy18-cac", 22, "Caceres", "CAC", ["LD"], 76, "Ala"),
          p("uy18-lax", 4, "Laxalt", "LAX", ["LE"], 75, "Apoio"),
          p("uy18-mus", 1, "Muslera", "MUS", ["GOL"], 80, "Seguro")
        ]
      },
      {
        key: "en-2018", country: "Inglaterra", code: "EN", year: 2018, style: "Volta a semi",
        players: [
          p("en18-kan", 9, "Kane", "KAN", ["CA"], 87, "Artilheiro"),
          p("en18-ste", 10, "Sterling", "STE", ["PE"], 82, "Velocidade"),
          p("en18-all", 20, "Alli", "ALL", ["MEI"], 80, "Chegada"),
          p("en18-lin", 7, "Lingard", "LIN", ["MEI"], 79, "Movimento"),
          p("en18-hen", 8, "Henderson", "HEN", ["VOL"], 80, "Pulmao"),
          p("en18-ras", 19, "Rashford", "RAS", ["PD"], 80, "Explosao"),
          p("en18-sto", 5, "Stones", "STO", ["ZAG"], 81, "Saida"),
          p("en18-mag", 6, "Maguire", "MAG", ["ZAG"], 80, "Torre"),
          p("en18-tri", 12, "Trippier", "TRI", ["LD"], 79, "Cruzamento"),
          p("en18-you", 18, "Young", "YOU", ["LE"], 76, "Experiente"),
          p("en18-pic", 1, "Pickford", "PIC", ["GOL"], 80, "Reflexo")
        ]
      },
      {
        key: "ma-2018", country: "Marrocos", code: "MA", year: 2018, style: "Leoes do Atlas",
        players: [
          p("ma18-ziy", 7, "Ziyech", "ZIY", ["MEI"], 80, "Magia"),
          p("ma18-bel", 10, "Belhanda", "BEL", ["MC"], 76, "Criacao"),
          p("ma18-nam", 8, "N. Amrabat", "NAM", ["PD"], 75, "Velocidade"),
          p("ma18-bou", 11, "Boussoufa", "BOU", ["PE"], 75, "Passe"),
          p("ma18-ela", 4, "El Ahmadi", "ELA", ["VOL"], 76, "Escudo"),
          p("ma18-ben", 5, "Benatia", "BENA", ["ZAG"], 80, "Capitao"),
          p("ma18-sai", 6, "Saiss", "SAI", ["ZAG"], 76, "Firme"),
          p("ma18-hak", 2, "Hakimi", "HAK", ["LD"], 78, "Foguete"),
          p("ma18-men", 3, "Mendyl", "MEN", ["LE"], 74, "Apoio"),
          p("ma18-bta", 9, "Boutaib", "BTA", ["CA"], 74, "Area"),
          p("ma18-mun", 12, "Munir", "MUN", ["GOL"], 76, "Seguro")
        ]
      },
      {
        key: "pt-2018", country: "Portugal", code: "PT", year: 2018, style: "Campea da Europa",
        players: [
          p("pt18-cr7", 7, "Cristiano Ronaldo", "CR7", ["CA"], 90, "Fenomeno"),
          p("pt18-ber", 10, "Bernardo Silva", "BER", ["MEI"], 82, "Magia"),
          p("pt18-mou", 8, "Moutinho", "MOU", ["MC"], 79, "Passe"),
          p("pt18-wca", 14, "William Carvalho", "WCA", ["VOL"], 78, "Escudo"),
          p("pt18-gue", 5, "R. Guerreiro", "GUE", ["LE"], 78, "Ala"),
          p("pt18-pep", 3, "Pepe", "PEP", ["ZAG"], 82, "Guerreiro"),
          p("pt18-fon", 4, "Jose Fonte", "FON", ["ZAG"], 78, "Seguro"),
          p("pt18-ced", 21, "Cedric", "CED", ["LD"], 76, "Apoio"),
          p("pt18-gde", 17, "Guedes", "GDE", ["PE"], 78, "Velocidade"),
          p("pt18-qua", 20, "Quaresma", "QUA", ["PD"], 76, "Trivela"),
          p("pt18-rui", 1, "Rui Patricio", "RUI", ["GOL"], 82, "Paredao")
        ]
      },
      {
        key: "ch-2018", country: "Suica", code: "CH", year: 2018, style: "Solidez alpina",
        players: [
          p("ch18-sha", 23, "Shaqiri", "SHA", ["PD"], 81, "Canhota"),
          p("ch18-xha", 10, "Xhaka", "XHA", ["MC"], 80, "Passe"),
          p("ch18-sef", 9, "Seferovic", "SEF", ["CA"], 76, "Area"),
          p("ch18-dze", 8, "Dzemaili", "DZE", ["MC"], 75, "Chegada"),
          p("ch18-beh", 11, "Behrami", "BEH", ["VOL"], 75, "Marcacao"),
          p("ch18-rod", 13, "R. Rodriguez", "ROD", ["LE"], 78, "Ala"),
          p("ch18-aka", 5, "Akanji", "AKA", ["ZAG"], 78, "Veloz"),
          p("ch18-sch", 22, "Schar", "SCH", ["ZAG"], 77, "Saida"),
          p("ch18-lic", 2, "Lichtsteiner", "LIC", ["LD"], 77, "Capitao"),
          p("ch18-zub", 7, "Zuber", "ZUB", ["PE"], 74, "Apoio"),
          p("ch18-som", 1, "Sommer", "SOM", ["GOL"], 80, "Reflexo")
        ]
      },
      {
        key: "se-2018", country: "Suecia", code: "SE", year: 2018, style: "Coletivo nordico",
        players: [
          p("se18-for", 10, "Forsberg", "FOR", ["MEI"], 80, "Criacao"),
          p("se18-ber", 9, "M. Berg", "BER", ["CA"], 75, "Area"),
          p("se18-toi", 20, "Toivonen", "TOI", ["CA"], 74, "Pivo"),
          p("se18-ekd", 8, "Ekdal", "EKD", ["VOL"], 75, "Escudo"),
          p("se18-lar", 7, "S. Larsson", "LAR", ["MC"], 75, "Bola parada"),
          p("se18-cla", 21, "Claesson", "CLA", ["PD"], 74, "Correria"),
          p("se18-gra", 4, "Granqvist", "GRA", ["ZAG"], 78, "Capitao"),
          p("se18-lin", 3, "Lindelof", "LIN", ["ZAG"], 78, "Saida"),
          p("se18-lus", 2, "Lustig", "LUS", ["LD"], 76, "Ala"),
          p("se18-aug", 6, "Augustinsson", "AUG", ["LE"], 75, "Apoio"),
          p("se18-ols", 1, "R. Olsen", "OLS", ["GOL"], 78, "Reflexo")
        ]
      },
      {
        key: "jp-2018", country: "Japao", code: "JP", year: 2018, style: "Blue Samurai",
        players: [
          p("jp18-kag", 10, "Kagawa", "KAG", ["MEI"], 79, "Criacao"),
          p("jp18-hon", 4, "Honda", "HON", ["MEI"], 79, "Decisivo"),
          p("jp18-oso", 15, "Osako", "OSO", ["CA"], 75, "Pivo"),
          p("jp18-inu", 14, "Inui", "INU", ["PE"], 76, "Drible"),
          p("jp18-har", 8, "Haraguchi", "HAR", ["PD"], 75, "Correria"),
          p("jp18-shi", 7, "Shibasaki", "SHI", ["MC"], 76, "Passe"),
          p("jp18-has", 17, "Hasebe", "HAS", ["VOL"], 77, "Capitao"),
          p("jp18-yos", 22, "Yoshida", "YOS", ["ZAG"], 78, "Lider"),
          p("jp18-sho", 20, "Shoji", "SHO", ["ZAG"], 74, "Firme"),
          p("jp18-sak", 19, "H. Sakai", "SAK", ["LD"], 77, "Ala"),
          p("jp18-kaw", 12, "Kawashima", "KAW", ["GOL"], 74, "Experiente")
        ]
      },
      {
        key: "ru-2018", country: "Russia", code: "RU", year: 2018, style: "Anfitria surpresa",
        players: [
          p("ru18-gol", 17, "Golovin", "GOL", ["MEI"], 79, "Talento"),
          p("ru18-dzy", 22, "Dzyuba", "DZY", ["CA"], 78, "Pivo"),
          p("ru18-che", 6, "Cheryshev", "CHE", ["PE"], 77, "Chute"),
          p("ru18-zob", 11, "Zobnin", "ZOB", ["VOL"], 75, "Motor"),
          p("ru18-kuz", 7, "Kuzyaev", "KUZ", ["MC"], 74, "Correria"),
          p("ru18-mir", 59, "A. Miranchuk", "MIR", ["MEI"], 74, "Criacao"),
          p("ru18-ign", 4, "Ignashevich", "IGN", ["ZAG"], 76, "Veterano"),
          p("ru18-kut", 2, "Kutepov", "KUT", ["ZAG"], 74, "Firme"),
          p("ru18-fer", 24, "M. Fernandes", "FER", ["LD"], 75, "Ala"),
          p("ru18-zhi", 18, "Zhirkov", "ZHI", ["LE"], 75, "Apoio"),
          p("ru18-aki", 1, "Akinfeev", "AKI", ["GOL"], 80, "Heroi")
        ]
      },
      {
        key: "eg-2018", country: "Egito", code: "EG", year: 2018, style: "Faraos de Salah",
        players: [
          p("eg18-sal", 10, "Salah", "SAL", ["PE","CA"], 87, "Faraó"),
          p("eg18-eln", 17, "Elneny", "ELN", ["VOL"], 76, "Escudo"),
          p("eg18-tre", 22, "Trezeguet", "TRE", ["PD"], 75, "Correria"),
          p("eg18-war", 14, "Warda", "WAR", ["MEI"], 73, "Drible"),
          p("eg18-ham", 8, "T. Hamed", "HAM", ["MC"], 73, "Passe"),
          p("eg18-heg", 6, "Hegazi", "HEG", ["ZAG"], 76, "Torre"),
          p("eg18-gab", 3, "A. Gabr", "GAB", ["ZAG"], 73, "Firme"),
          p("eg18-fat", 2, "Fathy", "FAT", ["LD"], 72, "Ala"),
          p("eg18-abd", 13, "Abdel-Shafy", "ABD", ["LE"], 72, "Apoio"),
          p("eg18-moh", 9, "Mohsen", "MOH", ["CA"], 72, "Area"),
          p("eg18-had", 1, "El-Hadary", "HAD", ["GOL"], 74, "Veterano")
        ]
      },
      {
        key: "kr-2018", country: "Coreia do Sul", code: "KR", year: 2018, style: "Vitoria sobre a Alemanha",
        players: [
          p("kr18-son", 7, "Son Heung-min", "SON", ["PE"], 83, "Craque"),
          p("kr18-ki", 16, "Ki Sung-yueng", "KI", ["MC"], 78, "Cerebro"),
          p("kr18-ljs", 17, "Lee Jae-sung", "LJS", ["MEI"], 75, "Chegada"),
          p("kr18-hhc", 11, "Hwang Hee-chan", "HHC", ["CA"], 74, "Veloz"),
          p("kr18-jwy", 15, "Jung Woo-young", "JWY", ["VOL"], 73, "Escudo"),
          p("kr18-koo", 13, "Koo Ja-cheol", "KOO", ["MEI"], 74, "Chegada"),
          p("kr18-kyg", 5, "Kim Young-gwon", "KYG", ["ZAG"], 75, "Firme"),
          p("kr18-jhs", 20, "Jang Hyun-soo", "JHS", ["ZAG"], 73, "Seguro"),
          p("kr18-lyo", 2, "Lee Yong", "LYO", ["LD"], 72, "Ala"),
          p("kr18-hon", 14, "Hong Chul", "HON", ["LE"], 72, "Apoio"),
          p("kr18-cho", 21, "Cho Hyun-woo", "CHO", ["GOL"], 78, "Muralha")
        ]
      },
      {
        key: "br-2014", country: "Brasil", code: "BR", year: 2014, style: "Anfitria do 7x1",
        players: [
          p("br14-ney", 10, "Neymar", "NEY", ["PE"], 87, "Craque"),
          p("br14-osc", 11, "Oscar", "OSC", ["MEI"], 82, "Criacao"),
          p("br14-hul", 7, "Hulk", "HUL", ["PD"], 80, "Potencia"),
          p("br14-fre", 9, "Fred", "FRE", ["CA"], 76, "Pivo"),
          p("br14-pau", 18, "Paulinho", "PAU", ["MC"], 79, "Chegada"),
          p("br14-lgu", 17, "Luiz Gustavo", "LGU", ["VOL"], 79, "Escudo"),
          p("br14-tsi", 3, "Thiago Silva", "TSI", ["ZAG"], 86, "Capitao"),
          p("br14-dlz", 4, "David Luiz", "DLZ", ["ZAG"], 82, "Saida"),
          p("br14-dal", 2, "Dani Alves", "DAL", ["LD"], 82, "Ala"),
          p("br14-mar", 6, "Marcelo", "MAR", ["LE"], 84, "Foguete"),
          p("br14-jce", 12, "Julio Cesar", "JCE", ["GOL"], 80, "Reflexo")
        ]
      },
      {
        key: "nl-2014", country: "Holanda", code: "NL", year: 2014, style: "Laranja de Robben",
        players: [
          p("nl14-rob", 11, "Robben", "ROB", ["PE"], 88, "Foguete"),
          p("nl14-vpe", 9, "Van Persie", "VPE", ["CA"], 85, "Matador"),
          p("nl14-sne", 10, "Sneijder", "SNE", ["MEI"], 83, "Passe"),
          p("nl14-wij", 8, "Wijnaldum", "WIJ", ["MC"], 78, "Chegada"),
          p("nl14-ndj", 6, "N. de Jong", "NDJ", ["VOL"], 80, "Marcacao"),
          p("nl14-kuy", 7, "Kuyt", "KUY", ["PD"], 77, "Correria"),
          p("nl14-vla", 3, "Vlaar", "VLA", ["ZAG"], 78, "Firme"),
          p("nl14-dvr", 4, "De Vrij", "DVR", ["ZAG"], 78, "Seguro"),
          p("nl14-jan", 2, "Janmaat", "JAN", ["LD"], 76, "Ala"),
          p("nl14-bli", 5, "Blind", "BLI", ["LE"], 78, "Passe"),
          p("nl14-cil", 1, "Cillessen", "CIL", ["GOL"], 78, "Reflexo")
        ]
      },
      {
        key: "fr-2014", country: "Franca", code: "FR", year: 2014, style: "Nova geracao",
        players: [
          p("fr14-ben", 10, "Benzema", "BEN", ["CA"], 85, "Faro"),
          p("fr14-pog", 19, "Pogba", "POG", ["MC"], 83, "Potencia"),
          p("fr14-gri", 11, "Griezmann", "GRI", ["PE"], 80, "Talento"),
          p("fr14-val", 8, "Valbuena", "VAL", ["MEI"], 79, "Criacao"),
          p("fr14-mat", 14, "Matuidi", "MAT", ["MC"], 80, "Pulmao"),
          p("fr14-cab", 4, "Cabaye", "CAB", ["VOL"], 78, "Passe"),
          p("fr14-var", 22, "Varane", "VAR", ["ZAG"], 82, "Veloz"),
          p("fr14-sak", 3, "Sakho", "SAK", ["ZAG"], 78, "Forte"),
          p("fr14-deb", 2, "Debuchy", "DEB", ["LD"], 77, "Ala"),
          p("fr14-evr", 3, "Evra", "EVR", ["LE"], 79, "Experiente"),
          p("fr14-llo", 1, "Lloris", "LLO", ["GOL"], 84, "Capitao")
        ]
      },
      {
        key: "uy-2014", country: "Uruguai", code: "UY", year: 2014, style: "Garra celeste",
        players: [
          p("uy14-sua", 9, "Suarez", "SUA", ["CA"], 87, "Craque"),
          p("uy14-cav", 21, "Cavani", "CAV", ["CA"], 85, "Matador"),
          p("uy14-for", 10, "Forlan", "FOR", ["MEI"], 78, "Experiente"),
          p("uy14-lod", 5, "Lodeiro", "LOD", ["MEI"], 76, "Criacao"),
          p("uy14-rio", 15, "Arevalo Rios", "RIO", ["VOL"], 75, "Marcacao"),
          p("uy14-gon", 11, "A. Gonzalez", "GON", ["MC"], 74, "Correria"),
          p("uy14-god", 3, "Godin", "GOD", ["ZAG"], 85, "Capitao"),
          p("uy14-gim", 2, "Gimenez", "GIM", ["ZAG"], 79, "Forte"),
          p("uy14-per", 16, "M. Pereira", "PER", ["LD"], 75, "Ala"),
          p("uy14-cac", 22, "Caceres", "CAC", ["LE"], 76, "Apoio"),
          p("uy14-mus", 1, "Muslera", "MUS", ["GOL"], 79, "Seguro")
        ]
      },
      {
        key: "be-2014", country: "Belgica", code: "BE", year: 2014, style: "Diabos vermelhos",
        players: [
          p("be14-haz", 10, "E. Hazard", "HAZ", ["PE"], 85, "Craque"),
          p("be14-kdb", 7, "De Bruyne", "KDB", ["MEI"], 82, "Talento"),
          p("be14-luk", 9, "Lukaku", "LUK", ["CA"], 80, "Potencia"),
          p("be14-mer", 14, "Mertens", "MER", ["PD"], 78, "Drible"),
          p("be14-wit", 6, "Witsel", "WIT", ["VOL"], 80, "Escudo"),
          p("be14-fel", 8, "Fellaini", "FEL", ["MC"], 79, "Chegada"),
          p("be14-kom", 4, "Kompany", "KOM", ["ZAG"], 84, "Capitao"),
          p("be14-ver", 5, "Vertonghen", "VER", ["ZAG"], 82, "Solido"),
          p("be14-ald", 2, "Alderweireld", "ALD", ["LD"], 80, "Passe"),
          p("be14-vrm", 3, "Vermaelen", "VRM", ["LE"], 78, "Firme"),
          p("be14-cou", 1, "Courtois", "COU", ["GOL"], 84, "Paredao")
        ]
      },
      {
        key: "mx-2014", country: "Mexico", code: "MX", year: 2014, style: "Tri combativo",
        players: [
          p("mx14-gua", 18, "Guardado", "GUA", ["MEI"], 78, "Criacao"),
          p("mx14-her", 16, "H. Herrera", "HER", ["MC"], 77, "Motor"),
          p("mx14-gds", 10, "G. dos Santos", "GDS", ["PE"], 77, "Drible"),
          p("mx14-per", 19, "Peralta", "PER", ["CA"], 75, "Area"),
          p("mx14-vaz", 22, "P. Vazquez", "VAZ", ["PD"], 75, "Correria"),
          p("mx14-fab", 8, "M. Fabian", "FAB", ["MEI"], 74, "Chute"),
          p("mx14-mar", 4, "R. Marquez", "MAR", ["ZAG"], 80, "Lider"),
          p("mx14-mor", 15, "H. Moreno", "MOR", ["ZAG"], 77, "Firme"),
          p("mx14-agu", 2, "P. Aguilar", "AGU", ["LD"], 74, "Ala"),
          p("mx14-sal", 3, "Salcido", "SAL", ["LE"], 74, "Apoio"),
          p("mx14-och", 13, "Ochoa", "OCH", ["GOL"], 82, "Heroi")
        ]
      },
      {
        key: "co-2014", country: "Colombia", code: "CO", year: 2014, style: "Revelacao James",
        players: [
          p("co14-jam", 10, "James Rodriguez", "JAM", ["MEI"], 84, "Craque"),
          p("co14-cua", 11, "Cuadrado", "CUA", ["PD"], 80, "Explosao"),
          p("co14-jam2", 9, "J. Martinez", "JMA", ["CA"], 78, "Faro"),
          p("co14-iba", 20, "Ibarbo", "IBA", ["PE"], 74, "Velocidade"),
          p("co14-san", 6, "C. Sanchez", "SAN", ["VOL"], 76, "Escudo"),
          p("co14-agu", 8, "Aguilar", "AGL", ["MC"], 74, "Marcacao"),
          p("co14-yep", 2, "Yepes", "YEP", ["ZAG"], 78, "Capitao"),
          p("co14-zap", 3, "C. Zapata", "ZAP", ["ZAG"], 76, "Firme"),
          p("co14-zun", 18, "Zuniga", "ZUN", ["LD"], 76, "Ala"),
          p("co14-arm", 17, "Armero", "ARM", ["LE"], 75, "Apoio"),
          p("co14-osp", 1, "Ospina", "OSP", ["GOL"], 80, "Reflexo")
        ]
      },
      {
        key: "dz-2014", country: "Argelia", code: "DZ", year: 2014, style: "Raposas do deserto",
        players: [
          p("dz14-feg", 17, "Feghouli", "FEG", ["MEI"], 76, "Conducao"),
          p("dz14-bra", 8, "Brahimi", "BRA", ["PE"], 76, "Drible"),
          p("dz14-sli", 13, "Slimani", "SLI", ["CA"], 76, "Cabeceio"),
          p("dz14-mah", 7, "Mahrez", "MAH", ["PD"], 75, "Talento"),
          p("dz14-ben", 12, "Bentaleb", "BEN", ["MC"], 74, "Passe"),
          p("dz14-lac", 6, "Lacen", "LAC", ["VOL"], 73, "Escudo"),
          p("dz14-bou", 15, "Bougherra", "BOU", ["ZAG"], 74, "Capitao"),
          p("dz14-hal", 20, "Halliche", "HAL", ["ZAG"], 73, "Firme"),
          p("dz14-man", 21, "Mandi", "MAN", ["LD"], 74, "Ala"),
          p("dz14-gho", 3, "Ghoulam", "GHO", ["LE"], 76, "Apoio"),
          p("dz14-mbo", 23, "M'Bolhi", "MBO", ["GOL"], 76, "Muralha")
        ]
      },
      {
        key: "cl-2014", country: "Chile", code: "CL", year: 2014, style: "Roja de Sampaoli",
        players: [
          p("cl14-san", 7, "A. Sanchez", "SAN", ["PE"], 84, "Craque"),
          p("cl14-vid", 8, "Vidal", "VID", ["MC"], 84, "Guerreiro"),
          p("cl14-var", 11, "E. Vargas", "VAR", ["CA"], 78, "Faro"),
          p("cl14-val", 10, "Valdivia", "VAL", ["MEI"], 77, "Mago"),
          p("cl14-ara", 20, "Aranguiz", "ARA", ["MC"], 77, "Chegada"),
          p("cl14-dia", 21, "M. Diaz", "DIA", ["VOL"], 76, "Escudo"),
          p("cl14-med", 17, "Medel", "MED", ["ZAG"], 79, "Pitbull"),
          p("cl14-jar", 18, "G. Jara", "JAR", ["ZAG"], 75, "Firme"),
          p("cl14-isl", 4, "Isla", "ISL", ["LD"], 77, "Ala"),
          p("cl14-men", 15, "E. Mena", "MEN", ["LE"], 73, "Apoio"),
          p("cl14-bra", 1, "Bravo", "BRA", ["GOL"], 82, "Capitao")
        ]
      },
      {
        key: "ci-2014", country: "Costa do Marfim", code: "CI", year: 2014, style: "Elefantes",
        players: [
          p("ci14-yto", 19, "Y. Toure", "YTO", ["MC"], 84, "Craque"),
          p("ci14-dro", 11, "Drogba", "DRO", ["CA"], 80, "Lenda"),
          p("ci14-ger", 10, "Gervinho", "GER", ["PE"], 78, "Velocidade"),
          p("ci14-bon", 12, "Bony", "BON", ["CA"], 78, "Potencia"),
          p("ci14-kal", 8, "Kalou", "KAL", ["MEI"], 76, "Faro"),
          p("ci14-tio", 6, "Tiote", "TIO", ["VOL"], 76, "Marcacao"),
          p("ci14-kto", 4, "K. Toure", "KTO", ["ZAG"], 76, "Experiente"),
          p("ci14-bam", 22, "Bamba", "BAM", ["ZAG"], 74, "Firme"),
          p("ci14-aur", 3, "Aurier", "AUR", ["LD"], 78, "Ala"),
          p("ci14-bok", 2, "Boka", "BOK", ["LE"], 73, "Apoio"),
          p("ci14-bar", 1, "Barry", "BAR", ["GOL"], 76, "Seguro")
        ]
      },
      {
        key: "gh-2014", country: "Gana", code: "GH", year: 2014, style: "Estrelas negras",
        players: [
          p("gh14-gya", 3, "Gyan", "GYA", ["CA"], 78, "Artilheiro"),
          p("gh14-aya", 10, "A. Ayew", "AYA", ["PE"], 77, "Correria"),
          p("gh14-kpb", 21, "K.P. Boateng", "KPB", ["MEI"], 77, "Talento"),
          p("gh14-ess", 5, "Essien", "ESS", ["MC"], 78, "Motor"),
          p("gh14-mun", 11, "Muntari", "MUN", ["VOL"], 76, "Chute"),
          p("gh14-ats", 18, "Atsu", "ATS", ["PD"], 74, "Drible"),
          p("gh14-men", 15, "J. Mensah", "MEN", ["ZAG"], 74, "Firme"),
          p("gh14-boy", 4, "J. Boye", "BOY", ["ZAG"], 73, "Solido"),
          p("gh14-opa", 23, "Opare", "OPA", ["LD"], 73, "Ala"),
          p("gh14-asa", 8, "Asamoah", "ASA", ["LE"], 77, "Apoio"),
          p("gh14-kwa", 22, "Kwarasey", "KWA", ["GOL"], 73, "Reflexo")
        ]
      },
      {
        key: "gr-2014", country: "Grecia", code: "GR", year: 2014, style: "Muralha helenica",
        players: [
          p("gr14-sam", 7, "Samaras", "SAM", ["CA"], 76, "Pivo"),
          p("gr14-kar", 10, "Karagounis", "KAR", ["MEI"], 76, "Capitao"),
          p("gr14-kat", 21, "Katsouranis", "KAT", ["VOL"], 75, "Escudo"),
          p("gr14-man", 6, "Maniatis", "MAN", ["MC"], 74, "Marcacao"),
          p("gr14-sal", 9, "Salpingidis", "SAL", ["PE"], 74, "Correria"),
          p("gr14-mit", 11, "Mitroglou", "MIT", ["CA"], 76, "Area"),
          p("gr14-sok", 19, "Sokratis", "SOK", ["ZAG"], 78, "Forte"),
          p("gr14-mnl", 5, "Manolas", "MNL", ["ZAG"], 77, "Veloz"),
          p("gr14-tor", 15, "Torosidis", "TOR", ["LD"], 75, "Ala"),
          p("gr14-hol", 20, "Holebas", "HOL", ["LE"], 74, "Apoio"),
          p("gr14-krn", 1, "Karnezis", "KRN", ["GOL"], 76, "Seguro")
        ]
      },
      {
        key: "ch-2014", country: "Suica", code: "CH", year: 2014, style: "Precisao suica",
        players: [
          p("ch14-sha", 23, "Shaqiri", "SHA", ["PD"], 79, "Canhota"),
          p("ch14-xha", 10, "Xhaka", "XHA", ["MC"], 77, "Passe"),
          p("ch14-drm", 9, "Drmic", "DRM", ["CA"], 74, "Area"),
          p("ch14-meh", 11, "Mehmedi", "MEH", ["PE"], 74, "Velocidade"),
          p("ch14-inl", 4, "Inler", "INL", ["VOL"], 76, "Capitao"),
          p("ch14-beh", 8, "Behrami", "BEH", ["MC"], 75, "Marcacao"),
          p("ch14-djo", 20, "Djourou", "DJO", ["ZAG"], 76, "Forte"),
          p("ch14-vbe", 5, "Von Bergen", "VBE", ["ZAG"], 74, "Firme"),
          p("ch14-lic", 2, "Lichtsteiner", "LIC", ["LD"], 78, "Ala"),
          p("ch14-rod", 13, "R. Rodriguez", "ROD", ["LE"], 77, "Apoio"),
          p("ch14-ben", 1, "Benaglio", "BEN", ["GOL"], 78, "Reflexo")
        ]
      },
      {
        key: "ng-2014", country: "Nigeria", code: "NG", year: 2014, style: "Super Aguias",
        players: [
          p("ng14-mik", 10, "Mikel", "MIK", ["MC"], 78, "Cerebro"),
          p("ng14-mus", 7, "A. Musa", "MUS", ["PE"], 77, "Velocidade"),
          p("ng14-eme", 9, "Emenike", "EME", ["CA"], 76, "Potencia"),
          p("ng14-mos", 11, "V. Moses", "MOS", ["PD"], 76, "Drible"),
          p("ng14-ona", 17, "Onazi", "ONA", ["VOL"], 74, "Marcacao"),
          p("ng14-ode", 8, "Odemwingie", "ODE", ["MEI"], 75, "Faro"),
          p("ng14-yob", 2, "Yobo", "YOB", ["ZAG"], 74, "Capitao"),
          p("ng14-ome", 22, "Omeruo", "OME", ["ZAG"], 74, "Firme"),
          p("ng14-amb", 5, "Ambrose", "AMB", ["LD"], 73, "Ala"),
          p("ng14-osh", 3, "Oshaniwa", "OSH", ["LE"], 72, "Apoio"),
          p("ng14-eny", 1, "Enyeama", "ENY", ["GOL"], 78, "Muralha")
        ]
      },
      {
        key: "cr-2014", country: "Costa Rica", code: "CR", year: 2014, style: "Surpresa nas quartas",
        players: [
          p("cr14-nav", 1, "Keylor Navas", "NAV", ["GOL"], 84, "Heroi"),
          p("cr14-rui", 10, "Bryan Ruiz", "RUI", ["MEI"], 78, "Capitao"),
          p("cr14-cam", 12, "J. Campbell", "CAM", ["PE"], 77, "Talento"),
          p("cr14-bol", 7, "Bolanos", "BOL", ["MEI"], 74, "Criacao"),
          p("cr14-bor", 5, "C. Borges", "BOR", ["MC"], 75, "Passe"),
          p("cr14-tej", 17, "Y. Tejeda", "TEJ", ["VOL"], 74, "Marcacao"),
          p("cr14-gon", 3, "G. Gonzalez", "GON", ["ZAG"], 74, "Firme"),
          p("cr14-uma", 4, "Umana", "UMA", ["ZAG"], 73, "Seguro"),
          p("cr14-gam", 16, "Gamboa", "GAM", ["LD"], 74, "Ala"),
          p("cr14-dia", 15, "Junior Diaz", "DIA", ["LE"], 73, "Apoio"),
          p("cr14-ure", 21, "Urena", "URE", ["CA"], 74, "Area")
        ]
      },
      {
        key: "br-2010", country: "Brasil", code: "BR", year: 2010, style: "Selecao de Dunga",
        players: [
          p("br10-kak", 10, "Kaka", "KAK", ["MEI"], 86, "Craque"),
          p("br10-rob", 11, "Robinho", "ROB", ["PE"], 81, "Drible"),
          p("br10-lfa", 9, "Luis Fabiano", "LFA", ["CA"], 80, "Matador"),
          p("br10-ela", 7, "Elano", "ELA", ["PD"], 78, "Passe"),
          p("br10-gil", 8, "Gilberto Silva", "GIL", ["VOL"], 78, "Escudo"),
          p("br10-fme", 5, "Felipe Melo", "FME", ["VOL"], 76, "Marcacao"),
          p("br10-luc", 3, "Lucio", "LUC", ["ZAG"], 84, "Capitao"),
          p("br10-jua", 4, "Juan", "JUA", ["ZAG"], 80, "Firme"),
          p("br10-mai", 2, "Maicon", "MAI", ["LD"], 83, "Foguete"),
          p("br10-mba", 6, "Michel Bastos", "MBA", ["LE"], 76, "Apoio"),
          p("br10-jce", 1, "Julio Cesar", "JCE", ["GOL"], 84, "Paredao")
        ]
      },
      {
        key: "ar-2010", country: "Argentina", code: "AR", year: 2010, style: "Time de Maradona",
        players: [
          p("ar10-mes", 10, "Messi", "MES", ["MEI"], 90, "Genio"),
          p("ar10-tev", 11, "Tevez", "TEV", ["CA"], 84, "Guerreiro"),
          p("ar10-hig", 9, "Higuain", "HIG", ["CA"], 83, "Matador"),
          p("ar10-dim", 7, "Di Maria", "DIM", ["PE"], 80, "Velocidade"),
          p("ar10-mas", 14, "Mascherano", "MAS", ["VOL"], 82, "Lider"),
          p("ar10-max", 20, "Maxi Rodriguez", "MAX", ["MC"], 77, "Chegada"),
          p("ar10-dem", 15, "Demichelis", "DEM", ["ZAG"], 78, "Forte"),
          p("ar10-bur", 16, "Burdisso", "BUR", ["ZAG"], 76, "Firme"),
          p("ar10-ota", 4, "Otamendi", "OTA", ["LD"], 76, "Ala"),
          p("ar10-hei", 6, "Heinze", "HEI", ["LE"], 77, "Raca"),
          p("ar10-rom", 1, "Romero", "ROM", ["GOL"], 78, "Reflexo")
        ]
      },
      {
        key: "en-2010", country: "Inglaterra", code: "EN", year: 2010, style: "Geracao dourada",
        players: [
          p("en10-roo", 10, "Rooney", "ROO", ["CA"], 85, "Craque"),
          p("en10-ger", 4, "Gerrard", "GER", ["MEI"], 85, "Capitao"),
          p("en10-lam", 8, "Lampard", "LAM", ["MC"], 84, "Chegada"),
          p("en10-bar", 18, "Barry", "BAR", ["VOL"], 78, "Escudo"),
          p("en10-mil", 7, "Milner", "MIL", ["PD"], 77, "Motor"),
          p("en10-jco", 11, "J. Cole", "JCO", ["PE"], 76, "Drible"),
          p("en10-ter", 6, "Terry", "TER", ["ZAG"], 84, "Muralha"),
          p("en10-car", 23, "Carragher", "CAR", ["ZAG"], 78, "Firme"),
          p("en10-joh", 2, "G. Johnson", "JOH", ["LD"], 78, "Ala"),
          p("en10-aco", 3, "A. Cole", "ACO", ["LE"], 82, "Foguete"),
          p("en10-jam", 1, "D. James", "JAM", ["GOL"], 80, "Seguro")
        ]
      },
      {
        key: "de-2010", country: "Alemanha", code: "DE", year: 2010, style: "Jovem e veloz",
        players: [
          p("de10-ozi", 8, "Ozil", "OZI", ["MEI"], 84, "Criacao"),
          p("de10-swe", 7, "Schweinsteiger", "SWE", ["MC"], 85, "Motor"),
          p("de10-mul", 13, "T. Muller", "MUL", ["PD"], 82, "Faro"),
          p("de10-klo", 11, "Klose", "KLO", ["CA"], 82, "Artilheiro"),
          p("de10-pod", 10, "Podolski", "POD", ["PE"], 80, "Canhota"),
          p("de10-khe", 6, "Khedira", "KHE", ["VOL"], 80, "Pulmao"),
          p("de10-lah", 16, "Lahm", "LAH", ["LD"], 84, "Capitao"),
          p("de10-mer", 17, "Mertesacker", "MER", ["ZAG"], 79, "Torre"),
          p("de10-fri", 3, "A. Friedrich", "FRI", ["ZAG"], 78, "Firme"),
          p("de10-bad", 4, "Badstuber", "BAD", ["LE"], 76, "Apoio"),
          p("de10-neu", 1, "Neuer", "NEU", ["GOL"], 84, "Reflexo")
        ]
      },
      {
        key: "cl-2010", country: "Chile", code: "CL", year: 2010, style: "Bielsismo",
        players: [
          p("cl10-san", 7, "A. Sanchez", "SAN", ["PE"], 80, "Talento"),
          p("cl10-vid", 8, "Vidal", "VID", ["MC"], 80, "Guerreiro"),
          p("cl10-val", 10, "Valdivia", "VAL", ["MEI"], 78, "Mago"),
          p("cl10-sua", 11, "Suazo", "SUA", ["CA"], 77, "Matador"),
          p("cl10-fer", 14, "M. Fernandez", "FER", ["PD"], 76, "Chute"),
          p("cl10-med", 17, "Medel", "MED", ["VOL"], 77, "Pitbull"),
          p("cl10-pon", 4, "Ponce", "PON", ["ZAG"], 74, "Firme"),
          p("cl10-jar", 18, "G. Jara", "JAR", ["ZAG"], 75, "Solido"),
          p("cl10-isl", 5, "Isla", "ISL", ["LD"], 76, "Ala"),
          p("cl10-bea", 15, "Beausejour", "BEA", ["LE"], 75, "Apoio"),
          p("cl10-bra", 1, "Bravo", "BRA", ["GOL"], 80, "Capitao")
        ]
      },
      {
        key: "ci-2010", country: "Costa do Marfim", code: "CI", year: 2010, style: "Elefantes de ouro",
        players: [
          p("ci10-dro", 11, "Drogba", "DRO", ["CA"], 84, "Craque"),
          p("ci10-yto", 19, "Y. Toure", "YTO", ["MC"], 82, "Motor"),
          p("ci10-kal", 8, "Kalou", "KAL", ["MEI"], 76, "Faro"),
          p("ci10-ger", 10, "Gervinho", "GER", ["PD"], 76, "Velocidade"),
          p("ci10-din", 9, "Dindane", "DIN", ["CA"], 74, "Area"),
          p("ci10-zok", 4, "Zokora", "ZOK", ["VOL"], 77, "Marcacao"),
          p("ci10-kto", 28, "K. Toure", "KTO", ["ZAG"], 80, "Capitao"),
          p("ci10-bam", 22, "Bamba", "BAM", ["ZAG"], 73, "Firme"),
          p("ci10-ebo", 23, "Eboue", "EBO", ["LD"], 77, "Ala"),
          p("ci10-tie", 3, "Tiene", "TIE", ["LE"], 74, "Apoio"),
          p("ci10-bar", 1, "Barry", "BAR", ["GOL"], 75, "Seguro")
        ]
      },
      {
        key: "kr-2010", country: "Coreia do Sul", code: "KR", year: 2010, style: "Guerreiros Taeguk",
        players: [
          p("kr10-pjs", 13, "Park Ji-sung", "PJS", ["MEI"], 82, "Capitao"),
          p("kr10-pcy", 10, "Park Chu-young", "PCY", ["CA"], 77, "Faro"),
          p("kr10-lcy", 17, "Lee Chung-yong", "LCY", ["PD"], 77, "Drible"),
          p("kr10-ki", 16, "Ki Sung-yueng", "KI", ["MC"], 76, "Passe"),
          p("kr10-kjw", 6, "Kim Jung-woo", "KJW", ["VOL"], 74, "Marcacao"),
          p("kr10-ykh", 11, "Yeom Ki-hun", "YKH", ["PE"], 74, "Correria"),
          p("kr10-cdr", 22, "Cha Du-ri", "CDR", ["LD"], 74, "Ala"),
          p("kr10-ljs", 14, "Lee Jung-soo", "LJS", ["ZAG"], 74, "Firme"),
          p("kr10-cyh", 4, "Cho Yong-hyung", "CYH", ["ZAG"], 73, "Solido"),
          p("kr10-lyp", 12, "Lee Young-pyo", "LYP", ["LE"], 75, "Experiente"),
          p("kr10-jsr", 1, "Jung Sung-ryong", "JSR", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "pt-2010", country: "Portugal", code: "PT", year: 2010, style: "Solidez lusa",
        players: [
          p("pt10-cr7", 7, "Cristiano Ronaldo", "CR7", ["PE","CA"], 87, "Fenomeno"),
          p("pt10-dec", 20, "Deco", "DEC", ["MEI"], 80, "Maestro"),
          p("pt10-sim", 11, "Simao", "SIM", ["PD"], 78, "Drible"),
          p("pt10-tia", 23, "Tiago", "TIA", ["MC"], 76, "Passe"),
          p("pt10-mei", 16, "Meireles", "MEI", ["VOL"], 78, "Motor"),
          p("pt10-alm", 21, "Almeida", "ALM", ["CA"], 76, "Pivo"),
          p("pt10-car", 2, "R. Carvalho", "CAR", ["ZAG"], 82, "Elegante"),
          p("pt10-pep", 3, "Pepe", "PEP", ["ZAG"], 82, "Guerreiro"),
          p("pt10-mig", 13, "Miguel", "MIG", ["LD"], 74, "Ala"),
          p("pt10-coe", 5, "Coentrao", "COE", ["LE"], 78, "Apoio"),
          p("pt10-edu", 1, "Eduardo", "EDU", ["GOL"], 78, "Seguro")
        ]
      },
      {
        key: "gr-2010", country: "Grecia", code: "GR", year: 2010, style: "Ferrolho grego",
        players: [
          p("gr10-kar", 21, "Karagounis", "KAR", ["MEI"], 76, "Capitao"),
          p("gr10-sam", 7, "Samaras", "SAM", ["PE"], 75, "Pivo"),
          p("gr10-gek", 10, "Gekas", "GEK", ["CA"], 75, "Area"),
          p("gr10-cha", 9, "Charisteas", "CHA", ["CA"], 74, "Cabeceio"),
          p("gr10-kat", 15, "Katsouranis", "KAT", ["VOL"], 75, "Escudo"),
          p("gr10-nin", 8, "Ninis", "NIN", ["MC"], 73, "Talento"),
          p("gr10-kyr", 5, "Kyrgiakos", "KYR", ["ZAG"], 74, "Torre"),
          p("gr10-pap", 19, "A. Papadopoulos", "PAP", ["ZAG"], 74, "Firme"),
          p("gr10-tor", 20, "Torosidis", "TOR", ["LD"], 74, "Ala"),
          p("gr10-vyn", 3, "Vyntra", "VYN", ["LE"], 73, "Apoio"),
          p("gr10-tzo", 1, "Tzorvas", "TZO", ["GOL"], 74, "Seguro")
        ]
      },
      {
        key: "jp-2010", country: "Japao", code: "JP", year: 2010, style: "Disciplina samurai",
        players: [
          p("jp10-hon", 18, "Honda", "HON", ["MEI"], 79, "Decisivo"),
          p("jp10-end", 7, "Y. Endo", "END", ["VOL"], 78, "Cerebro"),
          p("jp10-mat", 14, "Matsui", "MAT", ["PE"], 74, "Drible"),
          p("jp10-oku", 13, "Okubo", "OKU", ["CA"], 74, "Correria"),
          p("jp10-has", 17, "Hasebe", "HAS", ["MC"], 76, "Capitao"),
          p("jp10-oka", 9, "Okazaki", "OKA", ["PD"], 75, "Faro"),
          p("jp10-tul", 6, "Marcus Tulio", "TUL", ["ZAG"], 75, "Forte"),
          p("jp10-nak", 22, "Nakazawa", "NAK", ["ZAG"], 75, "Firme"),
          p("jp10-kom", 5, "Komano", "KOM", ["LD"], 73, "Ala"),
          p("jp10-nag", 15, "Nagatomo", "NAG", ["LE"], 76, "Apoio"),
          p("jp10-kaw", 21, "Kawashima", "KAW", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "mx-2010", country: "Mexico", code: "MX", year: 2010, style: "Tri de Chicharito",
        players: [
          p("mx10-che", 14, "Chicharito", "CHE", ["CA"], 79, "Faro"),
          p("mx10-gds", 10, "G. dos Santos", "GDS", ["PE"], 76, "Drible"),
          p("mx10-vel", 11, "Vela", "VEL", ["PD"], 76, "Talento"),
          p("mx10-gua", 18, "Guardado", "GUA", ["MEI"], 76, "Criacao"),
          p("mx10-jua", 8, "Juarez", "JUA", ["MC"], 74, "Motor"),
          p("mx10-tor", 6, "Torrado", "TOR", ["VOL"], 75, "Escudo"),
          p("mx10-mar", 4, "R. Marquez", "MAR", ["ZAG"], 80, "Capitao"),
          p("mx10-rod", 2, "F. Rodriguez", "ROD", ["ZAG"], 74, "Firme"),
          p("mx10-oso", 3, "Osorio", "OSO", ["LD"], 73, "Ala"),
          p("mx10-sal", 5, "Salcido", "SAL", ["LE"], 75, "Apoio"),
          p("mx10-ope", 1, "O. Perez", "OPE", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "uy-2010", country: "Uruguai", code: "UY", year: 2010, style: "Quarto lugar epico",
        players: [
          p("uy10-for", 10, "Forlan", "FOR", ["CA"], 84, "Bola de Ouro"),
          p("uy10-sua", 9, "Suarez", "SUA", ["CA"], 82, "Matador"),
          p("uy10-cav", 7, "Cavani", "CAV", ["PE"], 80, "Correria"),
          p("uy10-per", 11, "A. Pereira", "APE", ["MEI"], 76, "Criacao"),
          p("uy10-dpe", 15, "D. Perez", "DPE", ["MC"], 76, "Motor"),
          p("uy10-rio", 17, "Arevalo Rios", "RIO", ["VOL"], 74, "Marcacao"),
          p("uy10-lug", 4, "Lugano", "LUG", ["ZAG"], 79, "Capitao"),
          p("uy10-god", 3, "Godin", "GOD", ["ZAG"], 80, "Muralha"),
          p("uy10-mpe", 16, "M. Pereira", "MPE", ["LD"], 75, "Ala"),
          p("uy10-fuc", 2, "Fucile", "FUC", ["LE"], 74, "Apoio"),
          p("uy10-mus", 1, "Muslera", "MUS", ["GOL"], 78, "Seguro")
        ]
      },
      {
        key: "py-2010", country: "Paraguai", code: "PY", year: 2010, style: "Guaranis solidos",
        players: [
          p("py10-scr", 9, "Santa Cruz", "SCR", ["CA"], 78, "Referencia"),
          p("py10-bar", 19, "Barrios", "BAR", ["CA"], 76, "Area"),
          p("py10-ver", 8, "Vera", "VER", ["PE"], 74, "Correria"),
          p("py10-riv", 16, "Riveros", "RIV", ["MEI"], 75, "Chegada"),
          p("py10-ort", 5, "Ortigoza", "ORT", ["MC"], 74, "Passe"),
          p("py10-cac", 15, "V. Caceres", "CAC", ["VOL"], 74, "Marcacao"),
          p("py10-alc", 4, "Alcaraz", "ALC", ["ZAG"], 76, "Firme"),
          p("py10-dsi", 21, "A. Da Silva", "DSI", ["ZAG"], 74, "Solido"),
          p("py10-mor", 6, "Morel", "MOR", ["LD"], 74, "Ala"),
          p("py10-bon", 14, "Bonet", "BON", ["LE"], 73, "Apoio"),
          p("py10-vil", 1, "Justo Villar", "VIL", ["GOL"], 78, "Capitao")
        ]
      },
      {
        key: "gh-2010", country: "Gana", code: "GH", year: 2010, style: "Orgulho africano",
        players: [
          p("gh10-gya", 3, "Gyan", "GYA", ["CA"], 80, "Heroi"),
          p("gh10-kpb", 21, "K.P. Boateng", "KPB", ["MEI"], 78, "Chegada"),
          p("gh10-mun", 11, "Muntari", "MUN", ["PE"], 77, "Chute"),
          p("gh10-asa", 20, "K. Asamoah", "ASA", ["MC"], 76, "Motor"),
          p("gh10-ann", 6, "Annan", "ANN", ["VOL"], 75, "Escudo"),
          p("gh10-aya", 10, "A. Ayew", "AYA", ["PD"], 74, "Drible"),
          p("gh10-men", 5, "J. Mensah", "MEN", ["ZAG"], 78, "Capitao"),
          p("gh10-vor", 15, "Vorsah", "VOR", ["ZAG"], 74, "Firme"),
          p("gh10-pan", 2, "Pantsil", "PAN", ["LD"], 73, "Ala"),
          p("gh10-sar", 8, "Sarpei", "SAR", ["LE"], 73, "Apoio"),
          p("gh10-kin", 22, "Kingson", "KIN", ["GOL"], 75, "Reflexo")
        ]
      },
      {
        key: "br-2006", country: "Brasil", code: "BR", year: 2006, style: "Quarteto magico",
        players: [
          p("br06-r10", 10, "Ronaldinho", "R10", ["MEI"], 91, "Bruxo"),
          p("br06-kak", 8, "Kaka", "KAK", ["MEI"], 87, "Craque"),
          p("br06-ron", 9, "Ronaldo", "RON", ["CA"], 84, "Fenomeno"),
          p("br06-adr", 7, "Adriano", "ADR", ["CA"], 82, "Imperador"),
          p("br06-zrb", 11, "Ze Roberto", "ZRB", ["MC"], 79, "Motor"),
          p("br06-eme", 5, "Emerson", "EME", ["VOL"], 79, "Escudo"),
          p("br06-luc", 3, "Lucio", "LUC", ["ZAG"], 84, "Muralha"),
          p("br06-jua", 4, "Juan", "JUA", ["ZAG"], 80, "Firme"),
          p("br06-caf", 2, "Cafu", "CAF", ["LD"], 82, "Capitao"),
          p("br06-rc", 6, "Roberto Carlos", "RC", ["LE"], 82, "Foguete"),
          p("br06-did", 1, "Dida", "DID", ["GOL"], 80, "Seguro")
        ]
      },
      {
        key: "ar-2006", country: "Argentina", code: "AR", year: 2006, style: "Futebol de Riquelme",
        players: [
          p("ar06-riq", 10, "Riquelme", "RIQ", ["MEI"], 86, "Maestro"),
          p("ar06-cre", 9, "Crespo", "CRE", ["CA"], 83, "Matador"),
          p("ar06-tev", 18, "Tevez", "TEV", ["CA"], 82, "Guerreiro"),
          p("ar06-max", 7, "Maxi Rodriguez", "MAX", ["PD"], 78, "Chute"),
          p("ar06-cam", 19, "Cambiasso", "CAM", ["VOL"], 82, "Motor"),
          p("ar06-mas", 14, "Mascherano", "MAS", ["VOL"], 80, "Marcacao"),
          p("ar06-aya", 2, "Ayala", "AYA", ["ZAG"], 82, "Capitao"),
          p("ar06-hei", 6, "Heinze", "HEI", ["ZAG"], 79, "Raca"),
          p("ar06-sca", 4, "Scaloni", "SCA", ["LD"], 74, "Ala"),
          p("ar06-sor", 3, "Sorin", "SOR", ["LE"], 78, "Apoio"),
          p("ar06-abb", 1, "Abbondanzieri", "ABB", ["GOL"], 78, "Seguro")
        ]
      },
      {
        key: "en-2006", country: "Inglaterra", code: "EN", year: 2006, style: "Golden generation",
        players: [
          p("en06-ger", 4, "Gerrard", "GER", ["MEI"], 85, "Motor"),
          p("en06-lam", 8, "Lampard", "LAM", ["MC"], 85, "Chegada"),
          p("en06-roo", 9, "Rooney", "ROO", ["CA"], 82, "Talento"),
          p("en06-bec", 7, "Beckham", "BEC", ["PD"], 84, "Capitao"),
          p("en06-jco", 11, "J. Cole", "JCO", ["PE"], 79, "Drible"),
          p("en06-crr", 16, "Carrick", "CRR", ["VOL"], 78, "Passe"),
          p("en06-ter", 6, "Terry", "TER", ["ZAG"], 85, "Muralha"),
          p("en06-fer", 5, "Ferdinand", "FER", ["ZAG"], 84, "Elegante"),
          p("en06-nev", 2, "G. Neville", "NEV", ["LD"], 78, "Ala"),
          p("en06-aco", 3, "A. Cole", "ACO", ["LE"], 82, "Foguete"),
          p("en06-rob", 1, "P. Robinson", "ROB", ["GOL"], 78, "Seguro")
        ]
      },
      {
        key: "fr-2006", country: "Franca", code: "FR", year: 2006, style: "Ultima danca de Zidane",
        players: [
          p("fr06-zid", 10, "Zidane", "ZID", ["MEI"], 90, "Genio"),
          p("fr06-hen", 12, "Henry", "HEN", ["CA"], 88, "Craque"),
          p("fr06-vie", 4, "Vieira", "VIE", ["VOL"], 84, "Potencia"),
          p("fr06-mak", 6, "Makelele", "MAK", ["VOL"], 82, "Escudo"),
          p("fr06-rib", 22, "Ribery", "RIB", ["PD"], 80, "Drible"),
          p("fr06-mal", 7, "Malouda", "MAL", ["PE"], 78, "Velocidade"),
          p("fr06-thu", 15, "Thuram", "THU", ["ZAG"], 82, "Experiente"),
          p("fr06-gal", 5, "Gallas", "GAL", ["ZAG"], 81, "Firme"),
          p("fr06-sag", 19, "Sagnol", "SAG", ["LD"], 79, "Ala"),
          p("fr06-abi", 3, "Abidal", "ABI", ["LE"], 79, "Solido"),
          p("fr06-bar", 16, "Barthez", "BAR", ["GOL"], 79, "Reflexo")
        ]
      },
      {
        key: "de-2006", country: "Alemanha", code: "DE", year: 2006, style: "Conto de fadas em casa",
        players: [
          p("de06-bal", 13, "Ballack", "BAL", ["MEI"], 86, "Capitao"),
          p("de06-klo", 11, "Klose", "KLO", ["CA"], 84, "Artilheiro"),
          p("de06-pod", 20, "Podolski", "POD", ["PE"], 80, "Revelacao"),
          p("de06-swe", 7, "Schweinsteiger", "SWE", ["MC"], 80, "Motor"),
          p("de06-fri", 8, "Frings", "FRG", ["VOL"], 80, "Escudo"),
          p("de06-sch", 19, "Schneider", "SCH", ["PD"], 76, "Cruzamento"),
          p("de06-met", 21, "Metzelder", "MET", ["ZAG"], 78, "Torre"),
          p("de06-mer", 17, "Mertesacker", "MER", ["ZAG"], 78, "Firme"),
          p("de06-lah", 16, "Lahm", "LAH", ["LD"], 82, "Ala"),
          p("de06-afr", 3, "A. Friedrich", "AFR", ["LE"], 76, "Apoio"),
          p("de06-leh", 1, "Lehmann", "LEH", ["GOL"], 82, "Seguro")
        ]
      },
      {
        key: "it-2006", country: "Italia", code: "IT", year: 2006, style: "Tetracampea",
        players: [
          p("it06-tot", 10, "Totti", "TOT", ["MEI"], 87, "Principe"),
          p("it06-pir", 21, "Pirlo", "PIR", ["MC"], 86, "Maestro"),
          p("it06-toni", 9, "Toni", "TON", ["CA"], 82, "Torre"),
          p("it06-gat", 8, "Gattuso", "GAT", ["VOL"], 82, "Pitbull"),
          p("it06-cam", 16, "Camoranesi", "CAM", ["PD"], 78, "Correria"),
          p("it06-per", 20, "Perrotta", "PER", ["MC"], 77, "Chegada"),
          p("it06-can", 5, "Cannavaro", "CAN", ["ZAG"], 88, "Capitao"),
          p("it06-mat", 23, "Materazzi", "MAT", ["ZAG"], 80, "Duro"),
          p("it06-zam", 19, "Zambrotta", "ZAM", ["LD"], 82, "Versatil"),
          p("it06-gro", 3, "Grosso", "GRO", ["LE"], 79, "Heroi"),
          p("it06-buf", 1, "Buffon", "BUF", ["GOL"], 90, "Paredao")
        ]
      },
      {
        key: "pt-2006", country: "Portugal", code: "PT", year: 2006, style: "Quarto lugar",
        players: [
          p("pt06-dec", 20, "Deco", "DEC", ["MEI"], 84, "Maestro"),
          p("pt06-fig", 7, "Figo", "FIG", ["PD"], 82, "Capitao"),
          p("pt06-cr7", 17, "Cristiano Ronaldo", "CR7", ["PE"], 82, "Joia"),
          p("pt06-man", 6, "Maniche", "MAN", ["MC"], 79, "Chegada"),
          p("pt06-cos", 18, "Costinha", "COS", ["VOL"], 78, "Escudo"),
          p("pt06-pau", 9, "Pauleta", "PAU", ["CA"], 79, "Artilheiro"),
          p("pt06-car", 5, "R. Carvalho", "CAR", ["ZAG"], 82, "Elegante"),
          p("pt06-mei", 4, "F. Meira", "MEI", ["ZAG"], 76, "Firme"),
          p("pt06-mig", 13, "Miguel", "MIG", ["LD"], 74, "Ala"),
          p("pt06-val", 14, "Nuno Valente", "VAL", ["LE"], 74, "Apoio"),
          p("pt06-ric", 1, "Ricardo", "RIC", ["GOL"], 80, "Heroi dos penaltis")
        ]
      },
      {
        key: "nl-2006", country: "Holanda", code: "NL", year: 2006, style: "Laranja pratica",
        players: [
          p("nl06-vni", 10, "Van Nistelrooy", "VNI", ["CA"], 84, "Matador"),
          p("nl06-rob", 11, "Robben", "ROB", ["PE"], 84, "Foguete"),
          p("nl06-vdv", 23, "Van der Vaart", "VDV", ["MEI"], 80, "Criacao"),
          p("nl06-sne", 10, "Sneijder", "SNE", ["MEI"], 80, "Passe"),
          p("nl06-vbo", 6, "Van Bommel", "VBO", ["VOL"], 80, "Escudo"),
          p("nl06-coc", 8, "Cocu", "COC", ["MC"], 78, "Capitao"),
          p("nl06-bou", 3, "Boulahrouz", "BOU", ["ZAG"], 76, "Duro"),
          p("nl06-ooi", 4, "Ooijer", "OOI", ["ZAG"], 76, "Firme"),
          p("nl06-hei", 2, "Heitinga", "HEI", ["LD"], 78, "Ala"),
          p("nl06-vbr", 5, "Van Bronckhorst", "VBR", ["LE"], 79, "Apoio"),
          p("nl06-vds", 1, "Van der Sar", "VDS", ["GOL"], 84, "Seguro")
        ]
      },
      {
        key: "cz-2006", country: "Republica Tcheca", code: "CZ", year: 2006, style: "Talento tcheco",
        players: [
          p("cz06-ned", 10, "Nedved", "NED", ["MEI"], 85, "Furacao"),
          p("cz06-ros", 8, "Rosicky", "ROS", ["MEI"], 82, "Criacao"),
          p("cz06-kol", 12, "Koller", "KOL", ["CA"], 79, "Torre"),
          p("cz06-bar", 15, "Baros", "BAR", ["CA"], 79, "Veloz"),
          p("cz06-pob", 11, "Poborsky", "POB", ["PD"], 77, "Experiente"),
          p("cz06-gal", 6, "Galasek", "GAL", ["VOL"], 76, "Escudo"),
          p("cz06-pol", 5, "Polak", "POL", ["MC"], 74, "Marcacao"),
          p("cz06-ujf", 21, "Ujfalusi", "UJF", ["ZAG"], 78, "Firme"),
          p("cz06-roz", 3, "Rozehnal", "ROZ", ["ZAG"], 76, "Solido"),
          p("cz06-gry", 2, "Grygera", "GRY", ["LD"], 76, "Ala"),
          p("cz06-jan", 17, "Jankulovski", "JAN", ["LE"], 76, "Apoio")
        ]
      },
      {
        key: "se-2006", country: "Suecia", code: "SE", year: 2006, style: "Escandinavos fortes",
        players: [
          p("se06-ibr", 11, "Ibrahimovic", "IBR", ["CA"], 83, "Craque"),
          p("se06-lar", 10, "H. Larsson", "LAR", ["CA"], 82, "Faro"),
          p("se06-lju", 9, "Ljungberg", "LJU", ["PD"], 80, "Correria"),
          p("se06-kal", 7, "Kallstrom", "KAL", ["MC"], 77, "Passe"),
          p("se06-lin", 8, "Linderoth", "LIN", ["VOL"], 76, "Escudo"),
          p("se06-wil", 19, "Wilhelmsson", "WIL", ["PE"], 75, "Drible"),
          p("se06-mel", 3, "Mellberg", "MEL", ["ZAG"], 79, "Capitao"),
          p("se06-luc", 4, "Lucic", "LUC", ["ZAG"], 74, "Firme"),
          p("se06-ale", 2, "Alexandersson", "ALE", ["LD"], 74, "Ala"),
          p("se06-edm", 5, "Edman", "EDM", ["LE"], 74, "Apoio"),
          p("se06-isa", 1, "Isaksson", "ISA", ["GOL"], 78, "Reflexo")
        ]
      },
      {
        key: "ci-2006", country: "Costa do Marfim", code: "CI", year: 2006, style: "Estreia dos Elefantes",
        players: [
          p("ci06-dro", 11, "Drogba", "DRO", ["CA"], 82, "Craque"),
          p("ci06-yto", 19, "Y. Toure", "YTO", ["MC"], 78, "Motor"),
          p("ci06-kei", 9, "Kader Keita", "KEI", ["MEI"], 75, "Drible"),
          p("ci06-kal", 8, "Kalou", "KAL", ["PE"], 74, "Talento"),
          p("ci06-din", 15, "Dindane", "DIN", ["CA"], 74, "Area"),
          p("ci06-zok", 4, "Zokora", "ZOK", ["VOL"], 76, "Marcacao"),
          p("ci06-kto", 28, "K. Toure", "KTO", ["ZAG"], 78, "Capitao"),
          p("ci06-mei", 5, "Meite", "MEI", ["ZAG"], 74, "Firme"),
          p("ci06-ebo", 23, "Eboue", "EBO", ["LD"], 76, "Ala"),
          p("ci06-tie", 3, "Tiene", "TIE", ["LE"], 73, "Apoio"),
          p("ci06-tiz", 1, "Tizie", "TIZ", ["GOL"], 73, "Seguro")
        ]
      },
      {
        key: "ua-2006", country: "Ucrania", code: "UA", year: 2006, style: "Estreante nas quartas",
        players: [
          p("ua06-she", 7, "Shevchenko", "SHE", ["CA"], 86, "Craque"),
          p("ua06-reb", 11, "Rebrov", "REB", ["PD"], 78, "Faro"),
          p("ua06-vor", 9, "Voronin", "VOR", ["CA"], 78, "Movimento"),
          p("ua06-tym", 4, "Tymoshchuk", "TYM", ["VOL"], 80, "Capitao"),
          p("ua06-kal", 8, "Kalinichenko", "KAL", ["MEI"], 75, "Criacao"),
          p("ua06-hus", 5, "Husin", "HUS", ["MC"], 74, "Marcacao"),
          p("ua06-rus", 3, "Rusol", "RUS", ["ZAG"], 74, "Firme"),
          p("ua06-vas", 20, "Vashchuk", "VAS", ["ZAG"], 74, "Solido"),
          p("ua06-gus", 19, "Gusev", "GUS", ["LD"], 76, "Ala"),
          p("ua06-nes", 26, "Nesmachniy", "NES", ["LE"], 73, "Apoio"),
          p("ua06-sho", 1, "Shovkovskyi", "SHO", ["GOL"], 78, "Heroi")
        ]
      },
      {
        key: "ec-2006", country: "Equador", code: "EC", year: 2006, style: "La Tri surpresa",
        players: [
          p("ec06-del", 11, "A. Delgado", "DEL", ["CA"], 76, "Faro"),
          p("ec06-ten", 21, "C. Tenorio", "TEN", ["CA"], 75, "Cabeceio"),
          p("ec06-val", 16, "L. Valencia", "VAL", ["PD"], 76, "Joia"),
          p("ec06-men", 8, "E. Mendez", "MEN", ["MEI"], 76, "Cerebro"),
          p("ec06-esp", 14, "G. Espinoza", "ESP", ["VOL"], 74, "Escudo"),
          p("ec06-cas", 6, "S. Castillo", "CAS", ["MC"], 74, "Motor"),
          p("ec06-hur", 3, "I. Hurtado", "HUR", ["ZAG"], 76, "Capitao"),
          p("ec06-nes", 2, "N. Espinoza", "NES", ["ZAG"], 74, "Firme"),
          p("ec06-dlc", 17, "De la Cruz", "DLC", ["LD"], 74, "Ala"),
          p("ec06-rea", 4, "Reasco", "REA", ["LE"], 73, "Apoio"),
          p("ec06-mor", 1, "C. Mora", "MOR", ["GOL"], 74, "Seguro")
        ]
      },
      {
        key: "ch-2006", country: "Suica", code: "CH", year: 2006, style: "Defesa impenetravel",
        players: [
          p("ch06-fre", 9, "A. Frei", "FRE", ["CA"], 79, "Artilheiro"),
          p("ch06-bar", 7, "Barnetta", "BAR", ["MEI"], 77, "Criacao"),
          p("ch06-wic", 8, "Wicky", "WIC", ["MC"], 76, "Passe"),
          p("ch06-cab", 10, "Cabanas", "CAB", ["MEI"], 74, "Chegada"),
          p("ch06-vog", 6, "Vogel", "VOG", ["VOL"], 76, "Capitao"),
          p("ch06-str", 18, "Streller", "STR", ["CA"], 75, "Pivo"),
          p("ch06-sen", 4, "Senderos", "SEN", ["ZAG"], 77, "Torre"),
          p("ch06-mul", 3, "P. Muller", "MUL", ["ZAG"], 74, "Firme"),
          p("ch06-deg", 2, "P. Degen", "DEG", ["LD"], 74, "Ala"),
          p("ch06-mag", 13, "Magnin", "MAG", ["LE"], 74, "Apoio"),
          p("ch06-zub", 1, "Zuberbuhler", "ZUB", ["GOL"], 75, "Muralha")
        ]
      },
      {
        key: "au-2006", country: "Australia", code: "AU", year: 2006, style: "Socceroos de ouro",
        players: [
          p("au06-cah", 4, "T. Cahill", "CAH", ["MEI"], 79, "Chegada"),
          p("au06-vid", 9, "Viduka", "VID", ["CA"], 79, "Capitao"),
          p("au06-kew", 10, "Kewell", "KEW", ["PE"], 79, "Drible"),
          p("au06-bre", 23, "Bresciano", "BRE", ["MEI"], 77, "Criacao"),
          p("au06-cul", 19, "Culina", "CUL", ["MC"], 75, "Motor"),
          p("au06-gre", 8, "Grella", "GRE", ["VOL"], 75, "Marcacao"),
          p("au06-nei", 2, "Neill", "NEI", ["ZAG"], 77, "Lider"),
          p("au06-moo", 12, "C. Moore", "MOO", ["ZAG"], 75, "Firme"),
          p("au06-eme", 7, "Emerton", "EME", ["LD"], 76, "Ala"),
          p("au06-chi", 3, "Chipperfield", "CHI", ["LE"], 74, "Apoio"),
          p("au06-sch", 1, "Schwarzer", "SCH", ["GOL"], 80, "Paredao")
        ]
      },
      {
        key: "fr-2002", country: "Franca", code: "FR", year: 2002, style: "Campea em crise",
        players: [
          p("fr02-zid", 10, "Zidane", "ZID", ["MEI"], 91, "Genio"),
          p("fr02-hen", 12, "Henry", "HEN", ["CA"], 84, "Craque"),
          p("fr02-tre", 20, "Trezeguet", "TRE", ["CA"], 82, "Matador"),
          p("fr02-vie", 4, "Vieira", "VIE", ["VOL"], 84, "Potencia"),
          p("fr02-pet", 17, "Petit", "PET", ["VOL"], 80, "Escudo"),
          p("fr02-djo", 6, "Djorkaeff", "DJO", ["MEI"], 78, "Criacao"),
          p("fr02-des", 8, "Desailly", "DES", ["ZAG"], 84, "Capitao"),
          p("fr02-leb", 5, "Leboeuf", "LEB", ["ZAG"], 78, "Firme"),
          p("fr02-thu", 15, "Thuram", "THU", ["LD"], 82, "Solido"),
          p("fr02-liz", 3, "Lizarazu", "LIZ", ["LE"], 82, "Ala"),
          p("fr02-bar", 16, "Barthez", "BAR", ["GOL"], 84, "Reflexo")
        ]
      },
      {
        key: "ar-2002", country: "Argentina", code: "AR", year: 2002, style: "Favorita frustrada",
        players: [
          p("ar02-bat", 9, "Batistuta", "BAT", ["CA"], 84, "Matador"),
          p("ar02-cre", 19, "Crespo", "CRE", ["CA"], 83, "Faro"),
          p("ar02-ver", 8, "Veron", "VER", ["MC"], 84, "Maestro"),
          p("ar02-ort", 10, "Ortega", "ORT", ["MEI"], 80, "Drible"),
          p("ar02-aim", 16, "Aimar", "AIM", ["PD"], 79, "Talento"),
          p("ar02-sim", 14, "Simeone", "SIM", ["VOL"], 80, "Raca"),
          p("ar02-aya", 2, "Ayala", "AYA", ["ZAG"], 82, "Capitao"),
          p("ar02-sam", 4, "Samuel", "SAM", ["ZAG"], 82, "Muralha"),
          p("ar02-zan", 5, "Zanetti", "ZAN", ["LD"], 84, "Pulmao"),
          p("ar02-sor", 3, "Sorin", "SOR", ["LE"], 78, "Apoio"),
          p("ar02-cav", 1, "Cavallero", "CAV", ["GOL"], 76, "Seguro")
        ]
      },
      {
        key: "it-2002", country: "Italia", code: "IT", year: 2002, style: "Azzurra defensiva",
        players: [
          p("it02-tot", 10, "Totti", "TOT", ["MEI"], 85, "Talento"),
          p("it02-vie", 9, "Vieri", "VIE", ["CA"], 84, "Torre"),
          p("it02-dpi", 7, "Del Piero", "DPI", ["PD"], 83, "Craque"),
          p("it02-inz", 21, "F. Inzaghi", "INZ", ["CA"], 80, "Oportunista"),
          p("it02-tom", 16, "Tommasi", "TOM", ["MC"], 76, "Chegada"),
          p("it02-gat", 8, "Gattuso", "GAT", ["VOL"], 79, "Pitbull"),
          p("it02-nes", 13, "Nesta", "NES", ["ZAG"], 86, "Elegante"),
          p("it02-can", 5, "Cannavaro", "CAN", ["ZAG"], 82, "Lider"),
          p("it02-zam", 19, "Zambrotta", "ZAM", ["LD"], 80, "Versatil"),
          p("it02-mal", 3, "Maldini", "MAL", ["LE"], 85, "Capitao"),
          p("it02-buf", 1, "Buffon", "BUF", ["GOL"], 88, "Paredao")
        ]
      },
      {
        key: "en-2002", country: "Inglaterra", code: "EN", year: 2002, style: "Beckham e Owen",
        players: [
          p("en02-bec", 7, "Beckham", "BEC", ["PD"], 85, "Capitao"),
          p("en02-owe", 10, "Owen", "OWE", ["CA"], 84, "Veloz"),
          p("en02-sch", 8, "Scholes", "SCH", ["MEI"], 83, "Passe"),
          p("en02-har", 16, "Hargreaves", "HAR", ["MC"], 76, "Motor"),
          p("en02-but", 4, "Butt", "BUT", ["VOL"], 76, "Marcacao"),
          p("en02-hes", 21, "Heskey", "HES", ["CA"], 77, "Pivo"),
          p("en02-fer", 5, "Ferdinand", "FER", ["ZAG"], 82, "Elegante"),
          p("en02-cam", 6, "S. Campbell", "CAM", ["ZAG"], 82, "Forte"),
          p("en02-mil", 2, "Mills", "MIL", ["LD"], 74, "Ala"),
          p("en02-aco", 3, "A. Cole", "ACO", ["LE"], 80, "Apoio"),
          p("en02-sea", 1, "Seaman", "SEA", ["GOL"], 82, "Experiente")
        ]
      },
      {
        key: "pt-2002", country: "Portugal", code: "PT", year: 2002, style: "Geracao de ouro I",
        players: [
          p("pt02-fig", 7, "Figo", "FIG", ["PD"], 85, "Craque"),
          p("pt02-rui", 10, "Rui Costa", "RUI", ["MEI"], 83, "Maestro"),
          p("pt02-pau", 9, "Pauleta", "PAU", ["CA"], 79, "Artilheiro"),
          p("pt02-con", 17, "S. Conceicao", "CON", ["PE"], 77, "Correria"),
          p("pt02-pet", 6, "Petit", "PET", ["MC"], 76, "Motor"),
          p("pt02-cos", 8, "Costinha", "COS", ["VOL"], 76, "Escudo"),
          p("pt02-cou", 4, "F. Couto", "COU", ["ZAG"], 79, "Capitao"),
          p("pt02-jco", 5, "Jorge Costa", "JCO", ["ZAG"], 76, "Firme"),
          p("pt02-xav", 13, "Xavier", "XAV", ["LD"], 74, "Ala"),
          p("pt02-rjo", 14, "Rui Jorge", "RJO", ["LE"], 74, "Apoio"),
          p("pt02-bai", 1, "Baia", "BAI", ["GOL"], 80, "Seguro")
        ]
      },
      {
        key: "dk-2002", country: "Dinamarca", code: "DK", year: 2002, style: "Dinamite dinamarquesa",
        players: [
          p("dk02-tom", 9, "Tomasson", "TOM", ["CA"], 80, "Faro"),
          p("dk02-gro", 11, "Gronkjaer", "GRO", ["PD"], 77, "Drible"),
          p("dk02-rom", 21, "Rommedahl", "ROM", ["PE"], 76, "Velocidade"),
          p("dk02-jen", 7, "C. Jensen", "JEN", ["MC"], 74, "Passe"),
          p("dk02-gra", 6, "Gravesen", "GRA", ["VOL"], 77, "Guerreiro"),
          p("dk02-pou", 4, "J. Poulsen", "POU", ["MC"], 74, "Motor"),
          p("dk02-hel", 5, "Helveg", "HEL", ["LD"], 74, "Ala"),
          p("dk02-hen", 3, "Henriksen", "HEN", ["ZAG"], 75, "Firme"),
          p("dk02-lau", 2, "Laursen", "LAU", ["ZAG"], 76, "Solido"),
          p("dk02-hei", 18, "Heintze", "HEI", ["LE"], 74, "Apoio"),
          p("dk02-sor", 1, "T. Sorensen", "SOR", ["GOL"], 79, "Reflexo")
        ]
      },
      {
        key: "es-2002", country: "Espanha", code: "ES", year: 2002, style: "Furia sem titulo",
        players: [
          p("es02-rau", 7, "Raul", "RAU", ["CA"], 86, "Craque"),
          p("es02-mor", 9, "Morientes", "MOR", ["CA"], 81, "Cabeceio"),
          p("es02-men", 6, "Mendieta", "MEN", ["MEI"], 79, "Chegada"),
          p("es02-joa", 17, "Joaquin", "JOA", ["PD"], 77, "Drible"),
          p("es02-bar", 8, "Baraja", "BAR", ["MC"], 78, "Motor"),
          p("es02-hel", 4, "Helguera", "HEL", ["VOL"], 78, "Versatil"),
          p("es02-hie", 5, "Hierro", "HIE", ["ZAG"], 83, "Capitao"),
          p("es02-nad", 15, "Nadal", "NAD", ["ZAG"], 76, "Firme"),
          p("es02-puy", 18, "Puyol", "PUY", ["LD"], 79, "Raca"),
          p("es02-jfr", 3, "Juanfran", "JFR", ["LE"], 74, "Apoio"),
          p("es02-cas", 1, "Casillas", "CAS", ["GOL"], 84, "Reflexo")
        ]
      },
      {
        key: "ie-2002", country: "Irlanda", code: "IE", year: 2002, style: "Garra irlandesa",
        players: [
          p("ie02-kea", 10, "Robbie Keane", "KEA", ["CA"], 79, "Faro"),
          p("ie02-duf", 11, "Duff", "DUF", ["PE"], 79, "Drible"),
          p("ie02-qui", 9, "Quinn", "QUI", ["CA"], 75, "Torre"),
          p("ie02-kin", 6, "Kinsella", "KIN", ["MC"], 74, "Passe"),
          p("ie02-hol", 7, "Holland", "HOL", ["VOL"], 74, "Marcacao"),
          p("ie02-mca", 4, "McAteer", "MCA", ["PD"], 74, "Correria"),
          p("ie02-sta", 5, "Staunton", "STA", ["ZAG"], 76, "Capitao"),
          p("ie02-bre", 17, "Breen", "BRE", ["ZAG"], 74, "Firme"),
          p("ie02-fin", 3, "Finnan", "FIN", ["LD"], 76, "Ala"),
          p("ie02-har", 15, "Harte", "HAR", ["LE"], 74, "Bola parada"),
          p("ie02-giv", 1, "Given", "GIV", ["GOL"], 80, "Paredao")
        ]
      },
      {
        key: "mx-2002", country: "Mexico", code: "MX", year: 2002, style: "Tri de Blanco",
        players: [
          p("mx02-bla", 10, "C. Blanco", "BLA", ["MEI"], 80, "Craque"),
          p("mx02-bor", 17, "Borgetti", "BOR", ["CA"], 79, "Cabeceio"),
          p("mx02-her", 11, "L. Hernandez", "HER", ["PE"], 77, "Faro"),
          p("mx02-pal", 7, "Palencia", "PAL", ["PD"], 74, "Correria"),
          p("mx02-lun", 8, "Luna", "LUN", ["MC"], 74, "Passe"),
          p("mx02-tor", 6, "Torrado", "TOR", ["VOL"], 74, "Escudo"),
          p("mx02-mar", 4, "R. Marquez", "MAR", ["ZAG"], 78, "Lider"),
          p("mx02-car", 2, "S. Carmona", "CAR", ["ZAG"], 74, "Firme"),
          p("mx02-vid", 5, "Vidrio", "VID", ["LD"], 73, "Ala"),
          p("mx02-are", 3, "Arellano", "ARE", ["LE"], 73, "Apoio"),
          p("mx02-ope", 1, "O. Perez", "OPE", ["GOL"], 78, "Reflexo")
        ]
      },
      {
        key: "ng-2002", country: "Nigeria", code: "NG", year: 2002, style: "Super Aguias",
        players: [
          p("ng02-oko", 10, "Okocha", "OKO", ["MEI"], 82, "Magia"),
          p("ng02-kan", 4, "Kanu", "KAN", ["CA"], 80, "Elegante"),
          p("ng02-agh", 9, "Aghahowa", "AGH", ["CA"], 76, "Veloz"),
          p("ng02-bab", 7, "Babangida", "BAB", ["PE"], 74, "Drible"),
          p("ng02-wes", 8, "J. West", "WES", ["MC"], 74, "Motor"),
          p("ng02-law", 15, "G. Lawal", "LAW", ["VOL"], 74, "Marcacao"),
          p("ng02-yob", 22, "Yobo", "YOB", ["ZAG"], 74, "Firme"),
          p("ng02-sod", 5, "Sodje", "SOD", ["ZAG"], 73, "Solido"),
          p("ng02-oko2", 2, "Okoronkwo", "OKR", ["LD"], 73, "Ala"),
          p("ng02-bay", 3, "Babayaro", "BAY", ["LE"], 76, "Apoio"),
          p("ng02-eny", 1, "Enyeama", "ENY", ["GOL"], 75, "Reflexo")
        ]
      },
      {
        key: "tr-2002", country: "Turquia", code: "TR", year: 2002, style: "Terceiro lugar",
        players: [
          p("tr02-suk", 9, "H. Sukur", "SUK", ["CA"], 81, "Artilheiro"),
          p("tr02-bas", 10, "Basturk", "BAS", ["MEI"], 78, "Criacao"),
          p("tr02-emr", 8, "Emre", "EMR", ["MC"], 78, "Passe"),
          p("tr02-dav", 7, "Davala", "DAV", ["PD"], 76, "Correria"),
          p("tr02-sas", 11, "Hasan Sas", "SAS", ["PE"], 76, "Drible"),
          p("tr02-tug", 6, "Tugay", "TUG", ["VOL"], 77, "Escudo"),
          p("tr02-alp", 3, "Alpay", "ALP", ["ZAG"], 76, "Duro"),
          p("tr02-bul", 4, "Bulent", "BUL", ["ZAG"], 74, "Firme"),
          p("tr02-aky", 2, "Fatih Akyel", "AKY", ["LD"], 74, "Ala"),
          p("tr02-erg", 5, "Ergun", "ERG", ["LE"], 74, "Apoio"),
          p("tr02-rus", 1, "Rustu", "RUS", ["GOL"], 80, "Muralha")
        ]
      },
      {
        key: "jp-2002", country: "Japao", code: "JP", year: 2002, style: "Anfitria samurai",
        players: [
          p("jp02-nah", 7, "H. Nakata", "NAH", ["MEI"], 82, "Craque"),
          p("jp02-ono", 8, "Ono", "ONO", ["MC"], 77, "Talento"),
          p("jp02-ina", 18, "Inamoto", "INA", ["VOL"], 76, "Chegada"),
          p("jp02-suz", 9, "Suzuki", "SUZ", ["CA"], 74, "Correria"),
          p("jp02-yan", 11, "Yanagisawa", "YAN", ["CA"], 75, "Movimento"),
          p("jp02-tod", 5, "Toda", "TOD", ["VOL"], 74, "Marcacao"),
          p("jp02-miy", 17, "Miyamoto", "MIY", ["ZAG"], 76, "Lider"),
          p("jp02-nak", 4, "K. Nakata", "NAK", ["ZAG"], 74, "Firme"),
          p("jp02-myo", 21, "Myojin", "MYO", ["LD"], 74, "Ala"),
          p("jp02-san", 3, "Santos", "SAN", ["LE"], 74, "Apoio"),
          p("jp02-nar", 1, "Narazaki", "NAR", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "us-2002", country: "Estados Unidos", code: "US", year: 2002, style: "Surpresa nas quartas",
        players: [
          p("us02-rey", 10, "Reyna", "REY", ["MEI"], 80, "Capitao"),
          p("us02-don", 21, "Donovan", "DON", ["MEI"], 79, "Talento"),
          p("us02-mcb", 20, "McBride", "MCB", ["CA"], 78, "Cabeceio"),
          p("us02-bea", 17, "Beasley", "BEA", ["PE"], 76, "Velocidade"),
          p("us02-obr", 5, "O'Brien", "OBR", ["MC"], 76, "Passe"),
          p("us02-mas", 6, "Mastroeni", "MAS", ["VOL"], 75, "Marcacao"),
          p("us02-pop", 23, "Pope", "POP", ["ZAG"], 76, "Firme"),
          p("us02-ber", 3, "Berhalter", "BER", ["ZAG"], 74, "Solido"),
          p("us02-san", 22, "Sanneh", "SAN", ["LD"], 74, "Ala"),
          p("us02-hej", 2, "Hejduk", "HEJ", ["LE"], 74, "Correria"),
          p("us02-fri", 1, "Friedel", "FRI", ["GOL"], 82, "Paredao")
        ]
      },
      {
        key: "kr-2002", country: "Coreia do Sul", code: "KR", year: 2002, style: "Semifinal em casa",
        players: [
          p("kr02-pjs", 21, "Park Ji-sung", "PJS", ["MEI"], 80, "Motor"),
          p("kr02-ajh", 19, "Ahn Jung-hwan", "AJH", ["CA"], 78, "Heroi"),
          p("kr02-skh", 11, "Seol Ki-hyeon", "SKH", ["PE"], 76, "Correria"),
          p("kr02-ysc", 6, "Yoo Sang-chul", "YSC", ["MC"], 76, "Chegada"),
          p("kr02-kni", 5, "Kim Nam-il", "KNI", ["VOL"], 75, "Escudo"),
          p("kr02-hsh", 18, "Hwang Sun-hong", "HSH", ["CA"], 75, "Area"),
          p("kr02-hmb", 20, "Hong Myung-bo", "HMB", ["ZAG"], 79, "Capitao"),
          p("kr02-cjc", 4, "Choi Jin-cheul", "CJC", ["ZAG"], 74, "Firme"),
          p("kr02-scg", 22, "Song Chong-gug", "SCG", ["LD"], 74, "Ala"),
          p("kr02-lyp", 13, "Lee Young-pyo", "LYP", ["LE"], 76, "Apoio"),
          p("kr02-lwj", 1, "Lee Woon-jae", "LWJ", ["GOL"], 78, "Muralha")
        ]
      },
      {
        key: "cm-2002", country: "Camaroes", code: "CM", year: 2002, style: "Leoes indomaveis",
        players: [
          p("cm02-eto", 9, "Eto'o", "ETO", ["CA"], 82, "Craque"),
          p("cm02-mbo", 10, "Mboma", "MBO", ["CA"], 78, "Matador"),
          p("cm02-ger", 8, "Geremi", "GER", ["MC"], 77, "Passe"),
          p("cm02-foe", 17, "M. Foe", "FOE", ["VOL"], 78, "Motor"),
          p("cm02-ole", 6, "Olembe", "OLE", ["MEI"], 74, "Chegada"),
          p("cm02-epa", 11, "Epalle", "EPA", ["PE"], 73, "Correria"),
          p("cm02-son", 4, "R. Song", "SON", ["ZAG"], 76, "Lider"),
          p("cm02-kal", 5, "Kalla", "KAL", ["ZAG"], 74, "Firme"),
          p("cm02-lau", 2, "Lauren", "LAU", ["LD"], 76, "Ala"),
          p("cm02-wom", 3, "Wome", "WOM", ["LE"], 74, "Apoio"),
          p("cm02-ali", 1, "Alioum", "ALI", ["GOL"], 74, "Seguro")
        ]
      },
      {
        key: "sn-2002", country: "Senegal", code: "SN", year: 2002, style: "Estreia historica",
        players: [
          p("sn02-dio", 11, "El Hadji Diouf", "DIO", ["PE"], 80, "Craque"),
          p("sn02-fad", 10, "Fadiga", "FAD", ["MEI"], 78, "Criacao"),
          p("sn02-cam", 19, "Henri Camara", "CAM", ["CA"], 77, "Veloz"),
          p("sn02-bdp", 19, "Bouba Diop", "BDP", ["VOL"], 78, "Motor"),
          p("sn02-dia", 13, "Salif Diao", "DIA", ["MC"], 75, "Marcacao"),
          p("sn02-thi", 15, "Thiaw", "THI", ["CA"], 74, "Area"),
          p("sn02-dit", 6, "L. Diatta", "DIT", ["ZAG"], 75, "Capitao"),
          p("sn02-dip", 3, "PM. Diop", "DIP", ["ZAG"], 74, "Firme"),
          p("sn02-daf", 2, "Omar Daf", "DAF", ["LD"], 73, "Ala"),
          p("sn02-bey", 12, "Habib Beye", "BEY", ["LE"], 74, "Apoio"),
          p("sn02-syl", 16, "Tony Sylva", "SYL", ["GOL"], 76, "Seguro")
        ]
      },
      {
        key: "ar-1998", country: "Argentina", code: "AR", year: 1998, style: "Batigol",
        players: [
          p("ar98-bat", 9, "Batistuta", "BAT", ["CA"], 85, "Matador"),
          p("ar98-ort", 10, "Ortega", "ORT", ["MEI"], 82, "Drible"),
          p("ar98-ver", 8, "Veron", "VER", ["MC"], 80, "Maestro"),
          p("ar98-gal", 11, "Gallardo", "GAL", ["MEI"], 77, "Criacao"),
          p("ar98-lop", 7, "C. Lopez", "LOP", ["PD"], 78, "Veloz"),
          p("ar98-sim", 14, "Simeone", "SIM", ["VOL"], 82, "Raca"),
          p("ar98-aya", 2, "Ayala", "AYA", ["ZAG"], 80, "Firme"),
          p("ar98-cha", 6, "Chamot", "CHA", ["ZAG"], 76, "Solido"),
          p("ar98-zan", 4, "Zanetti", "ZAN", ["LD"], 82, "Pulmao"),
          p("ar98-sen", 3, "Sensini", "SEN", ["LE"], 74, "Apoio"),
          p("ar98-roa", 1, "Roa", "ROA", ["GOL"], 78, "Reflexo")
        ]
      },
      {
        key: "en-1998", country: "Inglaterra", code: "EN", year: 1998, style: "Owen surge",
        players: [
          p("en98-she", 9, "Shearer", "SHE", ["CA"], 85, "Capitao"),
          p("en98-owe", 20, "Owen", "OWE", ["CA"], 80, "Joia"),
          p("en98-bec", 7, "Beckham", "BEC", ["PD"], 82, "Cruzamento"),
          p("en98-sch", 8, "Scholes", "SCH", ["MEI"], 80, "Passe"),
          p("en98-inc", 4, "Ince", "INC", ["VOL"], 79, "Motor"),
          p("en98-and", 11, "Anderton", "AND", ["PE"], 76, "Correria"),
          p("en98-ada", 6, "Adams", "ADA", ["ZAG"], 82, "Capitao"),
          p("en98-cam", 5, "S. Campbell", "CAM", ["ZAG"], 80, "Forte"),
          p("en98-nev", 2, "G. Neville", "NEV", ["LD"], 78, "Ala"),
          p("en98-les", 3, "Le Saux", "LES", ["LE"], 76, "Apoio"),
          p("en98-sea", 1, "Seaman", "SEA", ["GOL"], 82, "Paredao")
        ]
      },
      {
        key: "it-1998", country: "Italia", code: "IT", year: 1998, style: "Divino Baggio",
        players: [
          p("it98-bag", 18, "R. Baggio", "BAG", ["MEI"], 84, "Divino"),
          p("it98-dpi", 10, "Del Piero", "DPI", ["CA"], 82, "Talento"),
          p("it98-vie", 9, "Vieri", "VIE", ["CA"], 82, "Torre"),
          p("it98-dib", 16, "Di Biagio", "DIB", ["MC"], 76, "Chegada"),
          p("it98-alb", 5, "Albertini", "ALB", ["MC"], 78, "Passe"),
          p("it98-dba", 7, "D. Baggio", "DBA", ["VOL"], 77, "Marcacao"),
          p("it98-can", 4, "Cannavaro", "CAN", ["ZAG"], 80, "Elegante"),
          p("it98-nes", 13, "Nesta", "NES", ["ZAG"], 79, "Solido"),
          p("it98-ber", 2, "Bergomi", "BER", ["LD"], 76, "Experiente"),
          p("it98-mal", 3, "Maldini", "MAL", ["LE"], 85, "Capitao"),
          p("it98-pag", 1, "Pagliuca", "PAG", ["GOL"], 79, "Seguro")
        ]
      },
      {
        key: "nl-1998", country: "Holanda", code: "NL", year: 1998, style: "Laranja mecanica",
        players: [
          p("nl98-ber", 10, "Bergkamp", "BER", ["CA"], 86, "Craque"),
          p("nl98-klu", 9, "Kluivert", "KLU", ["CA"], 82, "Matador"),
          p("nl98-ove", 11, "Overmars", "OVE", ["PE"], 82, "Foguete"),
          p("nl98-dav", 8, "Davids", "DAV", ["VOL"], 83, "Pitbull"),
          p("nl98-coc", 6, "Cocu", "COC", ["MC"], 79, "Motor"),
          p("nl98-rdb", 7, "R. de Boer", "RDB", ["MEI"], 78, "Criacao"),
          p("nl98-fdb", 4, "F. de Boer", "FDB", ["ZAG"], 80, "Saida"),
          p("nl98-sta", 3, "Stam", "STA", ["ZAG"], 82, "Muralha"),
          p("nl98-rei", 2, "Reiziger", "REI", ["LD"], 77, "Ala"),
          p("nl98-num", 5, "Numan", "NUM", ["LE"], 76, "Apoio"),
          p("nl98-vds", 1, "Van der Sar", "VDS", ["GOL"], 82, "Paredao")
        ]
      },
      {
        key: "de-1998", country: "Alemanha", code: "DE", year: 1998, style: "Veteranos alemaes",
        players: [
          p("de98-kli", 18, "Klinsmann", "KLI", ["CA"], 82, "Capitao"),
          p("de98-bie", 20, "Bierhoff", "BIE", ["CA"], 80, "Cabeceio"),
          p("de98-mat", 10, "Matthaus", "MAT", ["VOL"], 82, "Libero"),
          p("de98-ham", 16, "Hamann", "HAM", ["VOL"], 78, "Escudo"),
          p("de98-mol", 11, "Moller", "MOL", ["MEI"], 79, "Criacao"),
          p("de98-bas", 8, "Basler", "BAS", ["PD"], 77, "Canhota"),
          p("de98-koh", 5, "Kohler", "KOH", ["ZAG"], 78, "Firme"),
          p("de98-hel", 4, "Helmer", "HEL", ["ZAG"], 76, "Solido"),
          p("de98-reu", 2, "Reuter", "REU", ["LD"], 74, "Ala"),
          p("de98-zie", 3, "Ziege", "ZIE", ["LE"], 77, "Apoio"),
          p("de98-kop", 1, "Kopke", "KOP", ["GOL"], 79, "Seguro")
        ]
      },
      {
        key: "yu-1998", country: "Iugoslavia", code: "YU", year: 1998, style: "Talento balcanico",
        players: [
          p("yu98-sto", 10, "Stojkovic", "STO", ["MEI"], 82, "Maestro"),
          p("yu98-sav", 8, "Savicevic", "SAV", ["MEI"], 80, "Genio"),
          p("yu98-mij", 9, "Mijatovic", "MIJ", ["CA"], 80, "Faro"),
          p("yu98-kov", 18, "Kovacevic", "KOV", ["CA"], 76, "Area"),
          p("yu98-jug", 7, "Jugovic", "JUG", ["MC"], 77, "Chegada"),
          p("yu98-jok", 6, "Jokanovic", "JOK", ["VOL"], 75, "Marcacao"),
          p("yu98-mih", 4, "Mihajlovic", "MIH", ["ZAG"], 79, "Canhao"),
          p("yu98-dju", 5, "Djukic", "DJU", ["ZAG"], 76, "Firme"),
          p("yu98-kom", 2, "Komljenovic", "KOM", ["LD"], 74, "Ala"),
          p("yu98-brn", 3, "Brnovic", "BRN", ["LE"], 74, "Apoio"),
          p("yu98-kra", 1, "Kralj", "KRA", ["GOL"], 74, "Seguro")
        ]
      },
      {
        key: "hr-1998", country: "Croacia", code: "HR", year: 1998, style: "Terceiro lugar",
        players: [
          p("hr98-suk", 9, "Suker", "SUK", ["CA"], 86, "Bola de ouro do gol"),
          p("hr98-bob", 10, "Boban", "BOB", ["MEI"], 82, "Capitao"),
          p("hr98-pro", 8, "Prosinecki", "PRO", ["MEI"], 80, "Genio"),
          p("hr98-asa", 7, "Asanovic", "ASA", ["MC"], 78, "Passe"),
          p("hr98-sta", 18, "Stanic", "STA", ["PD"], 76, "Correria"),
          p("hr98-sol", 4, "Soldo", "SOL", ["VOL"], 76, "Escudo"),
          p("hr98-sti", 5, "Stimac", "STI", ["ZAG"], 78, "Firme"),
          p("hr98-bil", 6, "Bilic", "BIL", ["ZAG"], 78, "Duro"),
          p("hr98-sim", 2, "D. Simic", "SIM", ["LD"], 76, "Ala"),
          p("hr98-jar", 3, "Jarni", "JAR", ["LE"], 78, "Canhota"),
          p("hr98-lad", 1, "Ladic", "LAD", ["GOL"], 74, "Seguro")
        ]
      },
      {
        key: "ng-1998", country: "Nigeria", code: "NG", year: 1998, style: "Super Aguias douradas",
        players: [
          p("ng98-oko", 10, "Okocha", "OKO", ["MEI"], 80, "Magia"),
          p("ng98-kan", 4, "Kanu", "KAN", ["CA"], 79, "Elegante"),
          p("ng98-ikp", 9, "Ikpeba", "IKP", ["CA"], 77, "Faro"),
          p("ng98-fin", 7, "Finidi George", "FIN", ["PE"], 78, "Drible"),
          p("ng98-ade", 8, "Adepoju", "ADE", ["MC"], 74, "Motor"),
          p("ng98-oli", 5, "Oliseh", "OLI", ["VOL"], 78, "Chute"),
          p("ng98-wes", 2, "T. West", "WES", ["ZAG"], 76, "Duro"),
          p("ng98-oke", 6, "Okechukwu", "OKE", ["ZAG"], 74, "Firme"),
          p("ng98-opa", 13, "Oparaku", "OPA", ["LD"], 73, "Ala"),
          p("ng98-bay", 3, "Babayaro", "BAY", ["LE"], 74, "Apoio"),
          p("ng98-ruf", 1, "Rufai", "RUF", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "dk-1998", country: "Dinamarca", code: "DK", year: 1998, style: "Irmaos Laudrup",
        players: [
          p("dk98-mla", 11, "M. Laudrup", "MLA", ["MEI"], 83, "Genio"),
          p("dk98-bla", 10, "B. Laudrup", "BLA", ["MEI"], 82, "Craque"),
          p("dk98-san", 20, "Sand", "SAND", ["CA"], 76, "Area"),
          p("dk98-mol", 9, "Molnar", "MOL", ["CA"], 74, "Faro"),
          p("dk98-jor", 7, "M. Jorgensen", "JOR", ["VOL"], 74, "Motor"),
          p("dk98-sch2", 6, "Schjonberg", "SCJ", ["MC"], 73, "Marcacao"),
          p("dk98-hog", 4, "Hogh", "HOG", ["ZAG"], 76, "Firme"),
          p("dk98-rie", 5, "Rieper", "RIE", ["ZAG"], 76, "Solido"),
          p("dk98-hel", 2, "Helveg", "HEL", ["LD"], 74, "Ala"),
          p("dk98-hei", 3, "Heintze", "HEI", ["LE"], 74, "Apoio"),
          p("dk98-sch", 1, "Schmeichel", "SCH", ["GOL"], 85, "Paredao")
        ]
      },
      {
        key: "cl-1998", country: "Chile", code: "CL", year: 1998, style: "Sa-Za",
        players: [
          p("cl98-sal", 11, "Salas", "SAL", ["CA"], 82, "Matador"),
          p("cl98-zam", 9, "Zamorano", "ZAM", ["CA"], 82, "Capitao"),
          p("cl98-sie", 8, "Sierra", "SIE", ["MEI"], 78, "Mago"),
          p("cl98-acu", 6, "C. Acuna", "ACU", ["MC"], 76, "Motor"),
          p("cl98-roj", 4, "F. Rojas", "ROJ", ["VOL"], 74, "Marcacao"),
          p("cl98-bar", 7, "Barrera", "BAR", ["PD"], 74, "Correria"),
          p("cl98-mar", 2, "Margas", "MAR", ["ZAG"], 76, "Firme"),
          p("cl98-par", 3, "Parraguez", "PAR", ["ZAG"], 74, "Solido"),
          p("cl98-rey", 5, "P. Reyes", "REY", ["LD"], 74, "Ala"),
          p("cl98-fue", 15, "Fuentes", "FUE", ["LE"], 74, "Apoio"),
          p("cl98-tap", 1, "N. Tapia", "TAP", ["GOL"], 76, "Seguro")
        ]
      },
      {
        key: "co-1998", country: "Colombia", code: "CO", year: 1998, style: "Pibe Valderrama",
        players: [
          p("co98-val", 10, "Valderrama", "VAL", ["MEI"], 84, "Pibe"),
          p("co98-rin", 8, "Rincon", "RIN", ["MC"], 79, "Motor"),
          p("co98-asp", 9, "Asprilla", "ASP", ["PE"], 80, "Explosao"),
          p("co98-ari", 11, "Aristizabal", "ARI", ["CA"], 76, "Faro"),
          p("co98-ale", 7, "A. Valencia", "ALE", ["CA"], 76, "Area"),
          p("co98-ser", 6, "Serna", "SER", ["VOL"], 76, "Escudo"),
          p("co98-ber", 2, "Bermudez", "BER", ["ZAG"], 78, "Capitao"),
          p("co98-pal", 4, "Palacios", "PAL", ["ZAG"], 74, "Firme"),
          p("co98-cab", 5, "Cabrera", "CAB", ["LD"], 74, "Ala"),
          p("co98-mor", 3, "E. Moreno", "MOR", ["LE"], 74, "Apoio"),
          p("co98-mon", 1, "Mondragon", "MON", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "py-1998", country: "Paraguai", code: "PY", year: 1998, style: "Chilavert",
        players: [
          p("py98-chi", 1, "Chilavert", "CHI", ["GOL"], 84, "Goleiro artilheiro"),
          p("py98-car", 9, "J. Cardozo", "CAR", ["CA"], 78, "Matador"),
          p("py98-bri", 19, "Brizuela", "BRI", ["CA"], 74, "Area"),
          p("py98-cam", 10, "Campos", "CAM", ["PE"], 74, "Drible"),
          p("py98-par", 8, "Paredes", "PAR", ["MEI"], 74, "Passe"),
          p("py98-enc", 6, "Enciso", "ENC", ["MC"], 74, "Motor"),
          p("py98-ben", 5, "Benitez", "BEN", ["VOL"], 74, "Marcacao"),
          p("py98-gam", 6, "Gamarra", "GAM", ["ZAG"], 80, "Capitao"),
          p("py98-aya", 2, "C. Ayala", "AYA", ["ZAG"], 76, "Firme"),
          p("py98-arc", 4, "Arce", "ARC", ["LD"], 76, "Ala"),
          p("py98-acu", 3, "R. Acuna", "ACU", ["LE"], 76, "Apoio")
        ]
      },
      {
        key: "br-1994", country: "Brasil", code: "BR", year: 1994, style: "Tetracampea",
        players: [
          p("br94-rom", 11, "Romario", "ROM", ["CA"], 88, "Baixinho"),
          p("br94-beb", 7, "Bebeto", "BEB", ["CA"], 84, "Faro"),
          p("br94-rai", 10, "Rai", "RAI", ["MEI"], 79, "Capitao"),
          p("br94-maz", 8, "Mazinho", "MAZ", ["MC"], 76, "Motor"),
          p("br94-dun", 8, "Dunga", "DUN", ["VOL"], 82, "Lider"),
          p("br94-zin", 17, "Zinho", "ZIN", ["PE"], 77, "Criacao"),
          p("br94-ald", 3, "Aldair", "ALD", ["ZAG"], 82, "Elegante"),
          p("br94-msa", 5, "Marcio Santos", "MSA", ["ZAG"], 77, "Firme"),
          p("br94-jor", 2, "Jorginho", "JOR", ["LD"], 78, "Ala"),
          p("br94-bra", 6, "Branco", "BRA", ["LE"], 77, "Canhao"),
          p("br94-taf", 1, "Taffarel", "TAF", ["GOL"], 82, "Paredao")
        ]
      },
      {
        key: "ar-1994", country: "Argentina", code: "AR", year: 1994, style: "Ultima de Maradona",
        players: [
          p("ar94-mar", 10, "Maradona", "MAR", ["MEI"], 85, "Genio"),
          p("ar94-bat", 9, "Batistuta", "BAT", ["CA"], 84, "Matador"),
          p("ar94-can", 7, "Caniggia", "CAN", ["PE"], 80, "Velocidade"),
          p("ar94-bal", 11, "Balbo", "BAL", ["CA"], 78, "Area"),
          p("ar94-red", 5, "Redondo", "RED", ["MC"], 82, "Elegante"),
          p("ar94-sim", 14, "Simeone", "SIM", ["VOL"], 79, "Raca"),
          p("ar94-rug", 2, "Ruggeri", "RUG", ["ZAG"], 79, "Capitao"),
          p("ar94-cac", 6, "F. Caceres", "CAC", ["ZAG"], 74, "Firme"),
          p("ar94-sen", 4, "Sensini", "SEN", ["LD"], 74, "Ala"),
          p("ar94-cha", 3, "Chamot", "CHA", ["LE"], 74, "Apoio"),
          p("ar94-isl", 1, "Islas", "ISL", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "it-1994", country: "Italia", code: "IT", year: 1994, style: "Codino divino",
        players: [
          p("it94-bag", 10, "R. Baggio", "BAG", ["MEI"], 88, "Divino"),
          p("it94-sig", 11, "Signori", "SIG", ["CA"], 80, "Faro"),
          p("it94-mas", 19, "Massaro", "MAS", ["CA"], 76, "Oportunista"),
          p("it94-alb", 5, "Albertini", "ALB", ["MC"], 78, "Passe"),
          p("it94-dba", 16, "D. Baggio", "DBA", ["VOL"], 78, "Marcacao"),
          p("it94-don", 7, "Donadoni", "DON", ["PE"], 79, "Drible"),
          p("it94-bar", 6, "Baresi", "BARE", ["ZAG"], 86, "Capitao"),
          p("it94-cos", 5, "Costacurta", "COS", ["ZAG"], 78, "Firme"),
          p("it94-mus", 2, "Mussi", "MUS", ["LD"], 74, "Ala"),
          p("it94-mal", 3, "Maldini", "MAL", ["LE"], 84, "Elegante"),
          p("it94-pag", 1, "Pagliuca", "PAG", ["GOL"], 78, "Seguro")
        ]
      },
      {
        key: "de-1994", country: "Alemanha", code: "DE", year: 1994, style: "Campea em transicao",
        players: [
          p("de94-kli", 18, "Klinsmann", "KLI", ["CA"], 84, "Craque"),
          p("de94-vol", 9, "Voller", "VOL", ["CA"], 82, "Faro"),
          p("de94-mat", 10, "Matthaus", "MAT", ["VOL"], 84, "Capitao"),
          p("de94-eff", 8, "Effenberg", "EFF", ["MC"], 79, "Motor"),
          p("de94-has", 14, "Hassler", "HAS", ["MEI"], 79, "Criacao"),
          p("de94-mol", 11, "Moller", "MOL", ["MEI"], 78, "Chegada"),
          p("de94-koh", 5, "Kohler", "KOH", ["ZAG"], 78, "Firme"),
          p("de94-buc", 4, "Buchwald", "BUC", ["ZAG"], 78, "Solido"),
          p("de94-ber", 2, "Berthold", "BER", ["LD"], 74, "Ala"),
          p("de94-bre", 3, "Brehme", "BRE", ["LE"], 78, "Canhota"),
          p("de94-ill", 1, "Illgner", "ILL", ["GOL"], 78, "Reflexo")
        ]
      },
      {
        key: "nl-1994", country: "Holanda", code: "NL", year: 1994, style: "Escola laranja",
        players: [
          p("nl94-ber", 8, "Bergkamp", "BER", ["CA"], 84, "Craque"),
          p("nl94-ove", 11, "Overmars", "OVE", ["PE"], 80, "Foguete"),
          p("nl94-roy", 9, "Roy", "ROY", ["CA"], 76, "Area"),
          p("nl94-rij", 5, "Rijkaard", "RIJ", ["VOL"], 84, "Completo"),
          p("nl94-jon", 6, "Jonk", "JON", ["MC"], 77, "Passe"),
          p("nl94-wou", 7, "Wouters", "WOU", ["MC"], 76, "Marcacao"),
          p("nl94-koe", 4, "R. Koeman", "KOE", ["ZAG"], 84, "Canhao"),
          p("nl94-fdb", 3, "F. de Boer", "FDB", ["ZAG"], 78, "Saida"),
          p("nl94-rei", 2, "Reiziger", "REI", ["LD"], 74, "Ala"),
          p("nl94-win", 15, "Winter", "WIN", ["LE"], 76, "Apoio"),
          p("nl94-dgo", 1, "De Goey", "DGO", ["GOL"], 76, "Seguro")
        ]
      },
      {
        key: "mx-1994", country: "Mexico", code: "MX", year: 1994, style: "Jorge Campos",
        players: [
          p("mx94-cam", 1, "J. Campos", "CAM", ["GOL"], 80, "Colorido"),
          p("mx94-asp", 8, "Garcia Aspe", "ASP", ["MEI"], 78, "Batido"),
          p("mx94-gar", 11, "L. Garcia", "GAR", ["CA"], 77, "Faro"),
          p("mx94-zag", 7, "Zague", "ZAG", ["CA"], 74, "Area"),
          p("mx94-amb", 6, "Ambriz", "AMB", ["MC"], 74, "Motor"),
          p("mx94-ber", 5, "Bernal", "BER", ["VOL"], 74, "Marcacao"),
          p("mx94-gal", 9, "Galindo", "GAL", ["PD"], 73, "Correria"),
          p("mx94-ram", 2, "R. Ramirez", "RAM", ["ZAG"], 74, "Firme"),
          p("mx94-sua", 4, "C. Suarez", "SUA", ["ZAG"], 74, "Solido"),
          p("mx94-gut", 3, "Gutierrez", "GUT", ["LD"], 73, "Ala"),
          p("mx94-dol", 15, "Del Olmo", "DOL", ["LE"], 73, "Apoio")
        ]
      },
      {
        key: "ro-1994", country: "Romenia", code: "RO", year: 1994, style: "Maradona dos Carpatos",
        players: [
          p("ro94-hag", 10, "Hagi", "HAG", ["MEI"], 86, "Genio"),
          p("ro94-rad", 9, "Raducioiu", "RAD", ["CA"], 79, "Faro"),
          p("ro94-dum", 11, "Dumitrescu", "DUM", ["PE"], 78, "Drible"),
          p("ro94-pop", 6, "G. Popescu", "POP", ["VOL"], 80, "Elegante"),
          p("ro94-lup", 8, "Lupescu", "LUP", ["MC"], 76, "Passe"),
          p("ro94-mun", 14, "D. Munteanu", "MUN", ["MC"], 74, "Motor"),
          p("ro94-pro", 5, "Prodan", "PRO", ["ZAG"], 76, "Firme"),
          p("ro94-bel", 4, "Belodedici", "BEL", ["ZAG"], 76, "Libero"),
          p("ro94-pet", 2, "Petrescu", "PET", ["LD"], 78, "Ala"),
          p("ro94-sel", 3, "Selymes", "SEL", ["LE"], 74, "Apoio"),
          p("ro94-ste", 1, "Stelea", "STE", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "se-1994", country: "Suecia", code: "SE", year: 1994, style: "Bronze e futebol vertical",
        players: [
          p("se94-bro", 11, "Brolin", "BRO", ["MEI"], 82, "Talento"),
          p("se94-kan", 9, "K. Andersson", "KAN", ["CA"], 79, "Artilheiro"),
          p("se94-dah", 10, "Dahlin", "DAH", ["CA"], 78, "Veloz"),
          p("se94-sch", 8, "Schwarz", "SCH", ["MC"], 78, "Passe"),
          p("se94-the", 6, "Thern", "THE", ["VOL"], 78, "Capitao"),
          p("se94-ing", 7, "Ingesson", "ING", ["MC"], 74, "Motor"),
          p("se94-pan", 4, "P. Andersson", "PAN", ["ZAG"], 76, "Firme"),
          p("se94-bjo", 5, "Bjorklund", "BJO", ["ZAG"], 76, "Solido"),
          p("se94-nil", 2, "R. Nilsson", "NIL", ["LD"], 76, "Ala"),
          p("se94-lju", 3, "Ljung", "LJU", ["LE"], 74, "Apoio"),
          p("se94-rav", 1, "Ravelli", "RAV", ["GOL"], 78, "Reflexo")
        ]
      },
      {
        key: "bg-1994", country: "Bulgaria", code: "BG", year: 1994, style: "Semifinal surpresa",
        players: [
          p("bg94-sto", 8, "Stoichkov", "STO", ["PE"], 87, "Craque"),
          p("bg94-bal", 10, "Balakov", "BAL", ["MEI"], 80, "Maestro"),
          p("bg94-kos", 9, "Kostadinov", "KOS", ["CA"], 77, "Decisivo"),
          p("bg94-sir", 11, "Sirakov", "SIR", ["CA"], 76, "Area"),
          p("bg94-let", 7, "Letchkov", "LET", ["MC"], 78, "Chegada"),
          p("bg94-yan", 6, "Yankov", "YAN", ["VOL"], 74, "Marcacao"),
          p("bg94-iva", 5, "T. Ivanov", "IVA", ["ZAG"], 76, "Firme"),
          p("bg94-hub", 4, "Hubchev", "HUB", ["ZAG"], 74, "Solido"),
          p("bg94-kir", 2, "Kiriakov", "KIR", ["LD"], 74, "Ala"),
          p("bg94-tsv", 3, "Tsvetanov", "TSV", ["LE"], 74, "Apoio"),
          p("bg94-mih", 1, "B. Mihailov", "MIH", ["GOL"], 78, "Capitao")
        ]
      },
      {
        key: "co-1994", country: "Colombia", code: "CO", year: 1994, style: "Cafeteros de Pekerman",
        players: [
          p("co94-val", 10, "Valderrama", "VAL", ["MEI"], 84, "Pibe"),
          p("co94-asp", 9, "Asprilla", "ASP", ["PE"], 80, "Explosao"),
          p("co94-rin", 8, "Rincon", "RIN", ["MC"], 79, "Motor"),
          p("co94-ale", 11, "A. Valencia", "ALE", ["CA"], 76, "Area"),
          p("co94-alv", 7, "Alvarez", "ALV", ["PD"], 74, "Correria"),
          p("co94-her", 6, "Herrera", "HER", ["VOL"], 74, "Marcacao"),
          p("co94-per", 2, "L. Perea", "PER", ["ZAG"], 76, "Firme"),
          p("co94-esc", 4, "A. Escobar", "ESC", ["ZAG"], 76, "Solido"),
          p("co94-men", 5, "Mendoza", "MEN", ["LD"], 74, "Ala"),
          p("co94-wpe", 3, "W. Perez", "WPE", ["LE"], 74, "Apoio"),
          p("co94-cor", 1, "O. Cordoba", "COR", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "ng-1994", country: "Nigeria", code: "NG", year: 1994, style: "Estreia dourada",
        players: [
          p("ng94-yek", 9, "Yekini", "YEK", ["CA"], 80, "Artilheiro"),
          p("ng94-amo", 11, "Amokachi", "AMO", ["CA"], 78, "Potencia"),
          p("ng94-amu", 15, "Amunike", "AMU", ["PE"], 78, "Velocidade"),
          p("ng94-oko", 10, "Okocha", "OKO", ["MEI"], 78, "Magia"),
          p("ng94-fin", 7, "Finidi George", "FIN", ["PD"], 77, "Drible"),
          p("ng94-oli", 4, "Oliseh", "OLI", ["VOL"], 76, "Chute"),
          p("ng94-kes", 6, "Keshi", "KES", ["ZAG"], 76, "Capitao"),
          p("ng94-oke", 5, "Okechukwu", "OKE", ["ZAG"], 74, "Firme"),
          p("ng94-egu", 2, "Eguavoen", "EGU", ["LD"], 74, "Ala"),
          p("ng94-ade", 8, "Adepoju", "ADE", ["LE"], 74, "Apoio"),
          p("ng94-ruf", 1, "Rufai", "RUF", ["GOL"], 76, "Reflexo")
        ]
      },
      {
        key: "us-1994", country: "Estados Unidos", code: "US", year: 1994, style: "Anfitria surpreendente",
        players: [
          p("us94-wyn", 11, "Wynalda", "WYN", ["CA"], 77, "Faro"),
          p("us94-ram", 10, "T. Ramos", "RAM", ["MEI"], 76, "Criacao"),
          p("us94-har", 6, "Harkes", "HAR", ["MC"], 76, "Motor"),
          p("us94-doo", 14, "Dooley", "DOO", ["VOL"], 76, "Marcacao"),
          p("us94-ste", 8, "E. Stewart", "STE", ["CA"], 74, "Correria"),
          p("us94-cal", 7, "Caligiuri", "CAL", ["PD"], 74, "Chute"),
          p("us94-lal", 22, "Lalas", "LAL", ["ZAG"], 76, "Ruivo"),
          p("us94-sor", 4, "Sorber", "SOR", ["ZAG"], 74, "Firme"),
          p("us94-bal", 15, "Balboa", "BAL", ["VOL"], 76, "Lider"),
          p("us94-ago", 5, "Agoos", "AGO", ["LE"], 73, "Apoio"),
          p("us94-meo", 1, "Meola", "MEO", ["GOL"], 78, "Paredao")
        ]
      },
    // <<APPEND>>
  ];
})();
