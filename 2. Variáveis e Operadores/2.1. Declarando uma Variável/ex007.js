// Operadores são usados para modificar ou obter um novo valor a partir de uma ou mais variáveis.
// Operadores Aritiméticos

// Adição/Subtração
var lucro = 2100 - 1640;
console.log (lucro);

// Multiplicação
var salarioAno = 2100 * 12;
console.log (salarioAno);

// Divisão
var valorHora = 2100 / 160;
console.log (valorHora);

// Porcentagem
var lazer = 2100 * 0.1;
console.log (lazer);

// Módulo (%) retorna o resto de uma divisão
var resto1 = 50 % 6;
console.log (resto1);

// Utilizado para saber se o numero é par ou impar
var verificarSeEPar= 20 % 2 == 0;
console.log (verificarSeEPar)

// Operações Aritiméticas e atribuição

var preco1 = 10;
preco1 = preco1 + 20;
console.log (preco1) 

var preco2 = 20;
preco2 += 1;
console.log (preco2)

var preco3 = 20;
preco3 -= 1;
console.log (preco3)

var preco4 = 20;
preco4 *= 2;
console.log (preco4)

// Em qual ordem o JavaScript executa as operações aritméticas?
// Assim como nas operações matemáticas, os primeiros cálculos feitos são os que possuem os operadores *, / e % e só então + e -.

// Como resolver uma subtração ou adição primeiro que as demais operações?
// Caso seja necessário mudar essa ordem, colocamos o que queremos priorizar dentro de parênteses e ele será efetuado primeiro.
// Exemplo: ( 5 + 9 ) * 5

// O que é NaN?
// NaN significa “não é um número”, ele é o resultado de uma operação matemática que falhou ou por causa de uma operação com tipos incompatíveis (string * string, string / boolean, array * boolean ) ou pela divisão 0 / 0.

    

