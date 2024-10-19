import readlineSync from 'readline-sync';
import sayHello from '../cli.js';

const startCalculator = () => {
  const name = sayHello();
  console.log('What is the result of the expression?');

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {

    const leftNumber = Math.floor(Math.random() * 10);
    const rightNumber = Math.floor(Math.random() * 10);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * 2)];

    let rightAnswer = 0;

    if (operator === '+') {
      rightAnswer = leftNumber + rightNumber;
    } else if (operator === '-') {
      rightAnswer = leftNumber - rightNumber;
    } else {
      rightAnswer = leftNumber * rightNumber;
    }

    console.log(`Question: ${leftNumber} ${operator} ${rightNumber} `);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (parseInt(playerAnswer, 10) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startCalculator;