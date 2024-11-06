import runMainEngine from '../index.js';
import getRandomNum from '../helper.js';

const description = 'Find theAnswer "yes" if given number is prime. Otherwise answer "no".';

const isModulo = (num, i) => (num % i === 0);

const isPrime = (randomNum) => {
  if (randomNum <= 1) {
    return false;
  }
  for (let i = 2; i <= randomNum / 2; i += 1) {
    if (isModulo(randomNum, i)) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const randomNum = getRandomNum(1, 20);
  const question = randomNum;
  const answer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const startPrime = () => runMainEngine(getRound, description);

export default startPrime;
