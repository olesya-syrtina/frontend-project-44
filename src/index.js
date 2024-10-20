import readlineSync from 'readline-sync';
import sayHello from './cli.js';

const mainEngine = (getData, description) => {
  const name = sayHello();
  console.log(description);

  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, rightAnswer] = getData();

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default mainEngine;
