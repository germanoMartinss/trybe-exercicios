const laps = 68;

for (index = 1; index <= laps; index += 1) {
console.log(`Volta ${index} Completa!`);
}
console.log('Acabou a corrida!');

//------------------------

const market = ['Pão', 'Ovo', 'Carne', 'Tapioca', 'Brócolis', 'Cenoura', 'Banana', 'Mamão',];

for (index = 0; index < market.length; index += 1) {
    //console.log(index)
    //console.log(market[index])
    console.log(`${index} - ${market[index]}`);
}
//0 - Pão
//1 - Ovo
//2 - Carne
//3 - Tapioca
//4 - Brócolis
//5 - Cenoura
//6 - Banana
//7 - Mamão

//------------------------------

const cars = ['Mercedes', 'Audi', 'Volvo', 'Honda', 'KIA', 'Hyndai'];

for (let index = 0; index < cars.length; index += 1) {
const currentCar = cars[index];
console.log(currentCar);
//console.log(`${index} - ${cars[index]}`);
}

//---------EXERCICIO---------

const markeList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

for (index = 0; index < markeList.length; index += 1) {
  console.log(markeList[index]);
}

//---- OU ---

const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

for (index = 0; index < groceryList.length; index += 1) {
  const currentItem = groceryList[index];
  console.log(currentItem);
}