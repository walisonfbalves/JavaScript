// Problema na estrutura de repetição

// Ao utilizar estruturas de repetição devemos ter cuidado com um problema chamado loop infinito, onde um laço de repetição nunca é finalizado.

let numero = 3;
let contador = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while ( contador <= 10 ) {

    let resultado = numero * contador;

    console.log( numero + " x " + contador + " = " + resultado );

    contador++; // Se o incremento do contador for removido, teremos o loop infinito

}

// O incremento de um contador é fundamental para que um bloco de repetição funcione de forma correta. Caso a estrutura não tenha esse incremento, ele deve ser colocado pelo programador