import runMainEngine from '../index.js';
import getRandomNum from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNumber, multiplyNumber, progressionLength) => {
  const numArray = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const num = startNumber + (multiplyNumber * i);
    numArray.push(num);
  }
  return numArray;
};

const getRound = () => {
  const startNumber = getRandomNum(1, 10);
  const multiplyNumber = getRandomNum(1, 5);
  const progressionLength = 10;
  const hiddenNumIndex = getRandomNum(0, progressionLength - 1);
  const numArray = getProgression(startNumber, multiplyNumber, progressionLength);
  const answerNum = numArray[hiddenNumIndex];

  numArray[hiddenNumIndex] = '..';

  const question = numArray.toString().replace(/,/g, ' ');
  const answer = answerNum.toString();
  return [question, answer];
};

const startProgression = () => runMainEngine(getRound, description);

export default startProgression;
