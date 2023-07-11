// Criar Array de 0 a 30
const array = Array.from(Array(31).keys());
// Filtre quais desses números são ímpares
const filterArr = array.filter((numbers) => numbers % 2 !== 0);
// console.log(filterArr);


//Crie um Array contendo a lista de palavras abaixo e filtre apenas quais dessas palávras são palíndromos.
const list = ['arara', 'amor', 'asa', 'longo', 'ele', 'dinossáuro', 'esse', 'peppa', 'mamam', 'tartaruga', 'bandolin', 'matam', 'desodorante', 'mundo', 'metem', 'terra', 'água', 'mirim', 'fogo', 'sopapos'];

list.forEach((palindromo) => {
    const reverso = palindromo.split('').reverse().join('');
if (palindromo === reverso) {
    // console.log(palindromo);
}
});

//Crie uma automação que calcule a sequencia fibonacci até o número máximo 100.
function fibonacciSequence(max) {
    let sequence = [0, 1];
  
    while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= max) {
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
  }
  let maxNumber = 100;
  let fibonacci = fibonacciSequence(maxNumber);
  // console.log(fibonacci);
  
//Crie um Array de 1 a 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Insira o número 0 no início do array
arr.unshift(0);
//Insira o número 11 no final do array
arr.push(11);
//Remova o número 5 do array
arr.splice(5, 1);
//remova o número 8 do array e no lugar adicione uma sequencia de números: 20, 21, 22.
arr.splice(7, 1);
arr.splice(7, 0, 20, 21, 22)
// console.log(arr);

//A partir do Array abaixo crieu um novo array contendo apenas nome e idade:
const familyList = [
  {id: 1, nome: 'Liz', idade: 2},
	{id: 2, nome: 'Thaís', idade: 32},
	{id: 3, nome: 'Jonathan', idade: 30},
	{id: 4, nome: 'Thainá', idade: 29},
	{id: 5, nome: 'Fabiano', idade: 45},
];
let newList = familyList.map(itens => 'nome: ' + `${itens.nome},` + ' idade: ' + `${itens.idade}`);
console.log(newList);


// function fibonacci(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10));
// console.log(fibonacci(10));
// console.log(fibonacci())


