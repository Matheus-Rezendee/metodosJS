/* 1. Exercícios para forEach:
• Fácil:
1. Escreva um código que use o método forEach para imprimir todos os elementos de um array de números.
2. Crie uma função que receba um array de strings e use forEach para imprimir cada string em maiúsculas.
 */

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((elemento) => {
  console.log(elemento);
});
 /*------------------------------------------------------------------------ */

const palavras = ["banana", "laranja", "maçã"];

palavras.forEach((string) => {
  const stringMaiuscula = string.toUpperCase();
  console.log(stringMaiuscula);
});
 /*------------------------------------------------------------------------ */

/* 
• Intermediário:
1. Escreva um programa que use forEach para iterar sobre um array de objetos e imprima o valor de uma propriedade específica de cada objeto.
2. Crie uma função que receba um array de números e use forEach para calcular e imprimir a soma de todos os elementos.
 */
const pessoas = [
    { nome: 'Matheus', idade: 21 },
    { nome: 'Luiz', idade: 36 },
    { nome: 'Yurik', idade: 25 }
  ];
  
  pessoas.forEach((pessoa) => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
  });

   /*------------------------------------------------------------------------ */


  const numerosParaSoma = [1, 2, 3, 4, 5];
let soma = 0;

numeros.forEach((elemento) => {
  soma += elemento;
});

console.log(`A soma dos elementos é: ${soma}`);
 /*------------------------------------------------------------------------ */

/*  • Difícil:
1. Implemente uma função que receba uma matriz (array de arrays) e use forEach para calcular e imprimir a soma de cada linha da matriz.
2. Escreva um programa que use forEach para iterar sobre um array de arrays de números e encontre o maior número em cada subarray, imprimindo-o.*/

function calcularSomaLinhas(matriz) {
    matriz.forEach((linha, indice) => {
      const soma = linha.reduce((acumulador, elemento) => acumulador + elemento, 0);
      console.log(`Soma da linha ${indice + 1}: ${soma}`);
    });
  }
  
  const minhaMatriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  calcularSomaLinhas(minhaMatriz);

  /*------------------------------------------------------------------------ */

  function encontrarMaiorNumeroEmSubarrays(arrays) {
    arrays.forEach((subarray, indice) => {
      const maiorNumero = Math.max(...subarray);
      console.log(`Maior número no subarray ${indice + 1}: ${maiorNumero}`);
    });
  }
  
  const meuArrayDeArrays = [
    [10, 20, 30],
    [15, 25, 35],
    [5, 12, 40]
  ];
  
  encontrarMaiorNumeroEmSubarrays(meuArrayDeArrays);
   /*------------------------------------------------------------------------ */