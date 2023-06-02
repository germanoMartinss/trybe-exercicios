const balance = 100;

function sumBalance(value) {
  return value + balance;
}

function subBalance(value) {
  return balance - value;
}

function multBalance(value) {
  return value * balance;
}

function divBalance(value) {
  return balance / value;
}

console.log(sumBalance(300));
console.log(subBalance(50));
console.log(multBalance(2));
console.log(divBalance(5));

//----------------------

const clientTrybeBank = ['Germano', 'Elisandra', 'Fernando', 'Gabriela', 'Enrico'];

function greetClients(clients) {
    return `Olá, ${clients} está é a sua conta Trybe Banking!`; 
}

console.log(greetClients(clientTrybeBank));

//-----------------------------------

const clientCannabisShop = ['Condezilla', 'Rod', 'Will', 'Ge'];

function helloClients(clients) {
    for (let index = 0; index < clients.length; index += 1) {
        console.log(`Hello Cannabis Lovers ${clients[index]} como estão hoje?`);
    }
};

helloClients(clientCannabisShop);
