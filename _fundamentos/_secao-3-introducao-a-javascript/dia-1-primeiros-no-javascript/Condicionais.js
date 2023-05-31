const age = 87;

if (age >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}

//---------------------------

const preçoCerveja = 14;
const dinheiroTotal = 200;
let mensagem = '';

if (dinheiroTotal < preçoCerveja) {
    mensagem = 'Seu saldo não é suficiente! =('
} else if  (dinheiroTotal === preçoCerveja) {
mensagem = 'Você vai gastar todo o seu dinheiro!'
} else { (dinheiroTotal > preçoCerveja)
mensagem = 'Obrigado pela compra!'
};

console.log(mensagem);

//---------------------------

const idadePessoa = 17;
let podeVotar;

if (idadePessoa >= 16) {
    podeVotar = 'Faz o L! Pode votar';
} else {
    podeVotar = 'Não pode votar!';
}
console.log(podeVotar);

//-------TENÁRIO--------------

const agePeople = 17;

const votaOuNao = idadePessoa >= 16 ? 'Pode votar!' : 'Não pode votar!';

console.log(votaOuNao);

//--------------------------

const grade = 42;
let message = '';

if (grade >= 80) {
  message = 'Parabéns, você faz parte do grupo de aprovados';
} else if (grade >= 60 && 80) {
    message = 'Você está na nossa lista de espera';
} else {
    message = 'Infelizmente, você reprovou';
}

console.log(mensagem);