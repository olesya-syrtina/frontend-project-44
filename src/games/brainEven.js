import runMainEngine from '../index.js';
import getRandomNum from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => (question % 2 === 0);

const getRound = () => {
  const question = getRandomNum(1, 20);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startEvenGame = () => runMainEngine(getRound, description);

export default startEvenGame;
