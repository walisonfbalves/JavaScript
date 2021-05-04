// Do ... while

var contador = 0;

do {

    console.log(contador);
    contador++;

} while ( contador < 5 );

console.log("\n");

// A diferença entre while e do ... while é que o do ... while executa o bloco de código pelo menos uma vez, mesmo que a condição seja falsa na primeira iteração

// Utilizando em coleção de dados 

var contador = 0;

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

do {

    console.log(meses[contador]);
    contador++;

} while ( contador < meses.length );
console.log("\n");

// Estrutura de repetição do .. while utilizando o comando break

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

var contador = 0;
let encontrouHabilitado = false;

do {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
} while ( contador < funcionarios.length );

console.log("\n");

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

// Estrutura de repetição do .. while utilizando o comando continue

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

var contador = 0;

do {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6 ) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

} while ( contador < alunos.length );

// Exemplo Prático 

var valor_mensalidade = 300;
var taxa_multa = 0.10;
var total_dias = 10;
var contador = 1;

do {

    var dias_atraso = contador;

    var valor_multa = valor_mensalidade * taxa_multa * dias_atraso;
    
    var valor_atual_mensalidade = valor_mensalidade + valor_multa;

    console.log ("O novo valor da mensalidade é: R$" + valor_atual_mensalidade + ",00");

    contador++;

} while ( contador < total_dias);