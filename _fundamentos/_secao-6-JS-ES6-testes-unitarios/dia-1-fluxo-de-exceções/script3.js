const validateAverage = (n1, n2, n3, n4) => {
    if (typeof n1 !== 'number' || n2 !== 'number' || n3 !== 'number' || n4 !== 'number') {
        throw new Error('Atenção! Os valores devem ser numéricos');
    }
}

const calculateAverage = (n1, n2, n3, n4) => {
    try {
        validateAverage(n1, n2, n3, n4);
    let sum = n1 + n2 + n3 + n4;
    let media = sum / 4;
    return media;
    } catch (error) {
        return error.message;
    }
}
console.log(calculateAverage(9, 8, 5, '9'));