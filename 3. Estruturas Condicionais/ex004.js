// If com igualdade estrita

// == compara se o valor é igual 
// === compara o valor e o tipo se são iguais

// exemplo ==

let x = 10; // Tipo number
let y = "10"; // Tipo string

if ( x == y ) // verifica se x e y tem valores iguais, indepedente do tipo
{
    console.log ( "X é igual a Y"); // O resultado sera TRUE, pois as duas var tem valor 10
}
else {
    console.log ("X e diferente de Y");
}

let a = 20; // Tipo number
let b= "20"; // Tipo string

if ( a === b ) // verifica se a e b tem valores iguais, e se possuem o mesmo tipo
{
    console.log ( "A é igual a B") ;
}
else {
    console.log ("A é diferente de B"); // O resultado sera FALSE, pois as duas var tem valor 10, porem os tipos são diferentes
}

// Outro exemplo 

let resposta_usuario = "";

if(resposta_usuario == 0)
{
    console.log("resposta correta"); // A reposta será TRUE porque são de valores iguais, mesmo a resposta estando errada
}
else
{
    console.log("resposta incorreta");
}

// Nessa caso usa o igualdade restrita, pois ira acusar que a reposta é false, devido o valor ser igual o tipo é diferente

let resposta_usuario = "";

if(resposta_usuario === 0)
{
    console.log("resposta correta");
}
else
{
    console.log("resposta incorreta");
}