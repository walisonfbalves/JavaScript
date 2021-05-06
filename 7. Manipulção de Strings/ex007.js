// Retornando partes de string

// substr // substring (métodos nativos)

var frase = "Estou aprendendo JavaScript na DevMedia";

var resultado = frase.substr(17, 10) /* Está na posição 17 e tem 10 caracteres */;

console.log(resultado);



var frase = "Eu sou programador JavaScript";

var resultado = frase.substring(7, 18) /* Está na posição 7 e termina na posição 18*/;

console.log(resultado);

// Exemplo prático

let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){

    resumo = conteudo.substr(0, 97);
    resumo += "...";

} else {

    resumo = conteudo;

}

// Quando você souber a quantidade exata de caracteres que a substring terá prefira o método substr(). Caso contrário a melhor opção é trabalhar com os índices inicial e final da substring