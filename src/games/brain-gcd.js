import mainEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const leftNumber = Math.floor(Math.random() * 10);
  const rightNumber = Math.floor(Math.random() * 10);

  const question = `${leftNumber} ${rightNumber}`;

  let rightAnswerNum = 1;

  for (let i = 1; i <= leftNumber, i <= rightNumber; i += 1) {
    if (leftNumber % i === 0 && rightNumber % i === 0) {
        rightAnswerNum = i;
    }
  }

  const rightAnswer = rightAnswerNum.toString();
  return [question, rightAnswer];
};

const startGcd = () => mainEngine(getData, description);

export default startGcd;