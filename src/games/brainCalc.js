import runMainEngine from '../index.js';
import getRandomNum from '../helper.js';

const description = 'What is the result of the expression?';

const getRightAnswerNum = (operator, firstNumber, secondNumber) => {
  let rightAnswerNum = 0;
  switch (operator) {
    case '+':
      rightAnswerNum = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswerNum = firstNumber - secondNumber;
      break;
    default:
      rightAnswerNum = firstNumber * secondNumber;
  }
  return rightAnswerNum;
};

const getRound = () => {
  const firstNumber = getRandomNum(1, 10);
  const secondNumber = getRandomNum(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];

  const rightAnswerNum = getRightAnswerNum(operator, firstNumber, secondNumber);

  const rightAnswer = rightAnswerNum.toString();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, rightAnswer];
};

const startCalculator = () => runMainEngine(getRound, description);

export default startCalculator;
