const marketList = ['Olivia', 'Nat', 'Gus'];
const trybeBankList = ['Noel', 'Carol', 'Angelo', 'Kissyla'];

function findElement(array, element) {
    //for (index = 1; index < findElement.length; index += 1;)
    return (array.includes(element));
}

console.log(findElement(marketList, 'Gus'));
console.log(findElement(trybeBankList, 'Angilo'));

