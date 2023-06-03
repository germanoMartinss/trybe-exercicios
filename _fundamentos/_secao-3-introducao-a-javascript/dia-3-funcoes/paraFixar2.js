const trybeBankCustomers = ['Olivia', 'Nat', 'Gus'];

function addCustomer(customer) {
    if (typeof customer != 'string'){
        return 'Isto não é uma string!'
    }

    trybeBankCustomers.push(customer);
return 'Temos um novo cliente!';
};

console.log(addCustomer(true));
console.log(addCustomer('Germano'));
console.log(trybeBankCustomers);

//Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, imprimir a mensagem: “O parâmetro passado deve ser do tipo string”.

//Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
//Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso o parâmetro não seja do tipo string, imprimir a mensagem: “Todos os valores precisam ser strings.