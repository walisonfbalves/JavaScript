// Separando strings em partes

// split()

// Ele separa as strings nos espaços em branco, e cria substrings que geram um array

var paises_string = "Brasil Espanha Canadá Irlanda Suíça";

var paises_array = paises_string.split(" ")/*Aqui definimos qual termo utilizaremos para quebrar a string*/;

console.log(paises_array); //

// Outro exemplo

let cores_string = "vermelho,azul,branco,cinza,roxo";

let cores_array = cores_string.split(",");

console.log(cores_array); 

// O método split() aceita um parâmetro que tenha mais de 1 caractere para quebrar strings, porém é mais comum o uso de um único caractere para essa tarefa.

// Exemplo prático

var nome_completo = "Ana Mendes da Silva";

var array = nome_completo.split(" ");

var nome = array[0];

console.log("Olá " + nome + ", seja bem vindo(a)");

// O método split() é muito útil para extrair dados de strings maiores. Assim é importante saber como é a composição da string para identificar o caractere que será usado como separador