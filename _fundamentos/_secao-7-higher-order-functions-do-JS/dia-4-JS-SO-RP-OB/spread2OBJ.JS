const product = {
    id: 1,
    name: 'Camiseta',
};

const productPrice = {
  price: 23
}

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct = { ...product, ...productPrice };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: 23}