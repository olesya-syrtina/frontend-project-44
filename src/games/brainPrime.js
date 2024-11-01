import runMainEngine from '../index.js';
import getRandomNum from '../helper.js';

const description = 'Find theAnswer "yes" if given number is prime. Otherwise answer "no".';

const isModulo = (num, i) => (num % i === 0);

const isPrime = (randomNum) => {
  let answer = 'yes';
  for (let i = 2; i <= randomNum / 2; i += 1) {
    if (isModulo(randomNum, i)) {
      answer = 'no';
      break;
    }
  }

  if (randomNum <= 1) {
    answer = 'no';
  }
  return answer;
};

const getRound = () => {
  const randomNum = getRandomNum(1, 20);
  const question = randomNum;
  const answer = isPrime(randomNum);

  return [question, answer];
};

const startPrime = () => runMainEngine(getRound, description);

export default startPrime;
