const costumer = {
    name: 'Germano',
    age: 32,
    job: 'Unemployed'

};

const addProperty = (object, key, value) => {
    if (typeof object[key] === 'undefined'){
        object[key] = value;
    }
};

addProperty(costumer, 'City', 'São Paulo');

console.log(costumer);

//---------------------------------

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
  const addInfos = (object, key, value) => {
    if (typeof object[key] === 'undefined') {
      object[key] = value;
    }
  };
  
  addInfos(customer, 'email', 'germanopmartins91@gmail.com');
  addInfos(customer, 'userGitHub', 'germanoMartinss');
  addInfos(customer, 'linkedIn', 'Germano Martins');
  
  console.log(customer);
  

