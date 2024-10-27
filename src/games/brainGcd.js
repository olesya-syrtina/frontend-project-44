import runMainEngine from '../index.js';
import getRandomNum from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const hasCommonDivider = (div, number1, number2) => (number1 % div === 0 && number2 % div === 0);

const getRound = () => {
  const firstNumber = getRandomNum(1, 20);
  const secondNumber = getRandomNum(1, 20);

  const question = `${firstNumber} ${secondNumber}`;

  let rightAnswerNum = 1;

  for (let i = 1; i <= firstNumber && i <= secondNumber; i += 1) {
    if (hasCommonDivider(i, firstNumber, secondNumber)) {
      rightAnswerNum = i;
    }
  }

  const rightAnswer = rightAnswerNum.toString();
  return [question, rightAnswer];
};

const startGcd = () => runMainEngine(getRound, description);

export default startGcd;
