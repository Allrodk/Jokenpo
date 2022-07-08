console.clear();

console.log("######################################");
console.log("############## JOKENPÔ ###############");
console.log("######################################");
console.log("####### PEDRA ganha da TESOURA #######");
console.log("####### TESOURA ganha do PAPEL #######");
console.log("######## PAPEL ganha da PEDRA ########");
console.log("######################################");
console.log("PEDRA = 0    TESOURA = 2     PAPEL = 5");
console.log("######################################\n");

const prompt = require("prompt-sync")();
const jokenpo = ["PEDRA", "", "TESOURA", "", "", "PAPEL"];
const opcoes = [0, 2, 5];
let placar = [0, 0];

// Quantidade de jogadas
const qtdJogadas = parseInt(prompt("Quer jogar quantas vezes? "));

// Inicio do jogo
let cont = 0;
while (cont < qtdJogadas) {
  const maquina = opcoes[Math.floor(Math.random() * 3)];

  const jogador = parseInt(
    prompt(`${cont + 1}ª Jogada - PEDRA(0), PAPEL(5) ou TESOURA(2)? `)
  );

  console.log(`\nJogador: ${jokenpo[jogador]} ${jogador}`);
  console.log(`Máquina: ${jokenpo[maquina]} ${maquina}`);

  if (
    (jogador < maquina && maquina - jogador <= 3) ||
    (jogador > maquina && jogador - maquina > 3)
  ) {
    placar[0] += 1;
  } else if (jogador != maquina) {
    placar[1] += 1;
  }

  console.log("############### PLACAR ###############");
  console.log(`######## JOGADOR ${placar[0]} x ${placar[1]} MÁQUINA #######\n`);

  cont++;
}
