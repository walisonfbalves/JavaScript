// Procurando substring dentro de string

// indexOf

var frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
var posicao = frase.indexOf("sonho");

console.log(posicao);

// Nesse exemplo a palavra procurada não existe, logo sera impresso o valor - 1 

var frase = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
var posicao = frase.indexOf("esperança");

console.log(posicao);

// Quando o método indexOf encontra a substring dentro de uma string, ele retorna a posição onde a substring foi encontrada. Caso não encontre ele retorna o valor -1.

// Exemplo prático

let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario);

// O método indexOf é um ótimo recurso da linguagem JavaScript para encontrar termos simples dentro de textos grandes