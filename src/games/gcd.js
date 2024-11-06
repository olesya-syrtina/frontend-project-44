import runMainEngine from '../index.js';
import getRandomNum from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const hasCommonDivider = (div, number1, number2) => (number1 % div === 0 && number2 % div === 0);

const getCommonDivider = (number1, number2) => {
  let divider = 1;
  for (let i = 1; i <= number1 && i <= number2; i += 1) {
    if (hasCommonDivider(i, number1, number2)) {
      divider = i;
    }
  }
  return divider;
};

const getRound = () => {
  const number1 = getRandomNum(1, 20);
  const number2 = getRandomNum(1, 20);
  const question = `${number1} ${number2}`;

  const answerNum = getCommonDivider(number1, number2);

  const answer = answerNum.toString();
  return [question, answer];
};

const startGcd = () => runMainEngine(getRound, description);

export default startGcd;
