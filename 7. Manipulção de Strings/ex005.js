// Preenchendo strings

// Em alguns casos pode ser necessário fazer o preenchimento de uma string com um determinado caractere até que essa string atinja um certo tamanho
// padStart() , padEnd()

let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);

console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

// Exemplo prático

let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome + valor_nome );
console.log( label_profissao + valor_profissao );
console.log( label_endereco + valor_endereco );

// Com os métodos padStart() e padEnd() é possível alinhar informações com a linguagem JavaScript de forma que a exibição dos dados não fique desordenada