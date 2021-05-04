// For

var multiplicador = 9;

console.log ("Tabuada do nº " + multiplicador );

for ( var contador  = 0 /* inicialização da variável */ ; contador <= 10 /* Condição */; contador++ /* Incremeto */) {

    var resultado = multiplicador * contador;
    console.log ( multiplicador + " x " + contador + " = " + resultado);

    // Enquanto a condição for verdadeira esse código será executado
}

console.log ("\n")

// Aplicado em Coleção de dados

var meses = [ "Janeiro", "Fevereiro", "Março","Abril","Maio"];

for ( var contador = 0; contador < meses.length /* tamanho do array = 5 */; contador++) {

    console.log (meses[contador]);
}

console.log ("\n")

// Comandos break e continue

var amigos = [
    { nome: "Yuri", habilitado: false},
    { nome: "Mário", habilitado: true},
    { nome: "Tulio", habilitado: false}
];

var encontrouHabilitado = false;

for (var contador = 0; contador < amigos.length; contador++) {

    var amigo = amigos[contador];

    if ( amigo.habilitado == true) {
        console.log ("Funcionário habilitado encontrado: " + amigo.nome);
        encontrouHabilitado = true;
        break;
    }

}

if (!encontrouHabilitado) {
    console.log ("Nenhum funcionário habilitado encontrado");
}

console.log ("\n")

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
   ];
 
   for ( let contador = 0; contador < alunos.length; contador++ ) {
 
    let aluno = alunos[contador];
 
    if ( aluno.media < 6 ) {
    continue;
    }
 
    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");
 
   }

   // Exemplo prático

   var notas_bimestrais = [ 7, 6, 5, 9];

   var soma_notas = 0;
   var quantidade_notas = 4;
   
   for ( contador = 0; contador < quantidade_notas; contador++) {

    soma_notas = soma_notas + notas_bimestrais[contador];
    console.log (soma_notas);
   }

   var media = soma_notas / quantidade_notas;
   

   if ( media >= 6) {
       console.log ("Sua média é "+ media +" Parabéns está Aprovado");
   } else {
       console.log ("Reprovado");
   }