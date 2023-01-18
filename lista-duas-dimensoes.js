// Desafio: Criar uma lista que contenha as duas listas (Alunos e Média)

const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

// Acessando valores de duas dimensões:
// ${(nome da const da junção das listas)[Escolha do Indice da Lista][Escolha do Indice do Elemento]}
console.log(
  `O aluno da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}
  A nota desse aluno é ${listaDeAlunosEMedias[1][1]}`
);
