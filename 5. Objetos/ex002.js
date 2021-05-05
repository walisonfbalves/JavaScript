// Propriedades de um objeto literal

var produto = { // produto = nome do objeto
    id: 9,
    nome: "Cafeteira Elétrica", // nome = chave da propriedade | valor = "Cafeteira Elétrica"
    valor: 99.00
};

console.log(produto.id); // 9
console.log(produto.nome); // Cafeteira Elétrica
console.log(produto.valor); // 99.00

// Exemplo de caso de Undefined

var produto = {
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
};

console.log( produto . peso ); // undefined

// Exemplo prático

var aluno_academia = {
    id: 26,
    altura: 1.78,
    peso: 136,
    nome: "Walison Fernandes"
}

var imc = aluno_academia.peso / ( aluno_academia.altura * aluno_academia.altura );

console.log ("O imc do aluno é: " + imc);

if (imc < 18.5) {

    console.log ("O aluno " + aluno_academia.nome + " está abaixo do peso");

} else if (imc >= 18.5 && imc <= 24.99) {
    
    console.log ("O aluno " + aluno_academia.nome + " está no peso ideal");

} else {
    
    console.log ("O aluno " + aluno_academia.nome + " está acima do peso");
}