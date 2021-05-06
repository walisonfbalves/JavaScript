// Getters

var data_atual = new Date();

console.log ( data_atual.getFullYear() ); // retonra o ano atual
console.log ( data_atual.getMonth() ); // retorna o mês 0 á 11
console.log ( data_atual.getHours() ); // Retorna a hora de 0 á 23
console.log ( data_atual.getDay() ); // Retorna o dia da semana (0 á 6)
console.log ( data_atual.getTime() ); 
console.log ( data_atual.getDate () ); // retorna o dia do mês

// Para cada método acima existe um similar para retornar os valores em UTC

var dataAtual = new Date();

console.log( dataAtual.getUTCFullYear() );
console.log( dataAtual.getUTCMonth() );
console.log( dataAtual.getUTCDate() );
console.log( dataAtual.getUTCHours() );
console.log( dataAtual.getUTCMinutes() );
console.log( dataAtual.getUTCSeconds() );
console.log( dataAtual.getUTCMilliseconds() );
console.log( dataAtual.getUTCDay() );

// Para saber a diferença de fuso horário do sistema para o UTC utilizamos o método .getTimezoneOffset()

var dataAtual = new Date();

console.log( dataAtual.getTime() );
console.log( dataAtual.getTimezoneOffset() );
console.log( dataAtual.valueOf() );

// Os métodos getters do objeto Date retornam uma parte específica da data