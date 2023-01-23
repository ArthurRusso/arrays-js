const numeros = [43, 50, 65, 12];

// Método reduce em uma Arrow Function (Igual ao arquivo media-geral.js)
const soma = numeros.reduce((acc, atual) => atual + acc, 0);

console.log(soma); //170

// Método reduce em forma mais extensa
const soma2 = numeros.reduce(function (acc, atual) {
  return atual + acc;
}, 0);

console.log(soma2); //170

// Função callback fora do reduce()
function operacaoNumerica(acc, atual) {
  return atual + acc;
}

const soma3 = numeros.reduce(operacaoNumerica, 0);

console.log(soma3); //170
