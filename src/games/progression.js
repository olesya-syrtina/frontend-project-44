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
  const progression = getProgression(startNumber, multiplyNumber, progressionLength);
  const hiddenNumIndex = getRandomNum(0, progression.length - 1);
  const answerNum = progression[hiddenNumIndex];

  progression[hiddenNumIndex] = '..';

  const question = progression.join(' ').toString();
  const answer = answerNum.toString();
  return [question, answer];
};

const startProgression = () => runMainEngine(getRound, description);

export default startProgression;
