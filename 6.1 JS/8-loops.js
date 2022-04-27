// ATALHOS

// CTRL K U = TIRA COMENTÁRIOS
// CTRL K C = ADICIONA COMENTÁRIOS
// CTRL SHIFT F = FORMATA O TEXTO 
// SHIT CIMA = MARCA TUDO ATE EM CIMA
// SHIF LADOS =...
// ALT SHIFT SETA = COPIA LINHA SELECIONADA PRA BAIXO


console.log(`Trabalhando com condicionais`);
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

//Trabalhando com array

///Existem palavras reservadas da linguagem, onde não posso usar em nada. New é uma delas
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

)

const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        console.log("Boa viagem até: " + listaDeDestinos[contador] + "!");
        break
       
    }
    contador += 1;
}

if (destinoExiste == false) {
    console.log("Destino inexistente")
    
}

// if (podeComrpar) {
//     console.log(`Os destino disponíveis são:  ${listaDeDestinos[1]}, ${listaDeDestinos[2]}`)
//     temPassagemComprada = true;
// } else {
//     console.log("Você é de menor e não está acompanhado")
//     temPassagemComprada = false;
// }

// console.log(`Embarque: \n\n`);
// if (idadeComprador >= 18 && temPassagemComprada) {
//     console.log(`Boa viagem!`);

// } else {
//     console.log(`Você não pode embarcar...`)

// }