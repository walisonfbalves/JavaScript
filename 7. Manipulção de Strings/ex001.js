// Template String

// Outra forma de acessar uma strig é por acentos graves

var nome = `Walison`;

// Essa forma é chamada template string
// Ela possiu vantagens. Uma delas é criar uma string que possui um texto com mais de uma linha

let texto = `Jogar
me deixa 
ansioso 
pra um 
caralho`;

// Outra vantagem do uso de template string é quanto a concatenação de uma variável com o texto. 

var nome = `Walison Fernandes`;

let tecnologia = `todas as tecnologias`;

console.log ( `${nome} vai se tornar o cara mais fodas de ${tecnologia} `);

// Exemplo prático

let linguagem = "JavaScript";
let stack = "mobile";
let msg = "";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}