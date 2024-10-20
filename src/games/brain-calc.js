import mainEngine from '../index.js';

const description = 'What is the result of the expression?';

const getData = () => {
  const leftNumber = Math.floor(Math.random() * 10);
  const rightNumber = Math.floor(Math.random() * 10);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * 2)];

  let rightAnswerNum = 0;

  if (operator === '+') {
    rightAnswerNum = leftNumber + rightNumber;
  } else if (operator === '-') {
    rightAnswerNum = leftNumber - rightNumber;
  } else {
    rightAnswerNum = leftNumber * rightNumber;
  }
  const rightAnswer = rightAnswerNum.toString();

  const question = `${leftNumber} ${operator} ${rightNumber}`;
  return [question, rightAnswer];
};

const startCalculator = () => mainEngine(getData, description);

export default startCalculator;
