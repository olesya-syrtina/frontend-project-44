import readlineSync from 'readline-sync';

const runMainEngine = (getRound, description) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, rightAnswer] = getRound();

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (!(playerAnswer === rightAnswer)) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runMainEngine;
