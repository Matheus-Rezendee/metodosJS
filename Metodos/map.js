/* Exercícios para map:
• Fácil:
1. Escreva uma função que receba um array de números e retorne um novo array com cada número multiplicado por 2 usando map.
2. Crie uma função que receba um array de palavras e retorne um novo array com cada palavra em maiúsculas usando map.
 */
function multiplicarPorDois(numeros) {
    return numeros.map((numero) => numero * 2);
  }
  
  const numerosOriginais = [1, 2, 3, 4, 5];
  const numerosMultiplicados = multiplicarPorDois(numerosOriginais);
  
  console.log("Números originais:", numerosOriginais);
  console.log("Números multiplicados por 2:", numerosMultiplicados);
 /*------------------------------------------------------------------------ */

 function converterParaMaiuscula(palavras) {
    return palavras.map((palavra) => palavra.toUpperCase());
  }
  
  const arrayOriginais = ["banana", "laranja", "maçã"];
  const arrayMaiusculas = converterParaMaiusculas(palavrasOriginais);
  
  console.log("Palavras originais:", arrayOriginais );
  console.log("Palavras em maiúsculas:", arrayMaiusculas);

   /*------------------------------------------------------------------------ */

   /* 
• Intermediário:
1. Implemente uma função que receba um array de objetos e retorne um novo array apenas com os valores de uma propriedade específica de cada objeto, usando map.
2. Escreva uma função que receba um array de strings e retorne um novo array com o comprimento de cada string usando map.
 */

const frutas = [
    { nome: "banana", cor: "amarela", sabor: "doce" },
    { nome: "laranja", cor: "laranja", sabor: "azedo" },
    { nome: "manga", cor: "vermelha", sabor: "doce" }
  ];
  
  
  const nomesDasFrutas = frutas.map((fruta) => fruta.nome);
  
  console.log("Nomes das frutas:", nomesDasFrutas);

     /*------------------------------------------------------------------------ */


const palavrasOriginais = ["banana", "laranja", "maçã"];

const comprimento = palavrasOriginais.map((palavra) => palavra.length);

console.log("Comprimentos das palavras:", comprimento);

     /*------------------------------------------------------------------------ */

/*  Difícil:
1. Crie uma função que receba uma matriz (array de arrays) e retorne um novo array com a soma de cada linha da matriz, usando map.
2. Implemente uma função que receba um array de números e retorne um novo array com a raiz quadrada de cada número, arredondada para o inteiro 
mais próximo, usando map.. */

function somarLinhas(matriz) {
    const somas = matriz.map(subarray => subarray.reduce((acc, curr) => acc + curr, 0));
    return somas;
}

const minhaMatriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const resultado = somarLinhas(minhaMatriz);
console.log(resultado);

     /*------------------------------------------------------------------------ */




function raizQuadradaArredondada(numeros) {
   
    const raizesArredondadas = numeros.map(num => Math.round(Math.sqrt(num)));
    return raizesArredondadas;
}


const meusNumeros = [9, 16, 25, 36];
const resultadoRaizes = raizQuadradaArredondada(meusNumeros);
console.log(resultadoRaizes);




  

