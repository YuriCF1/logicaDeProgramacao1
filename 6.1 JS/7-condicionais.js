// ATALHOS

// CTRL K U = TIRA COMENTÁRIOS
// CTRL K C = ADICIONA COMENTÁRIOS
// CTRL SHIFT F = FORMATA O TEXTO 
// SHIT CIMA = MARCA TUDO ATE EM CIMA
// SHIF LADOS =...
// ALT SHIFT SETA = COPIA LINHA SELECIONADA PRA BAIXO
//CTRL D = Dois cliquei na palavra, e ele marca a proxima palavra no cursor pra editar tudo de uma vez!

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
const temPassagemComprada = true;


if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Boa viagem!`);
    console.log(`Os destino disponíveis são:  ${listaDeDestinos[1]}, ${listaDeDestinos[2]}`)

} else {
    console.log("Você é de menor e não está acompanhado")
}

console.log(`Embarque: \n\n`);
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log(`Boa viagem!`);

} else {
    console.log(`Você não pode embarcar...`)

}