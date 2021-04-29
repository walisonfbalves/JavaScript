// Switch

var produto = "Smarphone";

switch(produto)
{
    case "Smartphone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}

var bebidas = "tequila"

switch (bebidas)
{
    case "cerveja":
        console.log ("Vou tomar uma de leve, só pra trocar idéia mesmo");
        break;
    case "vodka":
        console.log ("Hoje pretendo ficar doidão e dar em cima das mina tudo");
        break;
    case "tequila":
        console.log ("Onde é que eu to?");
        break;
    default:
        console.log ("Hoje sou o motorista da vez");
        break;
}

// exemplo prático

var mes = "Janeiro";

switch(mes)
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}