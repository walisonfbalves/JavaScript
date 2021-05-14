// Introdução

// Vantagens da separação de um projeto em arquivos menores:

/* Código mais fácil de ler;
Código mais fácil de manter e atualizar;
Código mais profissional.*/

/*Ao separarmos o código em partes menores, integramos essas partes através dos comandos import e export. Veja nos Códigos 1 e 2.*/


import colecao_signos from './dados/dados.js.js.js';

//Código 1. arquivo main.js - comando import

export default colecao_signos;

//Código 2. arquivo dados.js - comando export

//Fazemos essa separação quando o código de um projeto começa a crescer de modo que fica mais fácil mantê-lo em arquivos menores do que em um único arquivo.