import readlineSync from 'readline-sync';
import sayHello from '../cli.js';

const startEvenGame = () => {
  const name = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(`Question: ${randomNumber}`);

    const playerAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

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

export default startEvenGame;
