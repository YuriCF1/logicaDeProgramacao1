console.log(`Trabalhando com listas`);
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

listaDeDestinos.push( `Curitiba`, `Pilar`) //Adicionadno elementos dentro da lista

console.log(`Destinos possíveis`);

//como remover um elemento

listaDeDestinos.splice(3,1);   //3- Posição do elemento | 1- Quantidade de itens a serem excluídos
console.log(listaDeDestinos);

//como mostrar só um elemento
console.log(listaDeDestinos[0], listaDeDestinos[1]);





