// Substituindo partes de string    

// replace()

var texto = "A linguagem PHP é muito poderosa";
var resultado = texto.replace("PHP", "JavaScript");

console.log(resultado);

// O método replace() substitui a primeira ocorrência encontrada.

var texto = "Gabriel adora JavaScript! Ele faz exercícios de JavaScript todos os dias para aprender mais.";

var resultado = texto.replace("JavaScript", "JS");

console.log(resultado);

// Exemplo prático

var texto = "O Rio de Janeiro é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!";

var resultado = texto.replace("Rio de Janeiro", "RJ");

console.log(resultado);

// O método replace() é a melhor forma de substituir um termo dentro de um texto na linguagem JavaScript