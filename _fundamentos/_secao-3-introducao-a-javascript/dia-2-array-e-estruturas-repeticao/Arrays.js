const listaDeCompras = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];

console.log(listaDeCompras[2]);
//Leite Ninho

const item = listaDeCompras[1];
console.log(item);
//Batata

listaDeCompras[1] = 'Suco de Laranja';
//Substitui o elemento1 da lista
console.log(listaDeCompras);

//-------------------------------------
// push(Adiciona um elemento ao final do array)
listaDeCompras.push('Cotonetes');

// unshift(Adiciona um elemento no início do array)
listaDeCompras.unshift('Água de Coco');

// pop(Remove o último elemento do array)
listaDeCompras.pop();

// shift(Remove o primeiro elemento do array)
listaDeCompras.shift();

//-----------------------------
const listaDeCompras = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];

console.log(listaDeCompras.length); //4
//Para saber o tamanho da Array 

console.log(listaDeCompras[listaDeCompras.length - 1]);//Sucrilhos
//Descobrir qual o último elemento

//-----------------------------------
//Exercício 1
//Altere o valor da variável menuServices para que ela passe a ter o valor “Serviços”. Isso deve ser feito através da variável menu.
const Cardapio = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = Cardapio[1];

console.log(menuServices);
//Serviços

//---------------------------------
//Exercício 2
//Adicione o valor “Contato” no final do array menu 

const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu);
//'Home', 'Serviços', 'Portfólio', 'Links', 'Contato'