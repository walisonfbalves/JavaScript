// Acessando elementos de Array

// Como vimos, o array é utilizado para agrupar elementos dentro de uma variável. E para acessar cada elemento é necessário utilizar um índice, que funciona como uma posição numérica dentro do array

var funcionarios = [
    "Danilo",   // índice 0
    "Denise",   // índice 1
    "Marcos",   // índice 2
    "Roberta",  // índice 3
    "Thiago"    // índice 4
];

// Ao trabalhar com arrays nunca se esqueça: o primeiro elemento de um array está na posição 0

var cursos = [
    "Introdução ao Dart",
    "Variáveis em PHP",
    "Tipos de dados em Java",
    "Estruturas condicionais em Python",
    "Funções em JavaScript"
];

console.log(cursos[0]); // Introdução ao Dart
console.log(cursos[1]); // Variáveis em PHP
console.log(cursos[2]); // Tipos de dados em Java
console.log(cursos[3]); // Estruturas condicionais em Python
console.log(cursos[4]); // Funções em JavaScript

// Exemplo prático

var notas_bimestre = [
    7, 6, 8, 5
];

var total_notas = 4;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno); // Média do aluno: 6.5