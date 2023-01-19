// Desafio: Crie uma função que procure o nome do aluno, verifique sua presença na lista e retorne sua média
// Caso o aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado

const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];

    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];

    console.log(`A média de ${aluno} é: ${mediaDoAluno}`);
  } else {
    console.log("O aluno não está cadastrado");
  }
}
exibeNomeENota("Caio");
