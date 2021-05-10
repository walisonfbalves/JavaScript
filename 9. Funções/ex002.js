// Funções com parâmetro    

// Recebem valores para serem usados em seus blocos de código ou seja ()

function retorna_status_aluno(nota_1, nota_2) {

    let media = (nota_1 + nota_2) / 2; // os dois parâmetros são usados para o cálculo da média. Esse cálculo é atribuído a variável media  
    let status; // Variável que vai guardar o status do aluno

    if ( media >= 6) {
        status = "Aprovado";
    } else { 
        status = "Reprovado";
    }

    return status; // Retornar o status do aluno
    return media;

}

let status_aluno_1 = retorna_status_aluno(7,8);
console.log("Aluno 1: " + status_aluno_1);

let status_aluno_2 = retorna_status_aluno(4,7);
console.log("Aluno 2: " + status_aluno_2);

