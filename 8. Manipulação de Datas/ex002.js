// UTC e timestamp

// UTC = Tempo Universal Coordenado - Refêrencia para calcular os fusos horários
    
    var hoje = new Date ();

    console.log( hoje.toString() + "\n" );
    console.log( hoje.toUTCString() + "\n" ); // UTC é o tempo universal que serve de base para os fusos horários

    
// timestamp é uma representação numérica de uma data UTC.

    var timestamp = new Date ();

    console.log ( timestamp.valueOf () + "\n"); // Retorna a quantidade de milisegundo que passaram desde 1/01/1970 as 00h

    // Porque é util? Podemos verfificar quanto tempo se passou entre uma data e outra.

    const dataAtual = new Date();
    const dataPostagem = new Date('2020-11-11T00:00');

    // Pegando o timestamp das datas
    const timeAtual = dataAtual.getTime();
    const timePostagem = dataPostagem.getTime();

    // Verifica a diferença em milissegundos
    const diferenca = timeAtual - timePostagem;

    // Convertendo em horas
    const segundos = diferenca / 1000;
    const minutos = segundos / 60;
    const horas = minutos / 60;

    // Exibindo a diferença
    console.log(horas);

    // Através do UTC conseguimos manipular uma data independente do fuso horário e através do Timestamp conseguimos verificar a diferença entre uma data e outra
    