const animals = {
    nome: 'Mother',
    age: 17,
    eat: 'Ração',
};

//----Array com Chaves
let chaves = Object.keys(animals);
console.log(chaves);
console.log(chaves[1]);
//[ 'nome', 'age', 'eat' ]
//age

//Array com os valores
let valores = Object.values(animals);
console.log(valores);
console.log(valores[0]);
//[ 'Mother', 17, 'Ração' ]
//Mother


//Array com as entradas
let entradas = Object.entries(animals);
console.log(entradas);
console.log(entradas[2][0]);
// [ 'nome', 'Mother' ], [ 'age', 17 ], [ 'eat', 'Ração' ] ]
//eat