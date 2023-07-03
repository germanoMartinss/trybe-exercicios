const sum = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error ('Os valores devem ser numéricos');
    }
    return num1 + num2;
};

console.log(sum(2, '3'));