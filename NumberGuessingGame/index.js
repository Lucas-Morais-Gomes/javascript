const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Adivinhe o número entre ${minNum} e ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Por favor digite um número válido...");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Por favor digite um número válido...");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("MUITO BAIXO! TENTE NOVAMENTE!");
    } else if (guess > answer) {
      window.alert("MUITO ALTO! TENTE NOVAMENTE!");
    } else {
      window.alert(
        `CORRETO! A REPOSTA É ${answer}! ISSO TE CUSTOU ${attempts} TENTATIVAS!`
      );
      running = false;
    }
  }
}
