const verifyIsNumber = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Os valores devem ser numéricos");
  }
};

const sum = (num1, num2) => {
  try {
    verifyIsNumber(num1, num2);
    return num1 + num2;
  } catch (error) {
    return error.message;
  }
};
console.log(sum(2, '3'));