const food = 'pão';
const drink = 'suco de laranja';

if (drink === 'café' && food === 'pão') {
    console.log('Muito Obrigado!');
} else {
    console.log('Erraram meu pedido!');
} 
//Erraram meu pedido!

//----------------------------------

let cenoura = true;
let leite = true;
let pao = true;
let feijao = true;

let listaDeCompras = cenoura && leite && pao && feijao; 

//-----------------------------------

const currentHour = 16;
let message = '';

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém-passado';
}
 
console.log(message);

//--------------OR-----------

const queroCafé = 'café';
const podeSerSuco = 'Suco de Laranja';

if (queroCafé === 'café' || podeSerSuco === 'Suco de Laranja') {
    console.log('Obrigado pelo atendimento!');
} else {
    console.log('Ei, não foi isso que eu pedi!');
}

//---------------OR----------------------

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//----------------OR----------------

const goToSp = true;
const goToGO = false;

if ((goToSp === true && goToGO === false) || (goToSp === false && goToGO === true)){
    console.log('Eu fui para apenas um dos lugares.');
} else {
    console.log('Eu fui para os dois, ou para nenhum.');
}

//---------------NOT-------------

console.log(!(2 + 2) === 4);

let charmander = 'Melhor Pokemon Inicial';

console.log(!charmander);

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no JavaScript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true