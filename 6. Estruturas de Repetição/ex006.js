// For .. in

// A estrutura de repetição for .. in permite que todas as propriedades de um objeto sejam percorridas.

var vida = { finaceira: "OFF", amorosa: "OFF", física: "OFF", lutando_pra_conquistar_tudo: "ON"};

for ( var dados in vida) {
    console.log(vida[dados]);
}

console.log ("\n");

// Exemplo 2

let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for ( let propriedade in carro ) {

    if ( propriedade == "preco" ) {

        let preco = propriedade;

        let desconto = ( carro[preco] * percentual_desconto ) / 100;

        let novo_preco = carro[preco] - desconto;

        console.log("novo preço: R$" + novo_preco + ",00");

    } else {

        console.log(propriedade + ": " + carro[propriedade]);

    }

}

console.log ("\n");

// Exemplo prático 

let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for ( let contador = 0; contador < produtos.length; contador++ ){

    let produto = produtos[contador];

    for ( let propriedade in produto ){

        if ( propriedade == "preco" ) {

            let preco = propriedade;

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00");

        } else {

            console.log(propriedade + ": " + produto[propriedade]);
        }

    }

    console.log("\n");
}
