// Obtendo o tamnho de strings

// Quantidade de letras que tem na string, sendo classificado a posição de acordo com a quantidade

let nome = "Isabela";
let frase = nome + " está aprendendo Javascript";

let tamanho_nome = nome.length;
let frase_nome = frase.length;

console.log (tamanho_nome);
console.log (frase_nome);


// Exemplo prático

let cep = "23010-090";

if ( cep.length != 9 ){

    console.log("O CEP deve ter 9 caracteres");

} else {
    console.log("Localizando o endereço do CEP")
}

// A propriedade length é bastante usada para validação de dados pois com ela é possível verificar o tamanho das strings, o que evita problemas como strings vazias ou com tamanho inadequado