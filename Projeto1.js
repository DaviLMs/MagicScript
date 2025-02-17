const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// console.log(numeroSecreto);

let tentativas = 0

console.log("Bem vindo!");
console.log("Tente adivinhar o numero!");

function pergunta() {
    rl.question("Digite o numero: ", (resposta) => {
        const numero = parseInt(resposta, 10)
        tentativas++    
        if (numero === numeroSecreto) {
            if (tentativas === 1) {
                console.log('De Primeira!');
            }
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
            rl.close();
        }
        else if (numero < numeroSecreto) {
            console.log("O número é maior.");
            pergunta();
        } else {
            console.log("O número é menor.");
            pergunta();
        }
    })
}
pergunta();

