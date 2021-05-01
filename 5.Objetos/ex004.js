// Praticando 

var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];

var tamanho_colecao = curiosidades_chuck_norris.length;

// A quantidade de objetos total é armazenada na varíavel tamanho_colecao

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao); // ex. 0.92342 * 10 = 9.2323, Math.floor arrendonda para 9. 

// Math.random () retorna um número aleatório entre 0 e < 1
// Math.floor () arredonda um número para aixo para o número inteiro mais próximo
// O rsultado arrendondo é amarzenado. Dessa forma temos um número aleatório que pode ser um valor entre 0 e 9
// o resultado é armazenado na varíavel numero_sorteado

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

// A varíavel numero_sorteado é utilizada como índice na coleção, o que nos permite acessar um objeto dentro do array.

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log ("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log ("Título: " + titulo_curiosidade);
console.log ("Conteúdo: " + conteudo_curiosidade);