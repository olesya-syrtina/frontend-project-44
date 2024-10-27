import runMainEngine from '../index.js';
import getRandomNum from '../helper.js';

const description = 'Find theAnswer "yes" if given number is prime. Otherwise answer "no".';

const isModulo = (num, i) => (num % i === 0);

const getRound = () => {
  const randomNum = getRandomNum(1, 20);
  const question = randomNum;
  let rightAnswer = 'yes';

  for (let i = 2; i <= randomNum / 2; i += 1) {
    if (isModulo) {
      rightAnswer = 'no';
      break;
    }
  }

  if (randomNum === 1) {
    rightAnswer = 'no';
  }

  return [question, rightAnswer];
};

const startPrime = () => runMainEngine(getRound, description);

export default startPrime;
