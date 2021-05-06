// Criando uma data

// Sem parâmetro: Data Atual

var data_hoje = new Date();

console.log (data_hoje + "\n");

// Com parâmetro: String com uma data

var data = new Date("2021-05-05 10:40:00");

console.log (data +"\n");

// Com parâmetro: Numeros

var data_numero = new Date("2021,5,1,10,20,00,00")
//........................(ano, mês, dia, hora, minuto, segundo, milisegundo);

// Podemos criar um objeto do tipo Date utilizando um parâmetro para definir uma data específica, ou então não passar um parâmetro e receber a data atual do sistema
