const pessoas = [
  { nome: "Joana", idade: 37 },
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 32 },
  { nome: "Aline", idade: 28 },
];
// Não tem retorno - Não espera retorno
// Exemplo: mostre no console o nome das pessoas do array de pessoas
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

//Retorna um único elemento(1o que satisfaz ou undefined) - Boolen True/False(pode ser formato de condição)
//Encontre a primeira pessoa chamada Aline
pessoas.find((pessoa) => pessoa.nome === "Aline");

//Boolean True/False(algum elemento satisfaz?) - Boolean True/False(pode ser formato de condição)
//Verifique se alguma pessoa tem mais de 30 anos.
pessoas.some((pessoa) => pessoa.idade > 30);

//Boolean True/False(todos os elementos satisfazem?) - Boolean True/False(pode ser formato de condição)
//Verifique se todas as pessoas tem mais de 30 anos.
pessoas.every((pessoa) => pessoa.idade > 30);