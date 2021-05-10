// Arrow Functions (Tipos de funções)

// Podem receber parametros ou não

// Função tradicional

function retorna_media ( nota_1, nota_2) {
    var media = (nota_1 + nota_2 / 2);
    return media;
}

// Arrow Function

var retorna_media = (nota_1, nota_2) => /* flecha (arrow) */ {
    var media= (nota_1 + nota_2 / 2);
    return media;
}

var media_aluno = retorna_media (9,8);
console.log ( "A média do aluno é: " + media_aluno);