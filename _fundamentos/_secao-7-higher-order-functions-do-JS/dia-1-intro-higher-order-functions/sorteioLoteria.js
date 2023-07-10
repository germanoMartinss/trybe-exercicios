const checkNumber = (myNumber, number) => myNumber === number;

const resultLottery = (myNumber, callBack) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callBack(myNumber, number) ? 'Dia de sorte, você venceu!' : 'Tente novamente!';
};
console.log(resultLottery(2, checkNumber)); 