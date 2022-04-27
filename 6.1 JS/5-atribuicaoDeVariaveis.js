//JS é case sensitive//
console.log("Trabalhando com atribuição de variáveis");

let primeiroNome = "Yuri";
const sobreNome = "Cruz";
const idade = 23;

console.log(idade);
console.log(primeiroNome + " " + sobreNome);
console.log(primeiroNome, sobreNome);
console.log(`Meu nome é ${primeiroNome} ${sobreNome}`);

primeiroNome = primeiroNome + sobreNome;

console.log(primeiroNome);

//a let deixa realmente variar, mas o const é CONSTANTE
//a boa prática é manter a sempre const, pq se mudar demais, é difícil de desbugar
//o certo seria definir outra variável para acrescentar 

const nomeCompleto = primeiroNome + sobreNome;
console.log(nomeCompleto);

// let idade; declarando
// idade = 23;  atribuindo
//o const só deixa fazer tudo na mesma linha