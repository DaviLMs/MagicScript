const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log('Bem vindo!');

rl.question("Digite um numero", (resposta) => {
 const numero = parseInt(resposta, 10)

    if (isNaN(numero)) {
        console.log("O valor digitado não é um número.");
        rl.close();
    } else {
        for (let i = 0; i <= 10; i++){
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

})