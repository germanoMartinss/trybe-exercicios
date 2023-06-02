//Percorra o array imprimindo todos os valores contidos nele com a função console.log().

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
console.log(numbers[index]);
}

//Some todos os valores contidos no array e imprima o resultado.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (index = 0; index < numbers.length; index += 1) {
sum += numbers[index];
    console.log(sum);
}

//Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (index = 0; index < numbers.length; index += 1) {
sum += numbers[index];
}
let média = sum / numbers.length;
console.log(média);

//Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let média = sum / numbers.length;

if (média > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
};

//Utilizando for, descubra o maior valor contido no array e imprima-o.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumber = numbers [0];

for (index = 0; index < numbers.length; index += 1) {
 if (numbers[index] > maiorNumber) {
    maiorNumber = numbers[index];
 }
};

console.log(maiorNumber);.