const product = 'Iphone14';
const price = 8500;
const discount = 10;

const message = 
`Produto: ${product}
Preço: ${price}
Desconto: ${discount}%
Preço com desconto: R$${(price - (price * (discount / 100))).toFixed(2)}`;

console.log(message);

//Produto: Iphone14
//Preço: 8500
//Desconto: 10%
//Preço com desconto: R$7650.00