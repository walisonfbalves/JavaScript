// Coleção de objetos

var colecao_disciplinas = [
    { id: 1, nome: "HTML",  carga_horaria: 60}, // índice 0
    { id: 2, nome: "CSS",   carga_horaria: 80}, // índice 1
    { id: 3, nome: "JS",    carga_horaria: 120},// índice 2
];

console.log ( colecao_disciplinas[1]);

console.log ( colecao_disciplinas[0].nome );

console.log ( colecao_disciplinas[2].carga_horaria);

// Exemplo Prático
 
var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();

var dia_semana = data_atual.getDay();

var serie_do_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);