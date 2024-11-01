import runMainEngine from '../index.js';
import getRandomNum from '../helper.js';

const description = 'What is the result of the expression?';

const getAnswerNum = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const getRound = () => {
  const number1 = getRandomNum(1, 10);
  const number2 = getRandomNum(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];

  const answerNum = getAnswerNum(operator, number1, number2);

  const answer = answerNum.toString();

  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

const startCalculator = () => runMainEngine(getRound, description);

export default startCalculator;
