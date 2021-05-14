// .map() > é muito utilizada quando queremos criar um array a partir de outro. Esse novo array possuir a mesma quantidade de elementos, porém o valor do elemento será diferente do original.

const carros = [
    { marca: "Fiat", modelo: "Uno", anoFabricacao: 2015},
    { marca: "GM", modelo: "Onix", anoFabricacao: 2018},
    { marca: "Ford", modelo: "KA+", anoFabricacao: 2018},
    { marca: "Fiat", modelo: "Cronos", anoFabricacao: 2020},
];

function retornaCarro(carro) {
    return carro.marca + " " + carro.modelo + " ano: " + carro.anoFabricacao;
}

const novosCarros = carros.map(retornaCarro);

console.log(novosCarros);
 
 