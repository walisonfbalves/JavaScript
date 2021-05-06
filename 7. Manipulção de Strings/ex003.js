// Trabalhando com letras maiúsculas e minúsculas

let programador_1 = "Flávia";
let programador_2 = "Rogério";

console.log(programador_1.toUpperCase()); // FLÁVIA, convertendo para letras maiusculas

console.log(programador_2.toLowerCase()); // rogério, convertendo para letras minusculas

// Outro exemplo

let programador_1 = "Flávia";
let programador_2 = "flávia";

if ( programador_1 == programador_2 )/* Apesar das duas váriaveis terem valors iguais, são consideradas diferentes no JS. */ 
{
    console.log("iguais");
} else {
    console.log("diferentes");
}

// Exemplo prático

let email_acesso = "pedro@email.com";
let email_cadastro = "PEDRO@email.com";

if ( email_acesso.toLowerCase() == email_cadastro.toLowerCase()){
    console.log("Foi enviado um link de ativação para o seu email");
} else {
    console.log("Esse email não existe em nossa base de dados");
}

// Quando os dados tiverem sensibilidade à diferença entre caracteres maiúsculos e minúsculos será necessário usar os métodos nativos para resolver esse problema