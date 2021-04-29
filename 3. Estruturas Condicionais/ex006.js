// Curto-Circuito

var aprovado = true;

// Condição booleana
// Executa se a condição for atendida (true)

aprovado&&console.log("Parabéns");

// Importante: Curto-Circuito não possui um equivalente ao else, por isso, o valor false é retornado sempre que a condição não é atendida

//Exemplo prático de curto-circuto

//Declaração da constante nome

const nome = "Camila";

//Aqui é verificado se o nome possui ao menos um caractere
// Retornar true se possuir e false caso contrário

const nomeValido = nome.lenght > 0 && true;

//Imprime o nome no console se for diferente de vazio

nomeValido && console.log(nome);