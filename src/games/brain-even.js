import mainEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getData = () => {
  const question = Math.floor(Math.random() * 20) + 1;
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startEvenGame = () => mainEngine(getData, description);

export default startEvenGame;
