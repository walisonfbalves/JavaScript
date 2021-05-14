// .forEach() é usada para percorrer um array e executar uma função para cada elemento.

const produtos = [
    { id: 1, nome: "Açucar", estoque: 100, valor: 2.00},
    { id: 2, nome: "Álcool 70", estoque: 50, valor: 9.95},
    { id: 3, nome: "Luvas Descartáveis", estoque: 1000, valor: 2.50}
];

function imprimirProduto (produtos) {
    console.log(produtos.nome);
    console.log(produtos.valor);

}

produtos.forEach(imprimirProduto); // Executando a função imprimirProdutos para cada elemento do array produtos.
