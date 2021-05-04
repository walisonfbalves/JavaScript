// Coleção de dados

// Quando precisamos trabalhar com dados que pertencem ao mesmo domínio, usamos coleções de dados

// Exemplo 01

var cidades = [
    "Brasilinha",
    "Sobradinho",
    "Brasilia",
    "Planaltina"
];

var contador = 0;

while ( contador < cidades.length) {
    console.log (cidades[contador]);
    contador++;
}

// Exemplo 02

var numero = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

var qtd_pares = 0;
var qtd_impares = 0;

var contador = 0;

while ( contador < numero.length) {

    if (numero[contador] % 2 == 0) {
        qtd_pares++;
    } else {
        qtd_impares++;
    }
    
    contador++;
}

console.log ("A quantidade de pares é: " + qtd_pares );
console.log ("A quantidade de impares é: " + qtd_impares);

// Exemplo 3

var alunos = [
    "Yuri",
    "Maru",
    "Jeef",
    "Tulio",
    "Smash"
]

contador = 0;

while ( contador < alunos.length) {
    
    aluno_nome = alunos[contador];
    contador++;
    console.log (aluno_nome);
}