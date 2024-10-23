import mainEngine from '../index.js';

const description = 'Find theAnswer "yes" if given number is prime. Otherwise answer "no".';

const getData = () => {
  const randomNum = Math.floor(Math.random() * 20) + 1;
  const question = randomNum;
  let rightAnswer = 'yes';

  for (let i = 2; i <= randomNum / 2; i += 1) {
    if (randomNum % i === 0) {
      rightAnswer = 'no';
      break;
    }
  }

  if (randomNum === 1) {
    rightAnswer = 'no';
  }

  return [question, rightAnswer];
};

const startPrime = () => mainEngine(getData, description);

export default startPrime;
