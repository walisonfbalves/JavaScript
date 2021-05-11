// Relembrando o tipo array

const alunos = ['João', 'Diego', 'Eduardo', 'Amanda']; // String

const produtos = ["Notebook x40", "iPhone X", "Mouse Microsoft"];

const valores = [ 4010.99, 10000.76, 90.15 ]; // Number

const itensVenda = [ // Objetos
    { produto: "Notebook x40", valor: 4010.99, ativo: true },
    { produto: "iPhone X", valor: 10000.76, ativo: true },
    { produto: "Mouse Microsoft", valor: 90.15, ativo: false },
];


const alunos = ['João', 'Diego', 'Eduardo', 'Amanda'];

alunos[0] = "Matheus" // alterando um elemento array

console.log( alunos[0] );
// vai imprimir 'Matheus'

console.log( alunos[1] );
// vai imprimir 'Diego'

console.log( alunos[2] );
// vai imprimir 'Eduardo'

console.log( alunos[3] );
// vai imprimir 'Amanda'