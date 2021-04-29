// If ternário

// Define a variável com o dia da semana ( 0 = domingo , 1 = segunda ...)
var dia_semana = 5;

// Verifica a condilão e define o resultado da variável
var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apensa de segunda á sexta": "Loja Aberta";

//Impre o resultado no console
console.log (status_loja);
// ? = if
// : = else

// Exemplo meu

var dia_mes = 10;

var feriado = (dia_mes == 10) ? "Hoje é feriado" : "Hoje não é feriado";

console.log (feriado);