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




function fibonacciSequence(max) {
    let sequence = [0, 1];
  
    while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= max) {
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
  }
  let maxNumber = 100;
  let fibonacci = fibonacciSequence(maxNumber);
  
  console.log(fibonacci);
  









// function fibonacci(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10));
// console.log(fibonacci(10));
// console.log(fibonacci())


