console.clear();

const prompt = require("prompt-sync")();
const jokenpo = ["PEDRA  ", "", "TESOURA", "", "", "PAPEL  "];
const opcoes = [0, 2, 5];
let placar = [0, 0];

while (true) {
  function intro() {
    console.log("######################################");
    console.log("############## JOKENPÔ ###############");
    console.log("######################################");
    console.log("####### PEDRA ganha da TESOURA #######");
    console.log("####### TESOURA ganha do PAPEL #######");
    console.log("######## PAPEL ganha da PEDRA ########");
    console.log("######################################");
    console.log("PEDRA = 0    TESOURA = 2     PAPEL = 5");
    console.log("######################################\n");
  }

  intro();
  let qtdJogadas = Math.floor(parseInt(prompt("Quer jogar quantas vezes? ")));
  console.clear();

  while (isNaN(qtdJogadas)) {
    intro();
    qtdJogadas = Math.floor(parseInt(prompt("Quer jogar quantas vezes? ")));
    console.clear();
  }

  // Inicio do jogo
  let cont = 0;
  while (cont < qtdJogadas) {
    const maquina = opcoes[Math.floor(Math.random() * 3)];

    console.log(
      `Jogada ${cont + 1}/${qtdJogadas} - PEDRA(0), PAPEL(5) ou TESOURA(2)? `
    );
    let jogador = parseInt(prompt());

    while (jogador != 0 && jogador != 2 && jogador != 5) {
      console.clear();
      console.log(
        `Jogada ${cont + 1}/${qtdJogadas} - PEDRA(0), PAPEL(5) ou TESOURA(2)? `
      );
      jogador = parseInt(prompt());
    }

    function vitoria() {
      console.log(`Jogador: ${jokenpo[jogador]} ${jogador}    V I T Ó R I A`);
      console.log(`Máquina: ${jokenpo[maquina]} ${maquina}    ! ! ! ! ! ! !`);
    }
    function empate() {
      console.log(`Jogador: ${jokenpo[jogador]} ${jogador}      E M P A T E`);
      console.log(`Máquina: ${jokenpo[maquina]} ${maquina}      ! ! ! ! ! !`);
    }

    function derrota() {
      console.log(`Jogador: ${jokenpo[jogador]} ${jogador}    D E R R O T A`);
      console.log(`Máquina: ${jokenpo[maquina]} ${maquina}    ! ! ! ! ! ! !`);
    }

    console.clear();
    intro();
    if (jogador == maquina) {
      empate();
    } else if (
      (jogador < maquina && maquina - jogador <= 3) ||
      (jogador > maquina && jogador - maquina > 3)
    ) {
      placar[0] += 1;
      vitoria();
    } else {
      placar[1] += 1;
      derrota();
    }
    console.log();

    cont++;
  }

  console.clear();
  intro();
  console.log("############### PLACAR ###############");
  console.log(`######## JOGADOR ${placar[0]} x ${placar[1]} MÁQUINA #######\n`);
  console.log(`Jogadas:  ${qtdJogadas}`);
  console.log(`Empates:  ${qtdJogadas - placar[0] - placar[1]}`);
  console.log();

  const denovo = prompt("Deseja jogar novamente? Sim(S) ou Não(N)? ");
  if (denovo.toLowerCase() == "n") {
    console.log("############ FIM DE JOGO #############");
    break;
  }
  console.clear();
}
