const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];
  
//   const verifyCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
//   console.log(verifyCargo); // true

  const verifyCargo1 = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');
  console.log(verifyCargo1);