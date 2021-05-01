// Objeto Literal

// Um objeto literal deve ser utilizado para guardar dados de um único domínio (contexto). Se mais domínios (contextos) estiverem envolvidos, devem ser criados objetos literais para cada um deles.

// EXEMPLOS:

// 1)

var produto = {
    id: 1,
    nome: "Cadeira gamer",
    valor: 1800.00
};

// 2)

console.log (produto.id);

var cliente = {
    id: 9,
    nome: "Jeferson Oliveira",
    telefone: "(62) 92923-9328"
};

console.log (cliente.nome);

// 3)

var usuario = {
    id: 2,
    nome: "Walzera",
    idade: 18
}

var permissao = usuario.idade >= 18;

if ( permissao === true) {

    console.log ("O usuário já é de maior, pode tomar cachaça")

} else {

    console.log ("O usário é menor, vaza mlq safado")

}