// Removendo espaços em branco do início e do final de uma string

// método trim 

let nome = "     WALISON            ";

let resultado = nome.trim();

console.log (resultado);

// Mesmo que os telefones forem o mesmo são considerados diferentes por causa do espaço

let telefone_1 = "(99) 99999-9999";
let telefone_2 = "    (99) 99999-9999    ";

if ( telefone_1 == telefone_2 ){
    console.log("Os telefones são iguais");
} else {
    console.log("Os telefones são diferentes");
}

// Geralmente o método trim() é usado no cadastro e na validação de dados
