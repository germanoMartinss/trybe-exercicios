let ingredientItems = [
    '500g feijão carioquinha cozido',
    '200g bacon',
    '1 xicára de óleo',
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
    '1 colher de sopa de sal de alho',
    '200g de farinha de mandioca',
    'Cheiro verde a gosto'
];

const ingredientList = document.querySelector('.ingredients-list')
for (i = 0; i < ingredientItems.length; i += 1) {
    let ingredient = ingredientItems[i];

    let ingredientsListItem = document.createElement('li');
    ingredientsListItem.innerText = ingredient;

    
   ingredientList.appendChild(ingredientsListItem);
}