// Obtendo tamanho de array

// Na linguagem JavaScript temos uma propriedade chamada length, que é responsável por informar o tamanho de um array. Com ela podemos retornar o total de elementos que um array tem.

var signos = [
    "Áries",
    "Touro",
    "Gêmeos",
    "Câncer",
    "Leão",
    "Virgem",
    "Libra",
    "Escorpião",
    "Sagitário",
    "Capricórnio",
    "Aquário",
    "Peixes"
];

console.log(signos.length);

// outros exemplos

var times_rj = [
    "Botafogo",
    "Flamengo",
    "Fluminense",
    "Vasco",
    "Volta Redonda"
];

var total_times_rj = times_rj.length;

console.log("Total de Times: " + total_times_rj);

// Total de Times: 5


var times_sp = [
    "Bragantino",
    "Corinthians",
    "Palmeiras",
    "Ponte Preta",
    "São Paulo",
    "Santos"
];

var total_times_sp = times_sp.length;

console.log("Total de Times: " + total_times_sp);

// Total de Times: 6

// Outro Exemplo:

var notas_bimestre = [
    7, 6, 8, 5
];

var total_notas = notas_bimestre.length;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno); // Média do aluno: 6.5