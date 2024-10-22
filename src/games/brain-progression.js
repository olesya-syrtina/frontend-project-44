import mainEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const startNumber = Math.floor(Math.random() * 10);
  const multiplyNumber = Math.floor(Math.random() * 5) + 1;
  const numArray = [];

  const hiddenNumIndex = Math.floor(Math.random() * 10);

  let rightAnswerNum = 0;
  let question = '';

  for (let i = 0; i < 10; i += 1) {
    let num = startNumber + (multiplyNumber * i);
    if (i === hiddenNumIndex) {
      rightAnswerNum = num;
      num = '..';
    }
    numArray.push(num);
    question += `${num} `;
  }

  const rightAnswer = rightAnswerNum.toString();
  return [question, rightAnswer];
};

const startProgress = () => mainEngine(getData, description);

export default startProgress;
