// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacaxi', 'Granola', 'Aveia'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const mySaladFruits = [...fruit, ...additional, 'Uva-Passa']
  return mySaladFruits;
};

console.log(fruitSalad(specialFruit, additionalItens));