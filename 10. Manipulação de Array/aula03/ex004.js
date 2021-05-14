// Inserindo e removendo um elemento no array

// Exemplo prático

const produto = {
    nome: "New Super Mario Bros.", qnt: 1, valor: 250
};

const carrinho = [
    {   nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {   nome: "Super Mario Kart 8", qnt: 1, valor: 300},
];

// Insere o produto no carrinho
carrinho.push(produto);

// Remove o item "Super Mario Kart 8"
carrinho.splice(1,1);

// Remove todos os elementos do carrinho
const totalElementos = carrinho.length;
carrinho.splice(0,totalElementos);

console.log(carrinho);

// As funções nativas usadas para inserir ou remover um elemento são comumente usadas na manipulação de um array
